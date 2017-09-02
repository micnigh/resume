import * as React from 'react';
import { Container } from './styles';
import H2 from '../../../components/h2/';

import Experience from '../experience/components/experience/';

export class Education extends React.Component {
  render() {
    return (
      <Container>
        <H2>Education</H2>
        <Experience experience={{
          title: `SAN JOSE STATE UNIVERSITY`,
          summaryMarkdown: `Bachelor of Science - Computer Science`,
          start: `2004-08`,
          end: `2009-12`,
        }} />
      </Container>
    );
  }
}

export default Education;