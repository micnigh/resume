import { default as styled, css } from 'styled-components';
import * as globalStyles from '../../../../styles';

export const Container = styled.div`
  margin-top: ${globalStyles.font.size * 5}px;
  margin-bottom: ${globalStyles.font.size * 7}px;
`;

export const Content = styled.div`
position: relative;
`;

export const Guidelines = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% + 36px);
  margin-top: -18px;
  z-index: 5;
`;

export const Guideline = styled.div`
  position: absolute;
  height: 100%;
`;

export const GuidelineLabel = styled.div`
  position: absolute;
  white-space: nowrap;
  color: #888;
  font-size: ${globalStyles.font.size * 1.5}px;
  line-height: ${globalStyles.font.size * 1.5}px;
  font-family: capture-it;

  ${p => p.top && css`
  top: -${globalStyles.font.size * 1.5 + 4}px;
  `}

  ${p => p.bottom && css`
  bottom: -${globalStyles.font.size * 1.5 + 4}px;
  `}

  ${p => p.singular && css`
  margin-left: -30.6px;
  `}

  ${p => p.plural && css`
  margin-left: -32.4px;
  `}

  @media print {
    color: ${globalStyles.color.text};
  }
`;

export const GuidelineLine = styled.div`
  position: absolute;
  background-color: ${globalStyles.color.textSecondary};
  width: 0px;
  padding: 0px 1px;
  height: 100%;

  @media print {
    background-color: ${globalStyles.color.text};
  }
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