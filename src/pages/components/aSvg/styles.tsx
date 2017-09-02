import { default as styled } from 'styled-components';
import * as globalStyles from '../../index/styles';
import A from '../a/';

export const Container = styled(A)`
  margin-left: ${globalStyles.font.size * 2}px;
  line-height: ${globalStyles.font.size * 2}px;
  svg {
    width: ${globalStyles.font.size * 2}px;
    height: auto;
    vertical-align: middle;
    fill: ${globalStyles.color.link};
    filter: drop-shadow( -1px 1px 1px rgba(0, 0, 0, 0.3));

    &:hover {
      fill: ${globalStyles.color.linkHover};
      filter: drop-shadow( -1px 1px 1px rgba(0, 0, 0, 0.5));
    }
  }
`;