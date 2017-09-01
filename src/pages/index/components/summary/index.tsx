import * as React from 'react';
import { Container } from './styles';
import Markdown from '../../../components/markdown/';
import H2 from '../../../components/h2/';
import Indent from '../../../components/indent/';

export class Summary extends React.Component {
  render() {
    return (
      <Container>
        <H2>Summary</H2>
        <Indent>
          <Markdown source={content} />
        </Indent>
      </Container>
    );
  }
}

export const content = `
Strong **front** and **backend** web developer seeking to join a solid team.

Interested in tools that **get the job done** while boosting **productivity**.

Believe good code is **easy to maintain**, **well tested**, and **easily extended**.

**Big on OSS** - I like knowing how the tools I use work.

`;

export default Summary;