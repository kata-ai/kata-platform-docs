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

const TableDefault = styled('table')`
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
        min-width: 15vw;
        vertical-align: top;
        font-size: ${textSizes[400].fontSize}px;
        line-height: ${textSizes[400].lineHeight}px;
        color: ${colors.grey07};
        overflow-wrap: anywhere;

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

const TableBordered = styled('table')`
  width: 100%;
  margin: ${space.lg}px 0;
  font-size: ${textSizes[300].fontSize}px;
  line-height: ${textSizes[300].lineHeight}px;
  border-collapse: collapse;
  border: 2px solid ${colors.grey11};

  thead {
    border-bottom: 1px solid ${colors.grey02};
    th {
      padding: 14px 16px;
      font-style: normal;
      font-stretch: normal;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      text-align: center;
      color: ${colors.grey12};
    }
  }

  tbody {
    tr {
      td {
        padding: 14px 16px;
        min-width: 15vw;
        vertical-align: top;
        font-size: ${textSizes[400].fontSize}px;
        line-height: ${textSizes[400].lineHeight}px;
        color: ${colors.grey12};
        overflow-wrap: anywhere;
      }
      &:not(:last-child){
        border-bottom: 1px solid ${colors.grey11};
      }
    }
  }
`;

const TablePricing = styled('table')`
  width: 100%;
  margin: ${space.lg}px 0;
  font-size: ${textSizes[300].fontSize}px;
  line-height: ${textSizes[300].lineHeight}px;
  border-collapse: collapse;
  border: 2px solid ${colors.grey11};

  thead {
    border-bottom: 1px solid ${colors.grey02};
    background-color: ${colors.greylight02};
    th {
      padding: 14px 16px;
      font-weight: 600;
      letter-spacing: -0.05px;
      text-align: center;
      color: ${colors.greydark02};
    }
  }

  tbody {
    tr {
      td {
        padding: 14px 16px;
        vertical-align: top;
        line-height: ${textSizes[300].lineHeight}px;
        color: ${colors.grey12};
        overflow-wrap: anywhere;
        text-align: center;
      }
      &:not(:last-child){
        border-bottom: 1px solid ${colors.grey11};
      }
    }
  }
`;

export const h1 = (props: JSX.IntrinsicAttributes) => (
  <Heading size={800} as="h1" fontFamily="sansSerif" color="grey09" {...props} />
);
export const h2 = (props: JSX.IntrinsicAttributes) => <Heading size={600} as="h2" mt="xl" color="grey09" {...props} />;
export const h3 = (props: JSX.IntrinsicAttributes) => <Heading size={500} as="h3" mt="xl" color="grey09" {...props} />;
export const h4 = (props: JSX.IntrinsicAttributes) => <Heading size={400} as="h4" mt="xl" color="grey09" {...props} />;
export const h5 = (props: JSX.IntrinsicAttributes) => <Heading size={400} as="h5" mt="xl" color="grey09" {...props} />;
export const h6 = (props: JSX.IntrinsicAttributes) => <Heading size={400} as="h6" mt="xl" color="grey09" {...props} />;
export const p = (props: JSX.IntrinsicAttributes) => <Paragraph size={400} mt="sm" color="grey07" {...props} />;
export const hr = (props: JSX.IntrinsicAttributes) => <HorizontalRule {...props} />;
export const ul = (props: JSX.IntrinsicAttributes) => <UnorderedList {...props} />;
export const ol = (props: JSX.IntrinsicAttributes) => <UnorderedList as="ol" color="grey07" {...props} />;
export const li = (props: JSX.IntrinsicAttributes) => (
  <Paragraph size={400} as="li" color="grey07" my="xxs" {...props} />
);

interface TableAttributes extends JSX.IntrinsicAttributes{
  className?: string;
}
export const table = (props: TableAttributes) => {
  const { className, ...rest } = props;
  if (className?.includes('bordered')){
    return <TableBordered {...rest} />
  }
  else if (className?.includes('pricing-table')){
    return <TablePricing {...rest} />
  }
  return <TableDefault {...rest} />
}
