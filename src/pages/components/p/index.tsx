import * as React from 'react';
import { Container } from './styles';

export const P = ({ children, ...props }: any) => (
  <Container {...props}>
    {children}
  </Container>
);

export default P;