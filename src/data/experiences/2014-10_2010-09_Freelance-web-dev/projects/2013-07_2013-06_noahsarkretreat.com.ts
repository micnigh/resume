import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `noahsarkretreat.com`;

export let start = `2013-06`;
export let end = `2013-07`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Recovered website from [WayBackMachine](https://archive.org/web/) and ported to Wordpress theme.  Extended original site and added features such as responsive image galleries.  Updated content and added new pages.  During development used Rails with LiveReload to generate Coffeescript and SASS of WordPress theme.
`;

export let tags = createTags(duration, [
  `Rails`,
  `Wordpress`,
  `Ramnode`,
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

export let portfolio = {
  link: `https://micnigh.github.io/noahsarkretreat.com/`,
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
