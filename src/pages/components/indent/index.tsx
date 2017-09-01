import * as React from 'react';
import { Container } from './styles';

export const Indent = ({ children, ...props }: any) => (
  <Container {...props}>
    {children}
  </Container>
);

export default Indent;