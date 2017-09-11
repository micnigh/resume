// modified version of `gatsby-plugin-typescript` which imports local
// `tsconfig.json` and sets compiler to esnext, allowing for
// compatability with `babel-styled-components`

const { transpileModule } = require(`typescript`);
const path = require(`path`);
const babel = require(`babel-core`);

const test = /\.tsx?$/;
const compilerDefaults = {
  target: `esnext`,
  experimentalDecorators: true,
  jsx: `react`,
};

module.exports.resolvableExtensions = () => [`.ts`, `.tsx`];

module.exports.modifyWebpackConfig = ({ config, stage }) => {
  const compilerOptions = require(`${__dirname}/../../tsconfig.json`).compilerOptions;

  const copts = { ...compilerDefaults, ...compilerOptions,
    module: `esnext`,
    target: `esnext`,
  };

  // React-land is rather undertyped; nontrivial TS projects will most likely
  // error (i.e., not build) at something or other.
  const tsOpts = { compilerOptions: copts, transpileOnly: true };

  // Load gatsby babel plugin to extract graphql query
  const extractQueryPlugin = path.resolve(`${__dirname}`, `../../node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js`);

  const bOpts = {
    plugins: [extractQueryPlugin],
  };

  config.loader(`typescript`, {
    test,
    loaders: [
      `babel?${JSON.stringify(bOpts)}`,
      `ts-loader?${JSON.stringify(tsOpts)}`,
    ],
  });
  
  return config;
}

module.exports.preprocessSource = (
  { contents, filename },
) => {
  const compilerOptions = require(`${__dirname}/../../tsconfig.json`).compilerOptions;

  // overwrite defaults with custom compiler options
  const copts = { ...compilerDefaults, ...compilerOptions, 
    target: `esnext`,
    module: `esnext`,
  };

  return test.test(filename) ? transpileModule(contents, { compilerOptions: copts }).outputText : null;
}
