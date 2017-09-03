import { default as styled, injectGlobal, css } from 'styled-components';
import 'normalize.css';
import 'tippy.js/dist/tippy.css';

export const color = {
  text: `#333`,
  textSecondary: `#888`,
  link: `#333`,
  linkHover: `#000`,
  bar: `#000`,
  barText: `#fff`,
  barPrint: `#c5c5c5`,
  barPrintText: `#000`,
};

export const font = {
  size: 12, /** px */
};

export const Container = styled.div`
  font-family: special-elite;
  font-size: ${font.size * 1.5}px;
  box-sizing: border-box;
  max-width: 760px;
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

.tippy-tooltip {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif
}

`;