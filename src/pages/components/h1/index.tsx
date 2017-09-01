import * as React from 'react';
import { Container } from './styles';

export const H1 = ({ children, ...props }: any) => (
  <Container {...props}>
    {children}
  </Container>
);

export default H1;