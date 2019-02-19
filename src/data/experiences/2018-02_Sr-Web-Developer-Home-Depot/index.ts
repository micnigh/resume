import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedExperience, NormalizedProject } from '../index.types';
import { createExperience, createTags } from '../';

export let title = `Senior Web Developer - Home Depot`;

export let start = `2018-02`;
export let end = ``;
export let duration = moment.duration(moment().endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
**Contracted through Visionaire**

Develop internal applications and support homedepot.com content creation using a variety of modern and legacy tools for front and backend.

`;

export let tags = createTags(duration, [
  // `Typescript`,
  // `NodeJS`,
  // `Webpack`,
  // `Git`,
  // `Docker`,
  // `Sass`,
  // `JQuery`,
  // `React`,
  // `Redux`,
  // `Java`,
  // `HTML`,
  // `CSS`,
  // `Gulp`,
  // `PostgreSQL`,
  // `GraphQL`,
  // `ExpressJS`,
  // `Python`,
]);

export let icons = [
  // `NodeJS`,
  // `Java`,
  // `React`,
];

export let projects = ([
  require('./projects/article-render').default,
  require('./projects/account-creation').default,
  require('./projects/forecast-tool').default,
  require('./projects/homer-fund').default,
] as NormalizedProject[]).map(p => p.id) as string[];

export let experience: NormalizedExperience = createExperience({
  title,
  start,
  end,
  duration,
  icons,
  tags,
  projects,
  summaryMarkdown,
});

export default experience;
