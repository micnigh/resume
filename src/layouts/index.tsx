import * as React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { Container } from './styles';

export class TemplateWrapper extends React.Component<any, any> {
  render() {
    const { children } = this.props;
    return (
      <Container>
        {children()}
      </Container>
    );
  }
}
  
export default TemplateWrapper;
