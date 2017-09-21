import * as React from 'react';
import moment from 'moment';
import { find } from 'lodash';
import H from '../../../../../components/h/';
import Indent from '../../../../../components/indent/';
import Markdown from '../../../../../components/markdown/';

import * as SVGIcons from '../../../../../icons/';

import { sortExperience } from '../../';

const SVGLinkIcon = require('!svg-react-loader!svg-icon/dist/svg/awesome/chain.svg');

import { Container, Header, Date, SVGLink, LinksAndIcons, Icon, Icons, Projects } from './styles';
import * as styles from './styles';

import { Experience as ExperienceType, Project as ProjectType } from '../../../../../../data/experiences/index.types';

export const formatDate = (date: string) => {
  return date ? moment(date).format('YYYY-MM') : 'present';
};

export class Experience extends React.Component<{ experience: ExperienceType | ProjectType, level: number }, any> {
  render() {
    const { experience: { title, start, end, summaryMarkdown, projects, portfolio, icons }, level } = this.props;
    const renderDate = start || end;
    const renderProjects = projects && projects.length > 0;
    const renderIcons = icons && icons.length > 0;
    const headerLevel = level ? level : 3;
    const headerInline = headerLevel > 3;
    return (
      <Container renderProjects={renderProjects} inline={headerInline} >
        <Header>
          {(() => {
            const TitleH = styles[`Title${headerLevel}`];
            return <TitleH level={headerLevel} >{title}</TitleH>;
          })()}
          {!renderDate ? null : <Date>{`${formatDate(start)} to ${formatDate(end)}`}</Date>}
          <LinksAndIcons>
            {portfolio ? <SVGLink target={`_blank`} href={portfolio.link}><SVGLinkIcon title={portfolio.hoverTitle}/></SVGLink> : null}
            {!renderIcons ? null :
            <Icons>
              {icons.map((icon, i) => {
              const SVGIcon = SVGIcons[icon];
              return (
                <Icon key={i}>
                  <SVGIcon title={icon}/>
                </Icon>
              ); })}
            </Icons>}
          </LinksAndIcons>
        </Header>
        <Indent>
          <Markdown source={summaryMarkdown}/>
          {!renderProjects ? null :
            <Projects>
              <H level={headerLevel} inline >PROJECTS</H>
              {projects.sort(sortExperience).map((project: ProjectType, i: number) => (
                <Experience experience={project} level={headerLevel + 1} key={i} />
              ))}
            </Projects>
          }
        </Indent>
      </Container>
    );
  }
}

export default Experience;
