import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `drbacal.com`;

export let start = `2013-02`;
export let end = `2013-04`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Constructed WordPress backed website using custom deployment tools I built earlier with Sprinkle (similar to Chef).  Worked with client and SEO specialist for design and content.  Used Rails with LiveReload to generate SASS and Coffeescript of WordPress theme.
`;

export let tags = createTags(duration, [
  `Rails`,
  `Wordpress`,
  `AWS EC2`,
  `AWS S3`,
  `AWS CloudFront`,
  `Git`,
  `VirtualBox`,
  `Sass`,
  `Compass`,
  `Ruby`,
  `PHP`,
  `Coffeescript`,
  `JQuery`,
  `Vagrant`,
  `lxc`,
  `zsh`,
  `oh-my-zsh`,
  `Sprinkle`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `Rails`,
  `Wordpress`,
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
