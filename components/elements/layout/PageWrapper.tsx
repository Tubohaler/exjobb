import { ThemeContext } from '@emotion/react';
import { AppShell, Header, Box, Group, createStyles } from '@mantine/core';

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
}));

/**
 * Used to wrap the whole page in a div
 */

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
    </AppShell>
  );
};
export default PageWrapper;
