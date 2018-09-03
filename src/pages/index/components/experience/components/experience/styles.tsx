import { default as styled, css } from 'styled-components';
import * as globalStyles from '../../../../styles';
import { Container as ASvg } from '../../../../../components/aSvg/styles';
import * as h from '../../../../../components/h/styles';
import { indent } from '../../../../../components/indent/styles';
import { marginSizing } from '../../../../../components/h/styles';

const iconSize = {
  desktop: globalStyles.font.size * 2,
  phone: globalStyles.font.size * 3,
};

export const Container = styled.div`
  page-break-inside: avoid;
  margin-top: ${globalStyles.font.size * 4}px;

  ${p => p.inline && css`margin-top: ${globalStyles.font.size * 2}px;`}
`;

export const generateTitle = (level: number) => styled(h[`h${level}`])`
  margin-top: 0px;
  margin-bottom: 0px;
  order: 1;
`;

export const Title1 = generateTitle(1);
export const Title2 = generateTitle(2);
export const Title3 = generateTitle(3);
export const Title4 = generateTitle(4);
export const Title5 = generateTitle(5);
export const Title6 = generateTitle(6);

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

    filter: drop-shadow( -1px 1px 0.5px rgba(0, 0, 0, 0.3));
    
    /**Fix image blurr on webkit browsers 
     * https://stackoverflow.com/a/25771969 */
    transform: translateZ(0);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${marginSizing}

  @media screen and (max-width: 768px) {
    display: block;

    ${Title1}, ${Title2}, ${Title3}, ${Title4}, ${Title5}, ${Title6} {
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

export const Projects = styled.div`
  margin-top: ${globalStyles.font.size * 2}px;
`;
