import React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/variables';
import { Heading, Paragraph, Box } from 'components/foundations';

const DocsContribution: React.SFC = () => (
  <Wrapper mt="xl" pt="xl">
    <Heading size={500} mt={0} mb="sm">
      Contributing to the Documentation
    </Heading>
    <Paragraph size={400}>
      Is something missing/incorrect? Please let us know by contacting{' '}
      <a href="mailto:support@kata.ai" target="_blank" rel="noopener noreferrer">
        <strong>support@kata.ai</strong>
      </a>{'. '}
      If you know how to fix it straight away, don’t hesitate to{' '}
      <a href="https://github.com/kata-ai/kata-platform-docs" target="_blank" rel="noopener noreferrer">
        create a pull request
      </a>{' '}
      on this documentation’s GitHub repository.
    </Paragraph>
  </Wrapper>
);

export default DocsContribution;

const Wrapper = styled(Box)`
  border-top: 1px solid ${colors.grey02};

  h2 {
    margin-top: 0;
  }
`;
