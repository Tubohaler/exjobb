import styled from '@emotion/styled';
import { Box } from '@mantine/core';

export type PageWrapperProps = Omit<
  Parameters<typeof Box<'div'>>[0],
  'component'
> & {
  children: React.ReactNode;
};

const StyledDiv = styled.div`
  height: 100vh;
  min-height: fit-content;
`;

/**
 * Used to wrap the whole page in a div
 */
const PageWrapper = (props: PageWrapperProps) => {
  return <Box component={StyledDiv} {...props} />;
};

export default PageWrapper;
