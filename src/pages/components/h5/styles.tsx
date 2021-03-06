import { default as styled } from 'styled-components';
import * as globalStyles from '../../index/styles';
import { baseStyle } from '../h/styles';

export const Container = styled.h5`
  ${p => baseStyle}
  font-size: ${globalStyles.font.size * 1.25}px;
  line-height: ${globalStyles.font.size * 1.25}px;
`;