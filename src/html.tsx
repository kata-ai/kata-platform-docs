import * as React from 'react';
import { withPrefix } from 'gatsby';

interface HtmlProps {
  body: string;
  htmlAttributes: Record<string, any>;
  bodyAttributes: Record<string, any>;
  preBodyComponents: React.ReactNodeArray;
  postBodyComponents: React.ReactNodeArray;
  headComponents: React.ReactNodeArray;
}

export default function HTML({
  body,
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents
}: HtmlProps) {
  return (
    <html lang="en" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="shortcut icon" type="image/x-icom" href={withPrefix('/favicon.ico')} />
        <link rel="icon" type="image/png" sizes="32x32" href={withPrefix('/favicon-32x32.png')} />
        <link rel="icon" type="image/png" sizes="16x16" href={withPrefix('/favicon-16x16.png')} />
        <link rel="apple-touch-icon" sizes="180x180" href={withPrefix('/apple-touch-icon.png')} />
        <link rel="mask-icon" href={withPrefix('/safari-pinned-tab.svg')} color="#006fe6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="msapplication-TileColor" content="#f8fcff" />
        <meta name="theme-color" content="#006fe6" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
}
