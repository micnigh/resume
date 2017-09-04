import { default as styled, css } from 'styled-components';
import * as globalStyles from '../../index/styles';

export const marginSizing = css`
  margin: 0px;
  margin-top: ${globalStyles.font.size * 4}px;
  margin-bottom: ${globalStyles.font.size * 1}px;
  
  ${p => p.inline && css`
  margin-top: ${globalStyles.font.size * 2}px;
  `}
`;

export const baseStyle = css`
  font-family: capture-it;
  font-weight: normal;
  text-transform: uppercase;
  ${marginSizing}
`;

export { Container as h1 } from '../h1/styles';
export { Container as h2 } from '../h2/styles';
export { Container as h3 } from '../h3/styles';
export { Container as h4 } from '../h4/styles';
export { Container as h5 } from '../h5/styles';
export { Container as h6 } from '../h6/styles';
