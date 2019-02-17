import * as React from 'react';
import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(
import { throttle } from 'lodash';

import { Container, Content, Guidelines, Guideline, GuidelineLabel, GuidelineLine, Graph, GraphBar, GraphBarTitle } from './styles';

import { generateTooltips } from '../../../../../../misc/tooltip';
import { Tag } from '../../../../../../data/experiences/index.types';

export let tagsToDisplay = [
  'Docker',
  'NodeJS',
  'Backbone',
  'React',
  'Redux',
  'Sass',
  'Rails',
  'Java',
  'PHP',
  'Typescript',
];

const isRunningInBrowser = typeof window !== 'undefined';

export class SkillsGraph extends React.Component<{ tags: Tag[] }, any> {

  enquirePrintHandlers: { match: Function, unmatch: Function };
  handleResizeDebounce: {(e: any): any};

  _element: HTMLElement | null = null;
  _elements = {};
  tooltips = null;

  state = {
    fullTagWidth: {},
    isTagShorthand: {},
    windowWidth: undefined,
  };

  constructor(props: any) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.handleResizeDebounce = throttle(this.handleResize, 250);
    this.enquirePrintHandlers = {
      match: this.handleResize,
      unmatch: this.handleResize,
    };
  }

  handleResize(e: any) {
    let { tags } = this.props;
    tags = tagsToDisplay.map(name => tags.find(t => t.name === name));

    this.setState({ windowWidth: window.innerWidth || document.body.clientWidth });

    let fullTagWidth = this.state.fullTagWidth || {};
    
    let isTagShorthand = {};
    tags.forEach(t => {
      let nodeBar = this._elements[`${t.name}Bar`] as HTMLElement;
      isTagShorthand[t.name] = nodeBar.offsetWidth < fullTagWidth[t.name] ? true : false;
    });
    this.setState({ isTagShorthand });
  }

  componentDidMount() {
    if (isRunningInBrowser) {
      window.addEventListener('resize', this.handleResizeDebounce);
      require('enquire.js').register('print', this.enquirePrintHandlers);

      let WebFont = require('webfontloader');
      WebFont.load({
        custom: {
          families: ['special-elite', 'capture-it'],
        },
        active: () => {
          let { tags } = this.props;
          tags = tagsToDisplay.map(name => tags.find(t => t.name === name));

          let fullTagWidth = this.state.fullTagWidth || {};
          tags.forEach(t => {
            let nodeTitle = this._elements[`${t.name}Title`] as HTMLElement;
            fullTagWidth[t.name] = nodeTitle.offsetWidth;
          });
          this.setState({ fullTagWidth });

          this.handleResize(undefined);
        }
      });
    }
  }

  componentWillUnmount() {
    if (isRunningInBrowser) {
      window.removeEventListener('resize', this.handleResizeDebounce);
      require('enquire.js').unregister('print', this.enquirePrintHandlers);
    }
  }

  componentWillUpdate() {
    if (this.tooltips) {
      this.tooltips.destroyAll();
    }
  }

  componentDidUpdate() {
    let { tags } = this.props;
    tags = tagsToDisplay.map(name => tags.find(t => t.name === name));
    tags.forEach(t => {
      let nodeBar = this._elements[`${t.name}Bar`] as HTMLElement;
      let isShorthand = this.state.isTagShorthand && this.state.isTagShorthand[`${t.name}`];
    });
    this.tooltips = generateTooltips(this._element);
  }

  render() {
    let { tags } = this.props;
    tags = tagsToDisplay.map(name => tags.find(t => t.name === name));

    let maxDuration = tags.reduce((a, b) => moment.duration(b.duration).subtract(moment.duration(a.duration)).asMilliseconds() < 0 ? a : b).duration;
    let yearsToRender = moment.duration(maxDuration).asYears();

    return (
      <Container innerRef={e => this._element = e}>
        <Content>
          <Guidelines>
            {[...Array(Math.floor(yearsToRender)).keys()].map(y => y + 1).map(y => {
              let percentageX = Math.floor((y / yearsToRender) * 100);
              return (
                <Guideline style={{ left: `${percentageX}%`}} key={y}>
                  {y === 1 ?
                    <GuidelineLabel top singular >{`${y} Year`}</GuidelineLabel> :
                    <GuidelineLabel top plural >{`${y}`}</GuidelineLabel>
                  }
                  <GuidelineLine/>
                  { y === 1 ?
                    <GuidelineLabel bottom singular >{`${y} Year`}</GuidelineLabel> :
                    <GuidelineLabel bottom plural >{`${y}`}</GuidelineLabel>
                  }
                </Guideline>
              );
            })}
          </Guidelines>
          <Graph>
            {tags.map((t, index) => {
              let normalizedDuration = moment.duration(t.duration).asMilliseconds() / moment.duration(maxDuration).asMilliseconds();
              let percentageWidth = Math.floor(normalizedDuration * 100);
              let shorthand = false;
              shorthand = this.state.isTagShorthand && this.state.isTagShorthand[`${t.name}`];
              return (
                <GraphBar key={index} style={{ width: `${percentageWidth}%` }} innerRef={e => this._elements[`${t.name}Bar`] = e} data-position={`right`} title={shorthand ? `${t.name}` : ``}>
                  <GraphBarTitle innerRef={e => this._elements[`${t.name}Title`] = e}>{shorthand ? t.shorthand : t.name}</GraphBarTitle>
                </GraphBar>
              );
            })}
          </Graph>
        </Content>
      </Container>
    );
  }
};

export default SkillsGraph;
