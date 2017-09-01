import { default as styled } from 'styled-components';
import Link from 'gatsby-link';
import * as globalStyles from '../../index/styles';

export const Container = styled.p`
  white-space: pre-wrap;
  font-size: ${globalStyles.font.size * 1.5}px;
  line-height: ${globalStyles.font.size * 1.5}px;
  margin: 0px;
  margin-bottom: ${globalStyles.font.size * 1}px;
`;