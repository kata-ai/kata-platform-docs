import styled from 'utils/styled';

interface PageProps {
  docsPage?: boolean;
}

const Page = styled<PageProps, 'main'>('main')`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  padding: 0;
`;

export default Page;
