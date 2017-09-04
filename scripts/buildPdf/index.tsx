import { exec as _exec } from 'child_process';
import { spawn as _spawn } from 'child_process';
import { argv } from 'yargs';
import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import * as util from 'util';
import * as express from 'express';
import * as puppeteer from 'puppeteer';
import * as _mkdirp from 'mkdirp';

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const exec = util.promisify(_exec);
const mkdirp = util.promisify(_mkdirp);

const delayAfterServer = 500;
const delayAfterNavigation = 4000;

const margin = 0.4; /** inches */
const port = 5000;
const pdfPath = `public/download/Michael-Nigh.pdf`;

export const run = async () => {
  let success = false;
  
  try {
    await mkdirp(`public/download/`);
    const successes = await Promise.all([
      buildPDFPuppeteer(),
      buildPDFAthena(),
    ]);
    if (successes.every(s => s)) {
      // use athena pdf over puppeteer for now
      await copyFile(`${pdfPath}.athena.pdf`, `${pdfPath}`);
      success = true;
    }
  } catch (e) {
    console.error(e.stackTrace || e);
  }

  console.log(success ? `Sucessfully generated pdf ${pdfPath}` : `Failed to generate pdf`);

  return success;
};

if (argv.exec) {
  run();
}

export const buildPDFPuppeteer = async () => {
  let completed = false;

  const app = express();
  app.use(`/`, express.static(`public`));
  const server = await new Promise<http.Server>(resolve => {
    const newServer = app.listen(port, `0.0.0.0`, () => resolve(newServer));
  });

  await sleep(delayAfterServer);

  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  try {
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${port}/`, {
      waitUntil: 'networkidle',
      networkIdleTimeout: delayAfterNavigation,
    });
    await sleep(delayAfterNavigation);
    // wait for first render - may be necessary for web fonts to load
    // https://github.com/GoogleChrome/puppeteer/issues/422
    await page.screenshot();
    await page.pdf({
      path: `${pdfPath}.puppeteer.pdf`,
      printBackground: true,
      margin: {
        top: `${margin}in`,
        right: `${margin}in`,
        bottom: `${margin}in`,
        left: `${margin}in`,
      }
    });
    completed = true;
  } catch (e) {
    console.error(e.stackTrace || e);
  } finally {
    browser.close();
    server.close();
  }
  return completed;
};

const hasDocker = async () => {
  try {
    await execHelper(`which docker`, false);
  } catch (e) {
    return false;
  }
  return true;
};

export const execHelper = async (cmd: string, printCmd = true) => {
  printCmd && console.log(cmd);
  return (await exec(cmd)).stdout.trim();
};

export const buildPDFAthena = async () => {
  let completed = false;

  let networkId = null;
  let nginxId = null;
  let athenaId = null;
  
  if (!(await hasDocker())) {
    console.log(`docker binary not found, skipping athenapdf conversion`);
    return false;
  }

  try {
    const pwd = (await execHelper(`pwd`, false));
    networkId = (await execHelper(`docker network create resume-pdf-generator`));
    nginxId = (await execHelper(`docker run -d -v /${pwd}/public/:/usr/share/nginx/html/ nginx`));
    await execHelper(`docker network connect --alias web ${networkId} ${nginxId}`);
    await sleep(delayAfterServer);
    await execHelper(`docker run --rm --network ${networkId} --security-opt seccomp:unconfined -v /${pwd}/public/download/:/converted/ arachnysdocker/athenapdf athenapdf --delay ${delayAfterNavigation} http://web/ ${path.basename(pdfPath)}.athena.pdf`);

    completed = true;    
  } catch (e) {
    console.error(e.stackTrace || e);
  } finally {
    await execHelper(`docker rm -f ${nginxId}`);
    await execHelper(`docker network rm ${networkId}`);
  }

  return completed;
};

const sleep = async (duration: number) => {
  await new Promise(resolve => setTimeout(resolve, duration));
};

export const copyFile = async (src: string, dst: string) => {
  const contents = await readFile(src);
  await writeFile(dst, contents);
};

export default run;