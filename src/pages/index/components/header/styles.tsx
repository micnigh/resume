import { default as styled } from 'styled-components';
import { Section } from '../../styles';

import { Container as ASvg } from '../../../components/aSvg/styles';
import { h1 } from '../../../components/h/styles';

import * as globalStyles from '../../styles';

const iconSize = {
  desktop: globalStyles.font.size * 2,
  phone: globalStyles.font.size * 3,
};

const paddingVert = globalStyles.font.size * 1;

export const Container = Section.extend`
  margin-top: ${globalStyles.font.size * 3}px;
  position: relative;
`;

export const Title = h1.extend`
  text-align: center;
  margin: 0px;
`;

export const Email = styled.div`
  display: block;
  text-align: center;
  font-family: special-elite;
  font-size: ${globalStyles.font.size * 2}px;
  line-height: ${globalStyles.font.size * 2}px;
`;

export const SVGLink = ASvg.extend`
  margin-left: ${globalStyles.font.size * 2}px;
  line-height: ${iconSize.desktop}px;
  svg {
    width: ${iconSize.desktop}px;
  }
`;

export const SocialNetworkLinks = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;

  @media screen and (max-width: 768px) {
    position: relative;
    display: block;
    text-align: center;
    margin-top: ${globalStyles.font.size * 2}px;
    height: ${iconSize.phone}px;
    ${SVGLink} {
      line-height: ${iconSize.phone}px;
      svg {
        width: ${iconSize.phone}px;
        height: ${iconSize.phone}px;
      }
    }
  }
`;
