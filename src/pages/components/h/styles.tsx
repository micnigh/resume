import { default as styled, css } from 'styled-components';
import * as globalStyles from '../../index/styles';

export const baseStyle = css`
  font-family: capture-it;
  font-weight: normal;
  margin: 0px;
  margin-top: ${globalStyles.font.size * 3}px;
  margin-bottom: ${globalStyles.font.size * 1}px;
`;
