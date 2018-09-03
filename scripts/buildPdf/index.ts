import { argv } from 'yargs';
import * as path from 'path';
import * as http from 'http';
import * as util from 'util';
import express from 'express';
import puppeteer from 'puppeteer';
import _mkdirp from 'mkdirp';
let gatsbyConfig = require('../../gatsby-config');

const mkdirp = util.promisify(_mkdirp);

const timeout = 100 * 100 /* ms */;

const margin = 0.4; /** inches */
const pdfPath = `public/download/Michael-Nigh.pdf`;

const { prefixPaths } = argv;
const { pathPrefix } = gatsbyConfig;
const baseUrl = `${prefixPaths ? `${pathPrefix}/` : `/`}`;

export const run = async () => {
  let success = false;

  console.log(`Building PDF`);

  if (prefixPaths) {
    console.log(`prefixPaths set - adjusting baseUrl to ${baseUrl}`);
  } else {
    console.log(`prefixPaths not set - adjusting baseUrl to ${baseUrl}`);
  }
  
  try {
    await mkdirp(path.dirname(pdfPath));
    success = await buildPDFPuppeteer();
  } catch (e) {
    console.error(e.stackTrace || e);
  }

  console.log(success ? `Sucessfully built pdf ${pdfPath}` : `Failed to build pdf`);

  return success;
};

if (argv.exec) {
  run();
}

export const buildPDFPuppeteer = async () => {
  let completed = false;

  let port = 0;

  const app = express();
  app.use(`${baseUrl}`, express.static(`public`));
  const server = await new Promise<http.Server>(resolve => {
    const newServer = app.listen(0, `0.0.0.0`, () => resolve(newServer));
  });
  port = server.address().port;

  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  try {
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${port}${baseUrl}`, {
      waitUntil: 'networkidle2',
      timeout,
    });
    // wait for first render - may be necessary for web fonts to load
    // https://github.com/GoogleChrome/puppeteer/issues/422
    await page.screenshot();
    await page.pdf({
      path: `${pdfPath}`,
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

export default run;