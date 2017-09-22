import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedExperience, NormalizedProject } from '../index.types';
import { createExperience, createTags } from '../';

export let title = `Freelance Web Developer`;

export let start = `2010-09`;
export let end = `2014-10`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Building highly customized personal and small businesses websites.

See projects for details.
`;

export let tags = createTags(duration, [

]);

export let icons = [

];

export let projects = ([
  require('./projects/2011-01_2010-09_parveztaj.com').default,
  require('./projects/2011-02_2011-01_digitalcandypr.com').default,
  require('./projects/2011-08_2011-07_jenleearts.com').default,
  require('./projects/2012-01_2011-12_jamesdewulf.com').default,
  require('./projects/2012-06_2012-05_teresajanela.com').default,
  require('./projects/2013-04_2013-02_drbacal.com').default,
  require('./projects/2013-07_2013-06_noahsarkretreat.com').default,
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
