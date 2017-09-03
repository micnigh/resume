import * as fs from 'fs';
import * as util from 'util';
import * as serve from 'serve';
import * as puppeteer from 'puppeteer';
import * as _mkdirp from 'mkdirp';

const mkdirp = util.promisify(_mkdirp);

const { exec } = require('yargs').argv;

const margin = 0.4; /** inches */
const port = 3000;

export const run = async () => {
  const server = serve(`public/`, {
    port,
  });
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    await page.goto(`http://127.0.0.1:${port}/`, {
      waitUntil: 'networkidle',
      networkIdleTimeout: 500,
    });
    await mkdirp(`public/download/`);
    await page.pdf({
      path: `public/download/Michael-Nigh.pdf`,
      printBackground: true,
      margin: {
        top: `${margin}in`,
        right: `${margin}in`,
        bottom: `${margin}in`,
        left: `${margin}in`,
      }
    });
  } catch (e) {
    console.error(e.stackTrace || e);
  } finally {
    browser.close();
    server.stop();
  }
};

if (exec) {
  run();
}

export default run;