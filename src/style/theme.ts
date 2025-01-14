import { DefaultTheme } from 'styled-components';

import type { FontType, StyleType } from '../type/theme';

const colors: StyleType = {
  primary: '#333333',
  gray100: '#dddddd',
  gray200: '#aaaaaa',
  blue_green: '#04c09e',
  white: '#ffffff',
};

function FONT({ family, weight, size, lineHeight }: FontType): string {
  return `
  font-family:${family};
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}rem;
    `;
}

const fonts: StyleType = {
  h1: FONT({
    family: 'Noto Sans KR, sans-serif',
    weight: 600,
    size: 4,
    lineHeight: 5.8,
  }),
  h2: FONT({
    family: 'Noto Sans KR, sans-serif',
    weight: 500,
    size: 2.4,
    lineHeight: 1.2,
  }),
  name: FONT({
    family: 'Noto Sans KR, sans-serif',
    weight: 400,
    size: 1.6,
    lineHeight: 2.2,
  }),
  price: FONT({
    family: 'Noto Sans KR, sans-serif',
    weight: 400,
    size: 2,
    lineHeight: 2.7,
  }),
  warringMessage: FONT({
    family: 'Noto Sans KR, sans-serif',
    weight: 400,
    size: 1.2,
    lineHeight: 1.6,
  }),
  pageTitle: FONT({
    family: 'Noto Sans KR, sans-serif',
    weight: 700,
    size: 3.2,
    lineHeight: 3.7,
  }),
  cartHeading: FONT({
    family: 'Noto Sans KR, sans-serif',
    weight: 400,
    size: 2.4,
    lineHeight: 3.3,
  }),
  cartProductName: FONT({
    family: 'Noto Sans KR, sans-serif',
    weight: 400,
    size: 2.0,
    lineHeight: 2.4,
  }),
  cartProductPrice: FONT({
    family: 'Noto Sans KR, sans-serif',
    weight: 400,
    size: 1.6,
    lineHeight: 2.4,
  }),
  subtotalContent: FONT({
    family: 'Noto Sans KR, sans-serif',
    weight: 700,
    size: 2.0,
    lineHeight: 2.7,
  }),
};

export const theme: DefaultTheme = {
  colors,
  fonts,
};
