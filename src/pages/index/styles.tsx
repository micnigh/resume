import { default as styled, injectGlobal, css } from 'styled-components';
import 'normalize.css';

export const color = {
  text: `#333`,
  link: `#333`,
  linkHover: `#000`,
};

export const font = {
  size: 12, /** px */
};

export const Container = styled.div`
  font-family: special-elite;
  font-size: ${font.size * 2}px;
  box-sizing: border-box;
  max-width: 960px;
  margin: 0px auto;
  color: ${color.text};
`;

export const loadFontFace = (name: string) => {
  return css`
  @font-face {
    font-family: '${name}';
    src: url('${require(`../fonts/${name}.eot`)}');
    src: url('${require(`../fonts/${name}.eot`)}?#iefix') format('embedded-opentype'),
         url('${require(`../fonts/${name}.woff`)}') format('woff'),
         url('${require(`../fonts/${name}.ttf`)}') format('truetype'),
         url('${require(`../fonts/${name}.svg`)}#${name}') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  `;
};

injectGlobal`
${loadFontFace('capture-it')}
${loadFontFace('special-elite')}

`;