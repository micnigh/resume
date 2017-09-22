import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

import { tags as parentTags } from '../';

export let title = `Hurricane Decision Simulator`;

export let start = ``;
export let end = ``;
export let duration = moment.duration({ months: 3 }).toJSON();

export let summaryMarkdown = `
Simulation of decisions that occur as a result of a hurricane heading towards a major city and how to handle its evacuation.
`;

export let tags = parentTags.concat(createTags(duration, [
  `matlab`,
]));

export let icons = [
  `Gulp`,
  `NodeJS`,
  `Docker`,
  `Backbone`,
  `Java`,
];

export let portfolio = {
  link: `http://eddy.nps.edu/hurricaneSim/`,
  hoverTitle: `View public website`,
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
