import * as React from 'react';
import { connect } from 'react-redux';
import { Container } from './styles';
import H2 from '../../../components/h2/';
import Indent from '../../../components/indent/';
import SkillsGraph from './components/skillsGraph/';

import { Tag } from '../../../../data/experiences/index.types';

let mapStateToProps = (state: any, ownProps: any) => {
  let tags = Object.keys(state.entities.tags).map(id => state.entities.tags[id]);
  return {
    tags,
  };
};

export class Skills extends React.Component<{ tags: Tag[] }, any> {
  render() {
    const { tags } = this.props;
    return (
      <Container>
        <H2>Skills</H2>
        <Indent>
          <SkillsGraph tags={tags}/>
        </Indent>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Skills);