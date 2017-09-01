import * as React from 'react';
import { Container } from './styles';

export const H5 = ({ children, ...props }: any) => (
  <Container {...props}>
    {children}
  </Container>
);

export default H5;