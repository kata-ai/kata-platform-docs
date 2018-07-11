// styled-components.ts
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

export type Theme = {
  colors: {
    brand: string;
    accent: string;
    accentDark: string;
    drawer: {
      background: string;
      border: string;
    };
    ink: string;
    black: string;
    ui: {
      bright: string;
      light: string;
      whisper: string;
    };
    code: string;
    border: string;
    footer: {
      background: string;
      border: string;
    };
    gray: {
      dark: string;
      copy: string;
      calm: string;
    };
    toc: {
      link: string;
      hover: string;
    };
    white: string;
    error: string;
  };
  fonts: {
    sansSerif: string;
    serif: string;
    monospace: string;
  };
  fontWeights: {
    body: number | string;
    strong: number | string;
    heading: number | string;
  };
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  containerWidth: {
    md: number;
    lg: number;
    xl: number;
  };
  dimensions: {
    fontSize: {
      regular: number;
      large: number;
    };
    headingSizes: {
      h1: number;
      h2: number;
      h3: number;
      h4: number;
    };
    lineHeight: {
      regular: number;
      heading: {
        h1: number;
        h2: number;
        h3: number;
        h4: number;
      };
    };
    containerPadding: number;
    containerPaddingLg: number;
  };
  widths: {
    drawer: {
      sm: number;
      lg: number;
    };
  };
  heights: {
    header: number;
  };
  shadow: {
    layer100: string;
    layer200: string;
    layer300: string;
    layer400: string;
  };
  zIndex: {
    content: number;
    overlay: number;
    drawer: number;
    floatingButton: number;
  };
};

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
