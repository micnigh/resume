import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

import { tags as parentTags } from '../';

export let title = `Article Render Squad`;

export let start = `2018-10`;
export let end = ``;
export let duration = moment.duration(moment().endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Create front end templates/js/css to support shift to new internal CMS for publishing article content on homedepot.com with current SEO standards.

Started with simple mustache templates and vanilla ES5 and Sass.

Expanded tooling to include a development server, webpack asset bundling, typescript, jest unit tests, and jest integration tests using image snapshot differential.

Assets are then built and published to an internal NPM artifactory to be consumed by content render services.

`;

export let tags = parentTags.concat(createTags(duration, [
  `Typescript`,
  `NodeJS`,
  `Webpack`,
  `Git`,
  `Docker`,
  `Sass`,
  `JQuery`,
  `HTML`,
  `CSS`,
  `ExpressJS`,
]));

export let icons = [
  `Webpack`,
  `NodeJS`,
  `Docker`,
];

export let portfolio = undefined;

export let project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags,
  summaryMarkdown,
  portfolio,
});

export default project;
