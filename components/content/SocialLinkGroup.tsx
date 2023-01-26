import { SocialLinkFragment } from '@lib/dato-cms';
import { Box, createStyles } from '@mantine/core';
import SvgIconLink, {
  SvgIconLinkProps,
} from '@components/elements/links/SvgIconLink';

export type SocialLinkGroup = Omit<
  Parameters<typeof Box<'ul'>>[0],
  'children'
> & {
  links: SocialLinkFragment[];
  linkProps?: Omit<SvgIconLinkProps, 'src' | 'href' | 'title'>;
};

const useStyles = createStyles((theme) => ({
  root: {
    fontSize: 'inherit',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    padding: 0,
    margin: 0,
    gap: `clamp(${theme.spacing.sm}px, 0.5em, ${theme.spacing.lg}px)`,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    lineHeight: 1,
    width: '1em',
    height: '1em',
  },
  link: {
    opacity: 0.75,
    '&:hover': {
      opacity: 1,
    },
  },
}));

const SocialLinkGroup = ({
  links,
  linkProps = {},
  classNames,
  className,
  styles,
  ...props
}: SocialLinkGroup) => {
  const { classes, cx } = useStyles(undefined, {
    name: 'SocialLinkGroup',
    classNames,
    styles,
  });
  return (
    <Box component="ul" className={cx(classes.root, className)} {...props}>
      {links.map(({ id, href, icon, title, linkTitle }) => {
        const { className, ...props } = linkProps;
        return (
          <Box component="li" key={id} className={classes.listItem}>
            <SvgIconLink
              key={id}
              href={href}
              src={icon.url}
              title={linkTitle || title || undefined}
              className={cx(classes.link, className)}
              {...props}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default SocialLinkGroup;
