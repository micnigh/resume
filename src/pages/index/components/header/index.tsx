import * as React from 'react';
import { Container, Logo, Title, Email, SocialNetworkLinks } from './styles';
import A from '../../../components/a/';

const GithubLogo = require('!svg-react-loader!svg-icon/dist/svg/ionic/social-github.svg');
const LinkedinLogo = require('!svg-react-loader!svg-icon/dist/svg/icomoon/linkedin2.svg')

export class Header extends React.Component {
  render() {
    return (
      <Container>
        <Title>MICHAEL NIGH</Title>
        <Email><A href={`mailto:contact@mnigh.com`}>contact@mnigh.com</A></Email>
        <SocialNetworkLinks>
          <Logo
            title={`Check out my github`}
            href={`https://github.com/micnigh/`}
          >
            <GithubLogo/>
          </Logo>
          <Logo
            title={`Visit my LinkedIn`}
            href={`https://www.linkedin.com/in/michaelnigh`}
          >
            <LinkedinLogo/>
          </Logo>
        </SocialNetworkLinks>
      </Container>
    );
  }
}

export default Header;