import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `jenleearts.com`;

export let start = `2011-07`;
export let end = `2011-08`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Extended parveztaj.com GWT template to another site.  Setup domain, hosting, and CDN.
`;

export let tags = createTags(duration, [
  `GWT`,
  `JQuery`,
  `Typeface`,
  `Java`,
  `Javascript`,
  `Rackspace CloudFiles`,
  `Rackspace Cloud`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `Java`,
];

export let project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags,
  summaryMarkdown,
});

export default project;
