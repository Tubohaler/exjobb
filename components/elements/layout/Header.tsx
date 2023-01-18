import {
  Box,
  createStyles,
  Header as MantineHeader,
  HeaderProps as MantineHeaderProps,
  Title,
} from '@mantine/core';
import SocialLinkGroup from '@components/content/SocialLinkGroup';
import NavLinkGroup from '@components/content/NavLinkGroup';
import type { StaticPageHeader } from '@lib/dato-cms';

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.md,
    backgroundColor: theme.white,
    [theme.fn.largerThan('md')]: {
      height: 70,
    },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    [theme.fn.smallerThan('md')]: {
      justifyContent: 'center',
      flexDirection: 'column',
      fontSize: theme.fontSizes.xl,
      gap: theme.spacing.xs,
    },
    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      gap: theme.spacing.xs * 0.5,
    },
  },
  socialLink: {
    fontSize: theme.fontSizes.sm,
    [theme.fn.smallerThan('md')]: {
      fontSize: theme.fontSizes.lg,
    },
  },
}));

export type HeaderProps = Omit<MantineHeaderProps, 'children' | 'height'> & {
  data: StaticPageHeader;
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
    <MantineHeader
      height={110}
      className={cx(classes.root, className)}
      {...props}
    >
      <Box>
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
    </MantineHeader>
  );
};

export default Header;
