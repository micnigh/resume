import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

import { tags as parentTags } from '../';

export let title = `Article Render Squad`;

export let start = `2018-10`;
export let end = ``;
export let duration = moment.duration(moment().endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `

Work with product owners to optimize SEO for article content.

Analyze SEO impact of React with THD architects, especially usage as an SPA, element replacement, and SSR.

Created automated tests to audit existing article content.

Implemented image snapshot differential testing for specific page components at various states.

Worked with Content team to improve content testing.  Added new front end libraries and assets for articles pages without impacting global bundle size.

Developed strategies for bundling front end assets of Content team in preperation for NextGen features.

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
