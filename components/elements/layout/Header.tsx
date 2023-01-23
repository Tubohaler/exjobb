import {
  Box,
  createStyles,
  HeaderProps as MantineHeaderProps,
  MantineSizes,
  Title,
} from '@mantine/core';
import SocialLinkGroup from '@components/content/SocialLinkGroup';
import NavLinkGroup from '@components/content/NavLinkGroup';
import type { HeaderFragment } from '@lib/dato-cms';

const useStyles = createStyles((theme, _, getRef) => ({
  root: {
    minHeight: 70,
    padding: theme.spacing.md,
    background: theme.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.fn.smallerThan('md')]: {
      minHeight: 110,
    },
    [theme.fn.smallerThan('xs')]: {
      padding: theme.spacing.xs,
    },
  },
  leftSection: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  leftSectionTitle: {
    userSelect: 'none',
    fontFamily: 'verdana',
    fontSize: '1.5em',
  },
  rightSection: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    height: '100%',
    gap: theme.spacing.xl,
    fontSize: theme.fontSizes.lg,
    [`& .${getRef('socialLink')}`]: {
      fontSize: theme.fontSizes.sm,
    },
    [theme.fn.smallerThan('md')]: {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
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
