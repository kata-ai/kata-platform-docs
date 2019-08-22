import * as React from 'react';
import styled from 'styled-components';
import { Heading, Paragraph } from 'components/foundations';
import { space, textSizes, colors } from 'utils/variables';

const UnorderedList = styled('ul')`
  margin: ${space.sm}px 0;
`;

const HorizontalRule = styled('hr')`
  margin: ${space.xl}px 0;
  border: none;
  border-top: 1px solid ${colors.grey02};
`;

export const h1 = (props: any) => <Heading size={800} as="h1" fontFamily="sansSerif" color="grey09" {...props} />;
export const h2 = (props: any) => <Heading size={600} as="h2" mt="xl" color="grey09" {...props} />;
export const h3 = (props: any) => <Heading size={500} as="h3" mt="xl" color="grey09" {...props} />;
export const h4 = (props: any) => <Heading size={400} as="h4" mt="xl" color="grey09" {...props} />;
export const h5 = (props: any) => <Heading size={400} as="h5" mt="xl" color="grey09" {...props} />;
export const h6 = (props: any) => <Heading size={400} as="h6" mt="xl" color="grey09" {...props} />;
export const p = (props: any) => <Paragraph size={400} mt="sm" color="grey07" {...props} />;
export const hr = (props: any) => <HorizontalRule {...props} />;
export const ul = (props: any) => <UnorderedList {...props} />;
export const ol = (props: any) => <UnorderedList as="ol" color="grey07" my="xxs" {...props} />;
export const li = (props: any) => <Paragraph size={400} as="li" color="grey07" my="xxs" {...props} />;
export const table = styled('table')`
  width: 100%;
  margin: ${space.lg}px 0;
  font-size: ${textSizes[400].fontSize}px;
  line-height: ${textSizes[400].lineHeight}px;
  border-collapse: collapse;

  thead {
    border-bottom: 2px solid ${colors.grey02};

    th {
      padding: ${space.xs}px ${space.sm}px;
      font-style: normal;
      font-stretch: normal;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      text-align: left;
      color: ${colors.grey09};

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }

  tfoot {
    tr {
      td {
        padding: ${space.xs}px ${space.sm}px;
        vertical-align: top;
        font-style: normal;
        font-stretch: normal;
        font-weight: 700;
        letter-spacing: -0.01em;
        text-transform: uppercase;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }
      }
    }
  }

  tbody {
    tr {
      td {
        padding: ${space.xs}px ${space.sm}px;
        vertical-align: top;
        font-size: ${textSizes[400].fontSize}px;
        line-height: ${textSizes[400].lineHeight}px;
        color: ${colors.grey07};

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }
      }
    }
  }
`;
