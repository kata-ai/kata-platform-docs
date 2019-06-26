import * as React from 'react';
import styled from 'styled-components';
import { Heading, Paragraph } from 'components/foundations';
import { space, textSizes, colors } from 'utils/variables';

const UnorderedList = styled('ul')`
  margin: ${space.sm}px 0;
`;

export const h1 = (props: any) => <Heading size={800} as="h1" fontFamily="sansSerif" color="grey09" {...props} />;
export const h2 = (props: any) => <Heading size={600} as="h2" mt="xl" color="grey09" {...props} />;
export const h3 = (props: any) => <Heading size={500} as="h3" mt="xl" color="grey09" {...props} />;
export const h4 = (props: any) => <Heading size={400} as="h4" mt="xl" color="grey09" {...props} />;
export const h5 = (props: any) => <Heading size={400} as="h5" mt="xl" color="grey09" {...props} />;
export const h6 = (props: any) => <Heading size={400} as="h6" mt="xl" color="grey09" {...props} />;
export const p = (props: any) => <Paragraph size={400} mt="sm" color="grey07" {...props} />;
export const ul = (props: any) => <UnorderedList {...props} />;
export const ol = (props: any) => <UnorderedList as="ol" {...props} />;
export const li = (props: any) => <Paragraph size={400} as="li" color="grey07" my="xxs" {...props} />;
export const table = styled('table')`
  width: 100%;
  margin-bottom: 24px;
  font-size: ${textSizes[400].fontSize};
  line-height: ${textSizes[400].lineHeight};
  border-collapse: collapse;

  thead {
    border-bottom: 2px solid ${colors.grey02};

    th {
      padding: 8px 16px;
      font-style: normal;
      font-stretch: normal;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      text-align: left;
      color: ${colors.grey09};
    }
  }

  tfoot {
    tr {
      td {
        padding: 16px 16px 8px;
        vertical-align: top;
        font-style: normal;
        font-stretch: normal;
        font-weight: 700;
        letter-spacing: -0.01em;
        text-transform: uppercase;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 16px 16px 8px;
        vertical-align: top;
        font-size: ${textSizes[400].fontSize};
        line-height: ${textSizes[400].lineHeight};
        color: ${colors.grey07};
      }
    }
  }
`;
