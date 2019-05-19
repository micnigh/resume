import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `jamesdewulf.com`;

export let start = `2011-12`;
export let end = `2012-01`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Rebuilt site as an SPA to be much faster and added new features.  Features include jqZoom for product photos, fancybox display of press magazine articles, and videos of products.  Built with web app generator I began a few months prior.
`;

export let tags = createTags(duration, [
  `NodeJS`,
  `Coffeescript`,
  `CoffeeKup`,
  `Jasmine`,
  `SEO`,
  `BDD`,
  `TDD`,
  `Rackspace Cloud`,
  `Rackspace CloudFiles`,
  `fancyBox`,
  `jqZoom`,
  `Flowplayer`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `NodeJS`,
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
