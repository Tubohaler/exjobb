import { AppShell, Flex, Header } from '@mantine/core';
import NavLinks from '../links/NavLinks';
import SocialMediaLinks from '../links/SocialMediaLinks';
/**
 * Used to wrap the whole page in a div
 */
const PageWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <AppShell
      header={
        <Header height={70} p="md" style={{ backgroundColor: 'white' }}>
          <Flex justify="flex-end" align="center" direction="row">
            <NavLinks spacing="xs" />
            <SocialMediaLinks size="xs" spacing={2} />
          </Flex>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
export default PageWrapper;
