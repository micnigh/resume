import { default as styled, injectGlobal, css } from 'styled-components';

export const color = {
  link: `#333`,
  linkHover: `#33f`,
};

export const font = {
  size: 16, /** px */
};

export const Container = styled.div`
  font-family: capture-it, special-elite;
  font-size: ${font.size * 2}px;
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