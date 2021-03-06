import * as React from 'react';
import { Container, SVGLink, Title, Email, SocialNetworkLinks } from './styles';
import A from '../../../components/a/';

const SVGGithub = require('!svg-react-loader!svg-icon/dist/svg/ionic/social-github.svg');
const SVGLinkedin = require('!svg-react-loader!svg-icon/dist/svg/icomoon/linkedin2.svg');

export class Header extends React.Component {
  render() {
    return (
      <Container>
        <Title>MICHAEL NIGH</Title>
        <Email><A href={`mailto:contact@mnigh.com`}>contact@mnigh.com</A></Email>
        <SocialNetworkLinks>
          <SVGLink
            target={`_blank`}
            href={`https://github.com/micnigh/`}
          >
            <SVGGithub title={`Check out my github`} data-tippy-placement={`bottom`}/>
          </SVGLink>
          <SVGLink
            target={`_blank`}
            href={`https://www.linkedin.com/in/michaelnigh`}
          >
            <SVGLinkedin title={`Visit my LinkedIn`} data-tippy-placement={`bottom`}/>
          </SVGLink>
        </SocialNetworkLinks>
      </Container>
    );
  }
}

export default Header;