import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `Docker migration`;

export let start = `2014-07`;
export let end = `2014-08`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Applied Docker to new and current web projects.  Moved away from shell and ruby scripts to Dockerfiles with simple build scripts.  Over time learned and applied best practices - based on docker usage in small and big companies.
`;

export let tags = createTags(duration, [
  `NodeJS`,
  `Docker`,
  `Wordpress`,
  `Grunt`,
  `Gulp`,
  `Git`,
  `HTML`,
  `CSS`,
]);

export let icons = [

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
