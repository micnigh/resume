import { default as styled } from 'styled-components';
import * as globalStyles from '../../index/styles';

export const indent = globalStyles.font.size * 1;

export const Container = styled.div`
  padding-left: ${indent}px;
`;