import * as React from 'react';
import A from '../components/a/';
import Link from '../components/link/';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { Container } from './styles';
import Header from './components/header/';
import Summary from './components/summary/';
import Skills from './components/skills/';
import Experience from './components/experience/';
import Education from './components/education/';

const mapStateToProps = (state: any, ownProps: any) => {
  return {};
};

export class IndexPage extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <Helmet
          title='gatsby starter kit'
          meta={[
            { name: 'description', content: 'gatsby' },
            { name: 'keywords', content: 'gatsby' },
          ]}
        />
        <Header/>
        <Summary/>
        <Skills/>
        <Experience/>
        <Education/>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(IndexPage);
