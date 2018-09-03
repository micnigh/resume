[resume.mnigh.com](http://resume.mnigh.com)

[micnigh.github.io/resume/](https://micnigh.github.io/resume/)

[![Build Status](https://travis-ci.org/micnigh/resume.svg?branch=master)](https://travis-ci.org/micnigh/resume)

# Requirements/Recommended

 - [node] `v10+`
 - [yarn]

# Quick start

```bash
# first time
yarn install

# start a dev server
yarn run develop

# build static site
yarn run build

# run tests and watch
yarn run test:watch

# run deploy script
yarn run deploy

```

# Stack

Uses [gatsby] to generate a static site resume.

Based on the template at [micnigh/gatsby-starter-kit]

Features

 - [styled-components]
 - [typescript]
 - [redux]
 - [jest]

# TODO

 - Cleanup how data is loaded by switching to graphql queries provided via gatsby; currently inneficiently bundled in webpack bundle.



[node]: http://nodejs.org/en/
[docker]: http://www.docker.com/
[puppeteer]: http://github.com/GoogleChrome/puppeteer
[gatsby]: http://gatsbyjs.org
[styled-components]: http://styled-components.com
[typescript]: http://typescriptlang.org
[redux]: http://redux.js.org
[jest]: http://facebook.github.io/jest
[gatsby-start-default]: http://github.com/gatsbyjs/gatsby-starter-default
[micnigh/gatsby-starter-kit]: https://github.com/micnigh/gatsby-starter-kit
[yarn]: https://yarnpkg.com