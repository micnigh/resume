"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// modified version of `gatsby-plugin-typescript` which imports local
// `tsconfig.json` and sets compiler to esnext, allowing for
// compatability with `babel-styled-components`

var _require = require("typescript"),
    transpileModule = _require.transpileModule;

var path = require("path");
var babel = require("babel-core");

var test = /\.tsx?$/;
var compilerDefaults = {
  target: "esnext",
  experimentalDecorators: true,
  jsx: "react"
};

module.exports.resolvableExtensions = function () {
  return [".ts", ".tsx"];
};

module.exports.modifyWebpackConfig = function (_ref) {
  var config = _ref.config,
      stage = _ref.stage;

  var compilerOptions = require(__dirname + "/../../tsconfig.json").compilerOptions;

  var copts = _extends({}, compilerDefaults, compilerOptions, {
    module: "esnext",
    target: "esnext"
  });

  // React-land is rather undertyped; nontrivial TS projects will most likely
  // error (i.e., not build) at something or other.
  var tsOpts = { compilerOptions: copts, transpileOnly: true };

  // Load gatsby babel plugin to extract graphql query
  var extractQueryPlugin = path.resolve("" + __dirname, "../../node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js");

  var bOpts = {
    plugins: [extractQueryPlugin]
  };

  config.loader("typescript", {
    test: test,
    loaders: ["babel?" + JSON.stringify(bOpts), "ts-loader?" + JSON.stringify(tsOpts)]
  });

  return config;
};

module.exports.preprocessSource = function (_ref2) {
  var contents = _ref2.contents,
      filename = _ref2.filename;

  var compilerOptions = require(__dirname + "/../../tsconfig.json").compilerOptions;

  // overwrite defaults with custom compiler options
  var copts = _extends({}, compilerDefaults, compilerOptions, {
    target: "esnext",
    module: "esnext"
  });

  return test.test(filename) ? transpileModule(contents, { compilerOptions: copts }).outputText : null;
};