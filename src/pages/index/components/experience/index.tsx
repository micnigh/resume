import * as React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container } from './styles';
import H2 from '../../../components/h2/';
import Indent from '../../../components/indent/';

import { Experience as ExperienceType, Project as ProjectType } from '../../../../data/experiences/index.types';
import { denormalizeExperience } from '../../../../data/normalizr/denormalizr/experience';

import Experience from './components/experience/';

export const sortExperience = (a: ExperienceType | ProjectType, b: ExperienceType | ProjectType) => {
  if (a.end && b.end) {
    return moment(b.end).isAfter(moment(a.end)) ? 1 : -1;
  } else {
    if (!b.start && !b.end) {
      return -1;
    }
    return !b.end ? 1 : -1;
  }
};

export const mapStateToProps = (state: any, ownProps: any) => {
  let experiences = Object
    .keys(state.entities.experiences)
    .map(id => denormalizeExperience(id, state.entities))
    .sort(sortExperience);
  return {
    experiences,
  };
};

export class Experiences extends React.Component<{ experiences: ExperienceType[] }, any> {
  render() {
    const { experiences } = this.props;
    
    return (
      <Container>
        <H2>Experience</H2>
        {experiences.map((experience, i) => (
          <Experience experience={experience} key={i} />
        ))}
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Experiences);