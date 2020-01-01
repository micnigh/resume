import { NormalizedExperience, NormalizedProject, Tag } from './index.types';
import { merge } from 'lodash';
import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import * as uuid from 'uuid';
import tagIconMap from './tags/icons';
import tagShorthandMap from './tags/shorthand';

const marked = require('marked');
const renderer = new marked.Renderer();

renderer.link = ( href, title, text ) => {
  return `<a target='_blank' href='${ href }' title='${title || ''}' >${ text }</a>`;
};

let formatTime = (time: string) => {
  return time === `` ? time : moment(time).format();
};

export let createExperience = (options: NormalizedExperience): NormalizedExperience => {
  let experience = merge(
    {
      id: uuid.v4(),
    }, 
    options,
    {
      start: formatTime(options.start),
      end: formatTime(options.end),
      summaryHtml: marked(options.summaryMarkdown, { renderer }),
    }
  );
  if (typeof experience.portfolio !== 'undefined') {
    experience.portfolio = merge(
      { hoverTitle: `View snapshot of ${experience.title}` },
      experience.portfolio
    );
  }
  return experience;
};

let projectsById: { [guid: string]: NormalizedProject; } = {};
export let createProject = (options: NormalizedProject): NormalizedProject => {
  let project = merge(
    { id: uuid.v4() },
    options,
    {
      start: formatTime(options.start),
      end: formatTime(options.end),
      summaryHtml: marked(options.summaryMarkdown, { renderer }),
    }
  );
  projectsById[project.id] = project;
  if (typeof project.portfolio !== 'undefined') {
    project.portfolio = merge(
      { hoverTitle: `View snapshot of ${project.title}` },
      project.portfolio
    );
  }
  return project;
};

let tagCacheByName = {};
export let tags: { [guid: string]: Tag; } = {};
export let createTags = (duration: string, newTags: string[]): string[] => {
  return newTags.map(t => {
    let tag = tagCacheByName[t] as Tag;
    if (typeof tag !== 'undefined') {
      tag = merge(tag, {
        duration: moment.duration(tag.duration).add(moment.duration(duration)).toJSON(),
      });
      return tag;
    } else {
      return createTag({ name: t, duration, icon: tagIconMap[t], shorthand: tagShorthandMap[t] });
    }
  }).map(t => t.id) as string[];
};
let createTag = (options: Tag): Tag => {
  let tag = merge(
    { id: uuid.v4() }, 
    options,
  );
  tagCacheByName[options.name] = tag;
  tags[tag.id] = tag;
  return tag;
};

let experiencesAsArray: NormalizedExperience[] = [
  require('./2007-01_2005-01_duovu.com_Duovu-Inc/').default,
  require('./2012-03_2011-12_Mobile-Game-Dev_Xtracool/').default,
  require('./2012-08_2012-04_Technical-Lead_Sutisoft/').default,
  require('./2014-10_2010-09_Freelance-web-dev/').default,
  require('./2016-02_Sr-Web-Developer-GDIT/').default,
  require('./2018-02_Sr-Web-Developer-Home-Depot/').default,
  require('./2019-04_Sr-Web-Developer-MacMillan/').default,
  require('./hobbies/').default,
];

let experiencesById: { [guid: string]: NormalizedExperience; } = {};
experiencesAsArray.forEach(e => experiencesById[e.id as string] = e);

export let experiences = experiencesById;
export let projects = projectsById;

export default {
  entities: {
    experiences,
    projects,
    tags,
  },
};
