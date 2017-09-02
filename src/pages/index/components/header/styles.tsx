import { default as styled } from 'styled-components';

import ASvg from '../../../components/aSvg/';
import H1 from '../../../components/h1/';

import * as globalStyles from '../../styles';

const paddingVert = globalStyles.font.size * 1;

export const Container = styled.div`
  margin-top: ${globalStyles.font.size * 2}px;
  padding: ${paddingVert}px 0px;
  position: relative;
`;

export const Title = styled(H1)`
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

export const SocialNetworkLinks = styled.div`
  position: absolute;
  right: 0px;
  bottom: ${paddingVert}px;
`;

export const Logo = styled(ASvg)`
  margin-left: ${globalStyles.font.size * 2}px;
  line-height: ${globalStyles.font.size * 2}px;
  svg {
    width: ${globalStyles.font.size * 2}px;
  }
`;
