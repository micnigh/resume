import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedExperience, NormalizedProject } from '../index.types';
import { createExperience, createTags } from '..';

export let title = `Senior Web Developer - MacMillan`;

export let start = `2019-04`;
export let end = ``;
export let duration = moment.duration(moment().endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
**Contracted through TekSystems**

Support production applications of the Learning Support Tools team

Typical week: bug fix, feature work, coordinate with other teams, meet with architects to implement good design patterns, deploy to AWS with SRE support

Good communication required as org is mostly remote;  pair programming strongly encouraged
`;

export let tags = createTags(duration, [

]);

export let icons = [

];

export let projects = ([
  require('./projects/pathfinder').default,
  require('./projects/learningcurve').default,
  require('./projects/reading').default,
  require('./projects/pathfinder2').default,
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
