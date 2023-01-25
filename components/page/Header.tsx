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
      padding: theme.spacing.xl,
      background: theme.white,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      zIndex: 999,
      [theme.fn.smallerThan('xs')]: {
        padding: theme.spacing.xs,
      },
    },
    inner: {
      flexGrow: 1,
      lineHeight: 1,
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: theme.fontSizes.xl,
      flexWrap: 'wrap',
      gap: theme.spacing.md,
      [`& .${getRef('socialLinks')}, & .${getRef('logo')}`]: {
        fontSize: theme.fontSizes.lg,
      },
      [theme.fn.smallerThan('md')]: {
        [`& .${getRef('left')}, & .${getRef('right')}`]: {
          justifyContent: 'flex-start',
          flexDirection: 'column',
        },
        [`& .${getRef('left')}`]: {},
        [`& .${getRef('right')}`]: {
          alignItems: 'center',
          gap: theme.spacing.sm,
        },
      },
      [theme.fn.smallerThan('xs')]: {
        columnGap: 0,
        fontSize: theme.fontSizes.xl,
        [`& .${getRef('right')}`]: {
          [`& .${getRef('socialLink')}`]: {
            fontSize: theme.fontSizes.md,
          },
        },
      },
    },
    logo: {
      ref: getRef('logo'),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& svg': {
        transition: createTransition(['transform']),
        transformOrigin: 'center',
      },
      '&:hover': {
        '& svg': {
          transform: 'scale(1.1)',
        },
      },
    },
    leftSection: {
      ref: getRef('left'),
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    rightSection: {
      ref: getRef('right'),
      height: '100%',
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'flex-end',
      gap: theme.spacing.xl,
    },
    socialLinks: {
      ref: getRef('socialLinks'),
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
      <Box className={classes.inner}>
        <Box className={classes.leftSection}>
          <Link href="/" title="Home" className={classes.logo}>
            <SvgIcon src={data.logo.url} />
          </Link>
        </Box>
        <Box className={classes.rightSection}>
          <NavLinkGroup
            links={data.navigationLinks}
            currentPage={currentPage}
          />
          <SocialLinkGroup
            links={data.socialLinks.links}
            linkProps={{ className: classes.socialLinks }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
