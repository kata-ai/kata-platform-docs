import convert, { HtmrOptions } from 'htmr';
import { h1, h2, h3, h4, h5, h6, p, hr, ul, ol, li, table } from 'components/page/Markdown/MarkdownComponents';

function renderAst(html: string, additionalComponents: HtmrOptions['transform'] = {}) {
  const transform: HtmrOptions['transform'] = {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    hr,
    ul,
    ol,
    li,
    table,
    ...additionalComponents
  };

  return convert(html, { transform });
}

export default renderAst;
