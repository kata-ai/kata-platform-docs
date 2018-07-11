import { Theme } from 'utils/styled';

export const brandColors = {
  katablue: '#006fe6',
  lightkatablue: '#7fbcff',
  softkatablue: '#d8ebff',

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

const theme: Theme = {
  // Site colors
  colors: {
    brand: brandColors.katablue,
    accent: brandColors.katablue,
    accentDark: brandColors.cobalt,
    drawer: {
      background: brandColors.grey10,
      border: brandColors.grey30
    },
    black: brandColors.black,
    border: brandColors.grey30,
    ui: {
      bright: brandColors.grey30,
      light: brandColors.grey20,
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
    toc: {
      link: brandColors.grey60,
      hover: brandColors.katablue
    },
    ink: brandColors.black,
    white: brandColors.white,
    error: brandColors.red
  },

  // Font stack
  fonts: {
    sansSerif:
      // tslint:disable-next-line:max-line-length
      '"Museo Sans Rounded", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Arial, sans-serif',
    serif: 'Georgia, Times New Roman, Times, serif',
    monospace:
      '"League Mono", SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace'
  },

  fontWeights: {
    body: 300,
    strong: 700,
    heading: 500
  },

  // Media breakpoints (Important: use `min-width`!)
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },

  // Container widths
  containerWidth: {
    md: 720,
    lg: 800,
    xl: 800
  },

  // Dimensions
  dimensions: {
    fontSize: {
      regular: 16,
      large: 16
    },
    headingSizes: {
      h1: 36,
      h2: 20,
      h3: 16,
      h4: 14
    },
    lineHeight: {
      regular: 24,
      heading: {
        h1: 56,
        h2: 30,
        h3: 24,
        h4: 20
      }
    },
    containerPadding: 32,
    containerPaddingLg: 48
  },

  // Widths
  widths: {
    drawer: {
      sm: 200,
      lg: 280
    }
  },

  // Heights
  heights: {
    header: 64
  },

  // z-index
  zIndex: {
    content: 1,
    overlay: 90,
    drawer: 95,
    floatingButton: 100
  },

  shadow: {
    layer100: '0 1px 1px 0 rgba(0, 0, 0, 0.25)',
    layer200: '0 2px 4px 1px rgba(0, 0, 0, 0.15)',
    layer300: '0 4px 6px 2px rgba(0, 0, 0, 0.15)',
    layer400: '0 6px 10px 2px rgba(0, 0, 0, 0.15)'
  }
};

export default theme;
