import { default as styled } from 'styled-components';
import * as globalStyles from '../../index/styles';
import { baseStyle } from '../h/styles';

export const Container = styled.h3`
  ${p => baseStyle}
  font-size: ${globalStyles.font.size * 2}px;
  line-height: ${globalStyles.font.size * 2}px;
`;