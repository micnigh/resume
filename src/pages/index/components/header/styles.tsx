import { default as styled } from 'styled-components';

import A from '../../../components/a/';
import * as globalStyles from '../../styles';

export const Container = styled.div`
  
`;

export const Logo = styled(A)`
  svg {
    width: ${globalStyles.font.size * 1.5}px;
    vertical-align: middle;
    fill: ${globalStyles.color.link};

    transition: all 400ms ease-out;

    &:hover {
      fill: ${globalStyles.color.linkHover};
    }
  }
`;
