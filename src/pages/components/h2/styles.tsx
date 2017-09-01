import { default as styled } from 'styled-components';
import Link from 'gatsby-link';
import * as globalStyles from '../../index/styles';
import { baseStyle } from '../h/styles';

export const Container = styled.h2`
  ${baseStyle}
  font-size: ${globalStyles.font.size * 3}px;
  line-height: ${globalStyles.font.size * 3}px;
`;