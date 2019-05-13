/* tslint:disable:max-line-length */

const neutral01 = '#fff';
const neutral02 = '#f6f7f8';
const neutral03 = '#edf1f2';
const neutral04 = '#e2e6e8';
const neutral05 = '#c2c7c8';
const neutral06 = '#949a9d';
const neutral07 = '#676b6d';
const neutral08 = '#484c4f';
const neutral09 = '#2b2f33';

const cobalt01 = '#5597e0';
const cobalt02 = '#2053af';
const cobalt03 = '#102a59';

const kata01 = '#4da3ff';
const kata02 = '#006fe6';
const kata03 = '#003e80';

const green01 = '#00ea61';
const green02 = '#59a444';
const green03 = '#658f3d';

const red01 = '#fc6627';
const red02 = '#dc211c';
const red03 = '#af1a16';

const yellow01 = '#feef99';
const yellow02 = '#fde034';
const yellow03 = '#ebc902';

export const brandColors = {
  katablue: '#006fe6',
  lightkatablue: '#7fbcff',
  softkatablue: '#d8ebff',

  softblue: '#00cce9',

  semicobalt: '#2662cf',
  cobalt: '#2053af',
  darkcobalt: '#19428c',

  iceblue: '#f8fcff',
  icebluetwo: '#f4faff',
  icebluethree: '#d8ebff',

  black: '#000',
  grey80: '#24282d',
  grey70: '#484c4f',
  grey60: '#676b6d',
  grey50: '#949a9d',
  grey40: '#c2c7c8',
  grey30: '#e2e6e8',
  grey20: '#edf1f2',
  grey10: '#f6f7f8',
  white: '#fff',

  blue: '#2a90ff',
  green: '#00c853',
  red: '#e53935',
  yellow: '#ffc400'
};

export const colors = {
  // new KDS colors
  neutral01,
  neutral02,
  neutral03,
  neutral04,
  neutral05,
  neutral06,
  neutral07,
  neutral08,
  neutral09,
  cobalt01,
  cobalt02,
  cobalt03,
  kata01,
  kata02,
  kata03,
  green01,
  green02,
  green03,
  red01,
  red02,
  red03,
  yellow01,
  yellow02,
  yellow03,

  // old KDS colors
  softblue: brandColors.softblue,
  brand: brandColors.katablue,
  accent: brandColors.katablue,
  accentDark: brandColors.cobalt,
  drawer: {
    background: brandColors.white,
    border: brandColors.grey30
  },
  black: brandColors.black,
  border: brandColors.grey30,
  ui: {
    bright: brandColors.grey20,
    light: brandColors.grey10,
    whisper: brandColors.grey10
  },
  footer: {
    background: brandColors.icebluetwo,
    border: brandColors.icebluethree
  },
  code: brandColors.grey20,
  gray: {
    dark: brandColors.grey80,
    copy: brandColors.grey70,
    calm: brandColors.grey50
  },
  ink: brandColors.black,
  white: brandColors.white,
  error: brandColors.red
};

export const spacing = {
  spacing2Xs: '2px',
  spacingXs: '4px',
  spacingSm: '8px',
  spacingSmMd: '12px',
  spacingMd: '16px',
  spacingLg: '24px',
  spacingXl: '40px',
  spacing2Xl: '64px',
  spacing3Xl: '80px'
};

export const fontSizes = {
  deka: '12px',
  hecto: '14px',
  kilo: '16px',
  mega: '18px',
  giga: '20px',
  tera: '24px',
  peta: '28px'
};

export const lineHeights = {
  deka: '1.375',
  hecto: '1.5',
  kilo: '1.5',
  mega: '1.25',
  giga: '1.25',
  tera: '1.25',
  peta: '1.125'
};

export const elevationShadow = {
  elevationZ100: '0 1px 2px 0 rgba(0, 0, 0, 0.25);',
  elevationZ200: '0 2px 4px 0 rgba(0, 0, 0, 0.25);',
  elevationZ300: '0 4px 8px 0 rgba(0, 0, 0, 0.25)',
  elevationZ400: '0 8px 16px 0 rgba(0, 0, 0, 0.25)',
  elevationZ500: '0 12px 24px 0 rgba(0, 0, 0, 0.25)'
};

export const fonts = {
  sansSerif:
    '"Museo Sans Rounded", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
};

export const breakpoints = {
  xs: 0,
  // Mobile
  sm: 360,
  // Tablet
  md: 768,
  // Tablet (Landscape)
  lg: 1024,
  // Desktop
  xl: 1280
};

export const widths = {
  containers: {
    sm: 312,
    md: 702,
    lg: 970,
    xl: 1170
  },
  drawer: {
    sm: 280,
    lg: 256
  }
};

export const dimensions = {
  fontSize: {
    regular: 14,
    large: 16
  },
  headingSizes: {
    h1: 2.441,
    h2: 1.953,
    h3: 1.563,
    h4: 1.25
  },
  lineHeight: {
    regular: '20px',
    heading: '24px'
  },
  containerPadding: 1.5
};

export const heights = {
  header: '64px'
};
