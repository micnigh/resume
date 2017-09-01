import * as React from 'react';
import { Container, Logo } from './styles';

const githubSvg = require('svg-icon/dist/svg/ionic/social-github.svg');
const GithubLogo = require('!svg-react-loader!svg-icon/dist/svg/ionic/social-github.svg');

export class Header extends React.Component {
  render() {
    return (
      <Container>
        Header
        <Logo href={`https://github.com/micnigh/`}>
          <GithubLogo/>
        </Logo>
      </Container>
    );
  }
}

export default Header;