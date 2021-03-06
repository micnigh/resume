import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

import { tags as parentTags } from '../';

export let title = `Article Render Squad`;

export let start = `2018-10`;
export let end = `2019-03`;
export let duration = moment.duration(moment().endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Work with product owners to optimize SEO and render new article content as lead front end engineer.

Analyze SEO impact of React usage with THD architects as an SPA, element replacement, and SSR.

Create automated tests to validate all new and existing content is rendered correctly.

Implement image snapshot differential testing for components at various states.

Work with multiple teams to improve testing process throughout deployments.

Develop strategies to implement NextGen THD features.

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
