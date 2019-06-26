// graphql query strings
declare const graphql: (query: TemplateStringsArray) => void;

interface Window {
  __LUNR__: { [key: string]: any };
}

interface CSSModule {
  [className: string]: string;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.module.css' {
  const cssModule: CSSModule;
  export = cssModule;
}

// file types

declare module '*.json' {
  const name: any;
  export = name;
}

declare module 'rehype-react';

declare module '@reach/skip-nav' {
  class SkipNavLink extends React.Component {}
  class SkipNavContent extends React.Component {}
}
