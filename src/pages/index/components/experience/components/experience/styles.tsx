import { default as styled, css } from 'styled-components';
import * as globalStyles from '../../../../styles';
import ASvg from '../../../../../components/aSvg/';
import { marginSizing } from '../../../../../components/h/styles';

export const Container = styled.div`
  page-break-inside: avoid;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /** override normal margin values so we can vertically align center */
  & * {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  ${marginSizing}
`;

export const LinksAndIcons = styled.div`
  display: inline-flex;
  flex: 1;
`;

export const Date = styled.div`
  
`;

export const Logo = styled(ASvg)`
  margin-left: ${globalStyles.font.size * 2}px;
  line-height: ${globalStyles.font.size * 2}px;
  svg {
    width: ${globalStyles.font.size * 2}px;
    height: ${globalStyles.font.size * 2}px;
  }
`;

export const IconsContainer = styled.span`
  margin-left: ${globalStyles.font.size * 2}px;
  height: ${globalStyles.font.size * 2}px;
`;

export const LogoSvg = styled.span`
  margin-right: ${globalStyles.font.size * 0.5}px;
  line-height: ${globalStyles.font.size * 2}px;
  width: ${globalStyles.font.size * 2}px;
  height: ${globalStyles.font.size * 2}px;
  svg {
    width: ${globalStyles.font.size * 2}px;
    height: ${globalStyles.font.size * 2}px;;
  }
`;