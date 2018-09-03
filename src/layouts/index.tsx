import * as React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { generateTooltips } from '../misc/tooltip';

import 'normalize.css';
import 'tippy.js/dist/tippy.css';
import './index.css';
import { Container } from './styles';

const isRunningInBrowser = typeof window !== 'undefined';

export class TemplateWrapper extends React.Component<any, any> {

  _element: HTMLElement | null = null;

  componentDidMount() {
    if (isRunningInBrowser) {
      generateTooltips(this._element as HTMLElement);
      
      let WebFont = require('webfontloader');
      WebFont.load({
        custom: {
          families: ['special-elite', 'capture-it'],
        },
        active: () => {

        }
      });
    }
  }
  
  render() {
    const { children } = this.props;
    return (
      <Container innerRef={e => this._element = e}>
        {children}
      </Container>
    );
  }
}
  
export default TemplateWrapper;
