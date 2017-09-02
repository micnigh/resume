import * as React from 'react';
import * as moment from 'moment';
import { find } from 'lodash';
import H from '../../../../../components/h/';
import Indent from '../../../../../components/indent/';
import Markdown from '../../../../../components/markdown/';

import * as Icons from '../../../../../icons/';

import { sortExperience } from '../../';

const LinkLogo = require('!svg-react-loader!svg-icon/dist/svg/awesome/chain.svg');

import { Container, Header, Date, Logo, LinksAndIcons, LogoSvg, IconsContainer } from './styles';

import { Experience as ExperienceType, Project as ProjectType } from '../../../../../../data/experiences/index.types';

export const formatDate = (date: string) => {
  return date ? moment(date).format('YYYY-MM') : 'present';
};

export class Experience extends React.Component<{ experience: ExperienceType | ProjectType, level: number }, any> {
  render() {
    const { experience: { title, start, end, summaryMarkdown, projects, portfolio, icons }, level } = this.props;
    const renderProjects = projects && projects.length > 0;
    const renderIcons = icons && icons.length > 0;
    const headerLevel = level ? level : 3;
    const headerInline = headerLevel > 3;
    return (
      <Container renderProjects={renderProjects} >
        <Header inline={headerInline} >
          <H level={headerLevel} >{title}</H>
          <LinksAndIcons>
            {portfolio ? <Logo href={portfolio.link} title={portfolio.hoverTitle} ><LinkLogo/></Logo> : null}
            <IconsContainer>
              {renderIcons ? icons.map((icon, i) => {
                const IconComponent = Icons[icon];
                return (
                  <LogoSvg key={i} title={icon}>
                    <IconComponent/>
                  </LogoSvg>
                );
              }) : null}
            </IconsContainer>
          </LinksAndIcons>
          <Date>
            {!start && !end ?  null : `${formatDate(start)} to ${formatDate(end)}`}
          </Date>
        </Header>
        <Indent>
          <Markdown source={summaryMarkdown}/>
          {!renderProjects ? null :
            <div>
              <H level={headerLevel} inline >PROJECTS</H>
              {projects.sort(sortExperience).map((project: ProjectType, i: number) => (
                <Experience experience={project} level={headerLevel + 1} key={i} />
              ))}
            </div>
          }
        </Indent>
      </Container>
    );
  }
}

export default Experience;
