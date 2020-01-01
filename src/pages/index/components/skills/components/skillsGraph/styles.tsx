import { default as styled, css } from 'styled-components';
import * as globalStyles from '../../../../styles';

export const Container = styled.div`
  margin-top: ${globalStyles.font.size * 5}px;
  margin-bottom: ${globalStyles.font.size * 7}px;
`;

export const Content = styled.div`
position: relative;
`;

export const Graph = styled.div`
  position: relative;
  z-index: 10;
`;

export const GraphBar = styled.div`
  background-color: ${globalStyles.color.bar};
  margin-top: 2.25px;
  padding: 0px 0px;
  text-align: right;
  vertical-align: middle;

  @media print {
    background-color: ${globalStyles.color.barPrint};
  }
`;

export const GraphBarTitle = styled.span`
  font-family: capture-it;
  color: ${globalStyles.color.barText};
  font-size: ${globalStyles.font.size * 2}px;
  margin-right: 2px;

  @media print {
    color: ${globalStyles.color.barPrintText};
  }
`;