import {
  AppShell,
  Flex,
  Header,
  Text,
  Group,
  Grid,
  Footer,
  Stack,
  Box,
} from '@mantine/core';
import NavLinks from '../links/NavLinks';
import SocialMediaLinks from '../links/SocialMediaLinks';
import Main from './Main';

const leftSection = [
  '© 2023 Copyright Might and Delight. All rights reserved.',
  'Privacy Policy',
];

const centralSection = [
  'Might and Delight AB',
  'Stenkullavägen 43',
  '112 65 Stockholm',
  'contact@mightanddelight.com',
];

const PageWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <AppShell
      header={
        <Header
          height={'70'}
          sx={(theme) => ({ background: theme.white })}
          p="md"
        >
          <Flex justify="flex-end" align="center" direction="row">
            <NavLinks spacing="xs" />
            <SocialMediaLinks size="xs" spacing={2} />
          </Flex>
        </Header>
      }
    >
      {children}
      <Box
        sx={(theme) => ({
          height: 110,
          background: theme.white,
        })}
        p="md"
        component="footer"
      >
        <Grid grow align="center">
          {/* <Group sx={{ width: '100%' }} position="apart" spacing="xl"> */}
          <Grid.Col span={4}>
            <Stack spacing={'xs'} align="center">
              {leftSection.map((text, i) => (
                <Text key={`leftSection${i}`} size="sm">
                  {text}
                </Text>
              ))}
            </Stack>
          </Grid.Col>
          <Grid.Col span={4}>
            <Stack spacing={0} align="center">
              {centralSection.map((text, i) => (
                <Text align="center" key={`centralSection${i}`} size="sm">
                  {text}
                </Text>
              ))}
            </Stack>
          </Grid.Col>
          <Grid.Col span={4}>
            <Stack align="center">
              <SocialMediaLinks size="xs" spacing={2} />{' '}
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </AppShell>
  );
};
export default PageWrapper;
