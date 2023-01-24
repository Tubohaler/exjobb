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
import Link from '../elements/links/Link';
import SvgIcon from '@components/elements/SvgIcon';
import { createTransition } from '@lib/theme/utils';

export type HeaderStylesParams = { height: number };

const useStyles = createStyles(
  (theme, { height }: HeaderStylesParams, getRef) => ({
    root: {
      height,
      padding: theme.spacing.md,
      background: theme.white,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      zIndex: 999,
      [theme.fn.smallerThan('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
      },
      [theme.fn.smallerThan('xs')]: {
        padding: theme.spacing.xs,
      },
    },
    logo: {
      fontSize: theme.fontSizes.xl * 3,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& svg': {
        transition: createTransition(['transform']),
        transformOrigin: 'center',
      },
      '&:hover': {
        '& svg': {
          transform: 'scale(1.05)',
        },
      },
    },
    rightSection: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'flex-end',
      height: '100%',
      gap: theme.spacing.xl,
      fontSize: theme.fontSizes.xl,
      [`& .${getRef('socialLink')}`]: {
        fontSize: theme.fontSizes.lg,
      },
      [theme.fn.smallerThan('md')]: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing.md,
        [`& .${getRef('socialLink')}`]: {
          fontSize: theme.fontSizes.lg,
        },
      },
      [theme.fn.smallerThan('xs')]: {
        fontSize: theme.fontSizes.lg,
        gap: theme.spacing.sm,
        [`& .${getRef('socialLink')}`]: {
          fontSize: theme.fontSizes.md,
        },
      },
    },
    socialLinks: {
      ref: getRef('socialLink'),
    },
  })
);

export type HeaderProps = Omit<MantineHeaderProps, 'children' | 'height'> & {
  height: number;
  data: HeaderFragment;
  currentPage?: string;
};

const Header = ({
  data,
  height,
  currentPage = 'home',
  className,
  classNames,
  styles,
  ...props
}: HeaderProps) => {
  const { classes, cx } = useStyles(
    { height },
    {
      name: 'Header',
      classNames,
      styles,
    }
  );
  return (
    <Box className={cx(classes.root, className)} component="header" {...props}>
      <Link href="/" title="Home" className={classes.logo}>
        <SvgIcon src={data.logo.url} />
      </Link>
      <Box className={classes.rightSection}>
        <NavLinkGroup links={data.navigationLinks} currentPage={currentPage} />
        <SocialLinkGroup
          links={data.socialLinks.links}
          linkProps={{ className: classes.socialLinks }}
        />
      </Box>
    </Box>
  );
};

export default Header;
