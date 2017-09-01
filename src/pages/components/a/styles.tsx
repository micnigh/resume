import { default as styled } from 'styled-components';
import Link from 'gatsby-link';

const color = `#333`;

export const Container = styled.a`
  color: ${color};
  text-decoration: none;
  transition: all 400ms ease-out;
  text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.5);
  &:visited {
    color: ${color};
  }
`;