import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedExperience, NormalizedProject } from '../index.types';
import { createExperience, createTags } from '..';

export let title = `Senior Software Engineer - MacMillan`;

const tekStart = `2019-04`;
const tekEnd = `2020-07`

const fulltimeStart = `2020-07`;

export let start = `2019-04`;
export let end = ``;
export let duration = moment.duration(moment().endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
**Senior Software Engineer**  ${fulltimeStart} to present

**Senior Software Engineer - Contracted through TekSystems** ${tekStart} to ${tekEnd}

Support production applications for the Learning Support Tools team.

LST is a small team of developers maintaining multiple production applications.  As much of the team is remote good communication is a must.  Pair programming is strongly encouraged.

A typical week may include bug fixes, feature work, coordination with other teams, meetings with architects, and coordinating deploys to AWS with SRE's.

`;

export let tags = createTags(duration, [

]);

export let icons = [

];

export let projects = ([
  require('./projects/pathfinder').default,
  require('./projects/learningcurve').default,
  require('./projects/reading').default,
  // require('./projects/pathfinder2').default,
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
