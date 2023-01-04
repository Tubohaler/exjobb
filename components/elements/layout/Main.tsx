import { Box } from '@mantine/core';
import styled from '@emotion/styled';

export type MainProps = Omit<Parameters<typeof Box<'main'>>[0], 'component'> & {
  children: React.ReactNode;
};

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

/**
 * Wraps main page content with a html main element
 */
const Main = (props: MainProps) => {
  return <Box component={StyledMain} {...props} />;
};

export default Main;
