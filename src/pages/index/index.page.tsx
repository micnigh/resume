import * as React from 'react';
import A from '../components/a/';
import Link from '../components/link/';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import * as moment from 'moment';

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
    const title = `Michael Nigh - Resume - ${moment().format('YYYY-MM-DD')}`;
    return (
      <Container>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: title },
            { name: 'keywords', content: 'resume, static, gatsby' },
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
