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
  // line-height: 1;
  text-transform: uppercase;
  ${marginSizing}
`;
