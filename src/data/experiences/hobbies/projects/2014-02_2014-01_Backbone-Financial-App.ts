import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `Backbone Financial App`;

export let start = `2014-01`;
export let end = `2014-02`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Development spike to experiment with Backbone after a few books and [backbonerails.com](http://backbonerails.com) screencast.  Built in NodeJs with seperate Grunt tasks for retrieving data, serving a REST API, and rendering.  Did not pursue due to high licensing cost of financial data.
`;

export let tags = createTags(duration, [
  `NodeJS`,
  `Bootstrap`,
  `Grunt`,
  `MongoDB`,
  `Mongoose`,
  `Git`,
  `Backbone`,
  `Marionette`,
  `Sass`,
  `Coffeescript`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `Grunt`,
  `NodeJS`,
  `Backbone`,
  `MongoDB`,
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
