import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `parveztaj.com`;

export let start = `2010-09`;
export let end = `2011-01`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Constructed art gallery website using a variety of tools, including GWT, JQuery, and Typeface.  Emphasis on design, compatibility, and performance.  Expanded GWT to allow exact positioning, shadows, custom fonts, and history support.  Worked directly with the client to achieve the exact look and feel they needed.

Maintained and added new content coinciding with launch events for a few years; This included adding new collections, sending out newsletters, and posting to various social media.  Assisted in migration to ecommerce by importing existing products into new Shopify site in 2014.
`;

export let tags = createTags(duration, [
  `GWT`,
  `JQuery`,
  `Typeface`,
  `Java`,
  `Javascript`,
  `Rackspace Cloud`,
  `Rackspace CloudFiles`,
  `Flowplayer`,
  `Facebook`,
  `YouTube`,
  `Constant Contact`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `Java`,
];

export let portfolio = {
  link: `https://micnigh.github.io/parveztaj.com/`,
};

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
