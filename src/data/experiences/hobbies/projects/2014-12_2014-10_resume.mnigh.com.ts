import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `resume.mnigh.com`;

export let start = `2014-11`;
export let end = `2014-12`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Rebuilt resume with NodeJs stack from custom Gulp tasks.  Snapshots of previous projects ported into Docker containers and run on a single VPS behind an Nginx proxy.
`;

export let tags = createTags(duration, [
  `NodeJS`,
  `Gulp`,
  `Bower`,
  `Digital Ocean`,
  `Git`,
  `Docker`,
  `Sass`,
  `Compass`,
  `Coffeescript`,
  `JQuery`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `Gulp`,
  `NodeJS`,
  `Bower`,
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
