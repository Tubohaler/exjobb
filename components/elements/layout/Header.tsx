import {
  Box,
  createStyles,
  Header as MantineHeader,
  HeaderProps as MantineHeaderProps,
  Title,
  useMantineTheme,
} from '@mantine/core';
import SocialLinkGroup from '@components/content/SocialLinkGroup';
import NavLinkGroup from '@components/content/NavLinkGroup';
import type { HeaderFragment } from '@lib/dato-cms';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme, _, getRef) => ({
  root: {
    minHeight: 70,
    width: '100%',
    maxWidth: '100vw',
    padding: theme.spacing.md,
    backgroundColor: theme.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.fn.smallerThan('md')]: {
      minHeight: 110,
    },
  },
  leftSection: {
    height: '100%',
    width: 'auto',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  leftSectionTitle: {
    userSelect: 'none',
    fontFamily: 'verdana',
    fontSize: '1.5em',
  },
  rightSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    gap: theme.spacing.xl,

    fontSize: theme.fontSizes.lg,
    [`& .${getRef('socialLink')}`]: {
      fontSize: theme.fontSizes.sm,
    },
    [theme.fn.smallerThan('md')]: {
      justifyContent: 'center',
      flexDirection: 'column',
      gap: theme.spacing.md,
      fontSize: theme.fontSizes.xl,
      [`& .${getRef('socialLink')}`]: {
        fontSize: theme.fontSizes.md,
      },
    },
    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      gap: theme.spacing.sm,
      [`& .${getRef('socialLink')}`]: {
        fontSize: theme.fontSizes.sm,
      },
    },
  },
  socialLink: {
    ref: getRef('socialLink'),
  },
}));

export type HeaderProps = Omit<MantineHeaderProps, 'children' | 'height'> & {
  data: HeaderFragment;
  currentPage?: string;
};

const Header = ({
  data,
  currentPage = 'home',
  className,
  classNames,
  styles,
  ...props
}: HeaderProps) => {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(
    `(max-width: ${theme.breakpoints.md}px)`,
    false
  );
  const { classes, cx } = useStyles(undefined, {
    name: 'Header',
    classNames,
    styles,
  });
  return (
    <Box className={cx(classes.root, className)} component="header" {...props}>
      <Box className={classes.leftSection}>
        <Title order={3} className={classes.leftSectionTitle} weight="bold">
          +
        </Title>
      </Box>
      <Box className={classes.rightSection}>
        <NavLinkGroup links={data.navigationLinks} currentPage={currentPage} />
        <SocialLinkGroup
          links={data.socialLinks.links}
          linkProps={{ className: classes.socialLink }}
        />
      </Box>
    </Box>
  );
};

export default Header;
