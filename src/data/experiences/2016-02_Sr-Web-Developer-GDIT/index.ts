import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedExperience, NormalizedProject } from '../index.types';
import { createExperience, createTags } from '../';

import * as _ from 'lodash';

export let title = `Senior Web Developer - NPS CED3 - GDIT`;

export let start = `2015-02`;
export let end = `2018-02`;

export let duration = moment.duration(moment().diff(moment(start))).toJSON();

export let startDeveloper = `2015-02`;
export let endDeveloper = `2016-01`;
export let durationDeveloper = moment.duration(moment(endDeveloper).diff(moment(startDeveloper))).toJSON();

export let startSeniorDeveloper = `2016-02`;
export let endSeniorDeveloper = `2018-02`;
export let durationSeniorDeveloper = moment.duration(moment().diff(moment(startSeniorDeveloper))).toJSON();

export let summaryMarkdown = `
**Senior Web Developer**  ${startSeniorDeveloper} to ${endSeniorDeveloper}

**Web Developer**  ${startDeveloper} to ${endDeveloper}

Build and maintain CED3 web applications to enhance course development and delivery at the Naval Postgraduate School in Monterey.

Responsibilities include managing programming team, recruiting and training new hires, managing project timelines and scope, choosing tech stacks and architecture, setting long term plans and goals, and supporting and extending services.

Backends in NodeJs Express with Docker deployments using the [twelve-factor app](http://12factor.net/) model.

Frontends with React/Redux and Webpack for bundling.

Legacy systems in PHP, Java Wicket, and Backbone.
`;

let tagsDeveloper = createTags(durationDeveloper, [
  `NodeJS`,
  `Gulp`,
  `Git`,
  `Docker`,
  `Less`,
  `JQuery`,
  `Backbone`,
  `Java`,
  `HTML`,
  `CSS`,
]);

let tagsSeniorDeveloper = createTags(durationSeniorDeveloper, [
  `NodeJS`,
  `Webpack`,
  `Git`,
  `Docker`,
  `Sass`,
  `JQuery`,
  `React`,
  `Redux`,
  `Java`,
  `HTML`,
  `CSS`,
  `Typescript`,
  `Gulp`,
  `Backbone`,
]);

export let tags = _.uniq(tagsDeveloper.concat(tagsSeniorDeveloper));

export let icons = [];

export let projects = ([
  require('./projects/hurricane-decision-simulator').default,
  require('./projects/monterey-phoenix').default,
  require('./projects/post-assess').default,
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
