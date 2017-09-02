import { default as styled, css } from 'styled-components';
import * as globalStyles from '../../../../styles';
import ASvg from '../../../../../components/aSvg/';
import H from '../../../../../components/h/';
import { indent } from '../../../../../components/indent/styles';
import { marginSizing } from '../../../../../components/h/styles';

const iconSize = {
  desktop: globalStyles.font.size * 2,
  phone: globalStyles.font.size * 3,
};

export const Container = styled.div`
  page-break-inside: avoid;
`;

export const Title = styled(H)`
  margin-top: 0px;
  margin-bottom: 0px;
  order: 1;
`;

export const Date = styled.div`
  order: 3;
`;

export const LinksAndIcons = styled.div`
  display: inline-flex;
  flex: 1;
  order: 2;
`;

export const SVGLink = styled(ASvg)`
  margin-left: ${globalStyles.font.size * 2}px;
  line-height: ${iconSize.desktop}px;
  svg {
    width: ${iconSize.desktop}px;
    height: ${iconSize.desktop}px;
  }
`;

export const Icons = styled.span`
  margin-left: ${globalStyles.font.size * 2}px;
  height: ${iconSize.desktop}px;
`;

export const Icon = styled.span`
  margin-right: ${globalStyles.font.size * 0.5}px;
  line-height: ${iconSize.desktop}px;
  width: ${iconSize.desktop}px;
  height: ${iconSize.desktop}px;
  svg {
    width: ${iconSize.desktop}px;
    height: ${iconSize.desktop}px;;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${marginSizing}

  @media screen and (max-width: 768px) {
    display: block;

    ${Title} {
      float: left;
    }
    ${Date} {
      float: left;
      display: block;
      width: 100%;
      padding-top: ${globalStyles.font.size}px;
    }
    ${LinksAndIcons} {
      display: flex;
      clear: both;
      padding-top: ${globalStyles.font.size}px;
    }

    ${Icons} {
      margin-left: ${indent}px;
      height: ${iconSize.phone}px;
    }

    ${SVGLink} {
      margin-left: ${indent}px;
      width: ${iconSize.phone}px;
      height: ${iconSize.phone}px;
      line-height: ${iconSize.phone}px;
      svg {
        width: ${iconSize.phone}px;
        height: ${iconSize.phone}px;
      }
    }

    ${Icon} {
      width: ${iconSize.phone}px;
      height: ${iconSize.phone}px;
      line-height: ${iconSize.phone}px;
      svg {
        width: ${iconSize.phone}px;
        height: ${iconSize.phone}px;
      }
    }
  }
`;


