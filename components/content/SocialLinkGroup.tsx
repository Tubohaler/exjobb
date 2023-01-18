import { StaticSocialLink } from '@lib/dato-cms';
import { Group, GroupProps } from '@mantine/core';
import SvgIconLink, {
  SvgIconLinkProps,
} from '@components/elements/links/SvgIconLink';

export type SocialLinkGroup = Omit<GroupProps, 'children'> & {
  links: StaticSocialLink[];
  linkProps?: Omit<SvgIconLinkProps, 'icon' | 'href' | 'title'>;
};

const SocialLinkGroup = ({
  links,
  linkProps = {},
  ...props
}: SocialLinkGroup) => {
  return (
    <Group {...props}>
      {links.map(({ id, href, icon, title, linkTitle }) => {
        return (
          <SvgIconLink
            key={id}
            href={href}
            icon={icon}
            title={linkTitle || title || undefined}
            {...linkProps}
          />
        );
      })}
    </Group>
  );
};

export default SocialLinkGroup;
