import * as React from 'react';
import { Container } from './styles';

export const Link = ({ children, ...props }: any) => (
  <Container {...props}>
    {children}
  </Container>
);

export default Link;