import * as React from 'react';
import { withPrefix } from 'gatsby-link';

let styles: string;
if (process.env.NODE_ENV === 'production') {
  try {
    styles = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e); // tslint:disable-line
  }
}

interface HtmlProps {
  body: string;
  preBodyComponents: React.ReactNode[];
  postBodyComponents: React.ReactNode[];
  headComponents: React.ReactNode[];
}

module.exports = class HTML extends React.Component<HtmlProps, void> {
  public render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: styles }} />;
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="shortcut icon" type="image/x-icom" href={withPrefix('/favicon.ico')} />
          <link rel="icon" type="image/png" sizes="32x32" href={withPrefix('/favicon-32x32.png')} />
          <link rel="icon" type="image/png" sizes="16x16" href={withPrefix('/favicon-16x16.png')} />
          <link rel="apple-touch-icon" sizes="180x180" href={withPrefix('/apple-touch-icon.png')} />
          <link rel="mask-icon" href={withPrefix('/safari-pinned-tab.svg')} color="#006fe6" />
          <meta name="msapplication-TileColor" content="#f8fcff" />
          <meta name="theme-color" content="#006fe6" />
          {this.props.headComponents}
          {css}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
