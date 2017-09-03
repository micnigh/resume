import * as http from 'http';
import * as util from 'util';
import * as express from 'express';
import * as puppeteer from 'puppeteer';
import * as _mkdirp from 'mkdirp';

const mkdirp = util.promisify(_mkdirp);

const { exec } = require('yargs').argv;

const margin = 0.4; /** inches */
const port = 5000;

export const run = async () => {
  const app = express();
  app.use(`/`, express.static(`public`));
  const server = await new Promise<http.Server>(resolve => {
    const newServer = app.listen(port, `0.0.0.0`, () => resolve(newServer));
  });
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    await page.goto(`http://127.0.0.1:${port}/`, {
      waitUntil: 'networkidle',
      networkIdleTimeout: 5000,
    });
    // wait for first render - may be necessary for web fonts to load
    // https://github.com/GoogleChrome/puppeteer/issues/422
    await page.screenshot();
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
    server.close();
  }
};

if (exec) {
  run();
}

export default run;