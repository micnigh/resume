import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

import { tags as parentTags } from '../';

export let title = `Homer Fund`;

export let start = `2018-02`;
export let end = `2018-02`;

export let duration = moment.duration(moment().diff(moment(start))).toJSON();

export let summaryMarkdown = `
Rapidly shipped updates to Python Flask app to support the Homer Fund 2018 charity.

Also created a small support service in Spring Boot to consume APIs otherwise innacessible internally through Python.

`;

export let tags = parentTags.concat(createTags(duration, [
  `Python`,
  `Flask`,
  `Java`,
]));

export let icons = [
  `Python`,
  `Java`,
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
