import {
  AppShell,
  Header,
  Box,
  Group,
  createStyles,
  Text,
  Grid,
  Footer,
  Stack,
} from '@mantine/core';

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandSteam,
  /* IconBrandThreejs, */
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons';
import NavLinks from '../links/NavLinks';
import SocialMediaLink from '../links/SocialMediaLink';
import { defaultTransition } from '@lib/theme/main';

const useStyles = createStyles((theme) => ({
  socialLink: {
    fontSize: 'xs',

    transition: defaultTransition,
    '&:hover': {
      color: theme.colors.red[2],
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.xl,
    },
  },
  HeaderBox: {
    padding: theme.spacing.md,
    backgroundColor: theme.white,
    [theme.fn.largerThan('md')]: {
      height: 70,
    },
  },

  headerContent: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    gap: theme.spacing.xl,
    [theme.fn.smallerThan('md')]: {
      justifyContent: 'center',
      fontSize: theme.fontSizes.xl,
      flexDirection: 'column',

      gap: theme.spacing.xs,
    },
    '@media (max-width: 400px)': {
      fontSize: '1rem',
      gap: '5px',
    },
  },
  mainContent: {
    height: '100%',
  },
}));

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

const socialLinks = [
  { icon: <IconBrandFacebook />, href: '' },
  { icon: <IconBrandTwitter />, href: '' },
  { icon: <IconBrandInstagram />, href: '' },
  { icon: <IconBrandYoutube />, href: '' },
  { icon: <IconBrandSteam />, href: '' },
];
const PageWrapper = ({ children }: React.PropsWithChildren) => {
  const { classes } = useStyles();
  return (
    <AppShell
      padding={0}
      header={
        <Header height={110} className={classes.HeaderBox}>
          <Box className={classes.headerContent}>
            <NavLinks />
            <Group>
              {socialLinks.map((props, i) => (
                <SocialMediaLink
                  variant="transparent"
                  key={i}
                  className={classes.socialLink}
                  {...props}
                />
              ))}
            </Group>
          </Box>
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
            <Stack spacing={1} align="left">
              {leftSection.map((text, i) => (
                <Text key={`leftSection${i}`} size="xs">
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
            <Stack align="end">
              {/* To do: make more re-usable */}
              <Group>
                {socialLinks.map((props, i) => (
                  <SocialMediaLink
                    variant="transparent"
                    key={i}
                    className={classes.socialLink}
                    {...props}
                  />
                ))}
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </AppShell>
  );
};
export default PageWrapper;
