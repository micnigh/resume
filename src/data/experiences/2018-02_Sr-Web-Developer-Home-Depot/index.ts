import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedExperience } from '../index.types';
import { createExperience, createTags } from '../';

export let title = `Senior Web Developer - Home Depot`;

export let start = `2018-02`;
export let end = ``;
export let duration = moment.duration(moment().endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
**Contractor through Visionaire**

In a small team, develop and release new versions of internal applications used throughout the organization.  Examples include the [Homer Fund Charity](https://www.thdhomerfund.org/) app as well as budgeting tools.

Backends built using a variety of frameworks, including Python Flask, Spring Boot, and NodeJS Express with apis in GraphQL or REST.

Frontends written in React with Redux or Angular.

Deployments with the [twelve-factor](http://12factor.net/) approach on [pivotal cloud foundry](https://pivotal.io/platform) and [google cloud platforms](https://cloud.google.com).

`;

export let tags = createTags(duration, [
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
  `Gulp`,
  `PostgreSQL`,
  `GraphQL`,
  `ExpressJS`,
  `Python`,
]);

export let icons = [
  `NodeJS`,
  `Java`,
  `React`,
];

export let projects = [];

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
