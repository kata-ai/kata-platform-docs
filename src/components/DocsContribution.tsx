import React from 'react';
import styled from 'utils/styled';

const DocsContribution: React.SFC = () => (
  <Wrapper>
    <h2>Contributing to the Documentation</h2>
    <p>
      Is something missing/incorrect? Please let us know by contacting{' '}
      <strong>support@kata.ai</strong>. If you know how to fix it straight away, don’t hesitate to{' '}
      <a
        href="https://github.com/kata-ai/kata-platform-docs"
        target="_blank"
        rel="noopener noreferrer"
      >
        create a pull request
      </a>{' '}
      on this documentation’s GitHub repository.
    </p>
  </Wrapper>
);

export default DocsContribution;

const Wrapper = styled('div')`
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid ${props => props.theme.colors.border};

  h2 {
    margin-top: 0;
  }
`;
