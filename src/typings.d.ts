// graphql query strings
declare const graphql: (query: TemplateStringsArray) => void;

interface CSSModule {
  [className: string]: string;
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
