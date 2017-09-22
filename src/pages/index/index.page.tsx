import * as React from 'react';
import A from '../components/a/';
import Link from '../components/link/';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import * as MomentTS from 'moment'; import MomentBabel from 'moment'; const moment = typeof MomentTS === 'function' ? MomentTS : MomentBabel; // moment import uses export = {} syntax - which works differently in typescript and babel, so we load both and pick the one that worked :'(

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
