import { SocialLinkFragment } from '@lib/dato-cms';
import { createStyles, Group, GroupProps } from '@mantine/core';
import SvgIconLink, {
  SvgIconLinkProps,
} from '@components/elements/links/SvgIconLink';

export type SocialLinkGroup = Omit<GroupProps, 'children'> & {
  links: SocialLinkFragment[];
  linkProps?: Omit<SvgIconLinkProps, 'src' | 'href' | 'title'>;
};

const useStyles = createStyles((theme) => ({
  root: {},
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
    <Group align="center" className={cx(classes.root, className)} {...props}>
      {links.map(({ id, href, icon, title, linkTitle }) => {
        const { className, ...props } = linkProps;
        return (
          <SvgIconLink
            key={id}
            href={href}
            src={icon.url}
            title={linkTitle || title || undefined}
            className={cx(classes.link, className)}
            {...props}
          />
        );
      })}
    </Group>
  );
};

export default SocialLinkGroup;
