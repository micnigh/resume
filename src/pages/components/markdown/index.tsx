import * as React from 'react';
import { Container } from './styles';
import A from '../a/';
import H from '../h/';
import P from '../p/';
import Link from '../link/';

export const Markdown = ({ children, ...props }: any) => (
  <Container
    renderers={{
      Link: ({ href, nodeKey, literal, ...linkProps }) => {
        if (/^http/.test(href)) {
          return <A href={href} {...linkProps} />;
        } else {
          return <Link to={href} {...linkProps} />;
        }
      },
      Heading: H,
      paragraph: P,
    }}
    {...props}
  >
    {children}
  </Container>
);

export default Markdown;