import { default as styled, css } from 'styled-components';

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

  @media screen and (min-width: 960px) {
    max-width: 900px;
  }
`;

export const Section = styled.div`
  margin-bottom: ${font.size * 4}px;
`;
