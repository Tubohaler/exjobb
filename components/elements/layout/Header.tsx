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
    [`& .${getRef('socialLink')}`]: {
      fontSize: theme.fontSizes.sm,
    },
    [theme.fn.smallerThan('md')]: {
      minHeight: 110,
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
      padding: theme.spacing.xs,
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
      <NavLinkGroup links={data.navigationLinks} currentPage={currentPage} />
      <SocialLinkGroup
        links={data.socialLinks.links}
        linkProps={{ className: classes.socialLink }}
      />
    </Box>
  );
};

export default Header;
