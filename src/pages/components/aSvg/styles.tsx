import { default as styled } from 'styled-components';
import * as globalStyles from '../../index/styles';
import { Container as A } from '../a/styles';

export const Container = styled(A)`
  margin-left: ${globalStyles.font.size * 2}px;
  line-height: ${globalStyles.font.size * 2}px;
  svg {
    width: ${globalStyles.font.size * 2}px;
    height: auto;
    vertical-align: middle;
    fill: ${globalStyles.color.link};
    filter: drop-shadow( -1px 1px 0.5px rgba(0, 0, 0, 0.3));
    
    /**Fix image blurr on webkit browsers 
     * https://stackoverflow.com/a/25771969 */
    transform: translateZ(0);

    &:hover {
      fill: ${globalStyles.color.linkHover};
      filter: drop-shadow( -1px 1px 1px rgba(0, 0, 0, 0.5));
    }
  }
`;