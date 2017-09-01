import { default as styled } from 'styled-components';
import Link from 'gatsby-link';
import * as globalStyles from '../../index/styles';

export const Container = styled.a`
  color: ${globalStyles.color.link};
  text-decoration: none;
  transition: all 400ms ease-out;
  text-shadow: -1px 1px 3px rgba(0, 0, 0, 0.3);
  &:visited {
    color: ${globalStyles.color.link};
  }
  &:hover {
    cursor: pointer;
    text-shadow: -1px 1px 3px rgba(0, 0, 0, 0.65);
    color: ${globalStyles.color.linkHover};
  }
`;