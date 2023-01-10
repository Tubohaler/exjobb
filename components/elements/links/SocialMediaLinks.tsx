import React from 'react';

import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandSteam,
} from '@tabler/icons';

import { Group, GroupProps } from '@mantine/core';
import SocialMediaLink, { SocialMediaProps } from './SocialMediaLink';

type Props = Omit<GroupProps, 'children'> & { size?: SocialMediaProps['size'] };

const links = [
  { icon: <IconBrandFacebook />, href: '' },
  { icon: <IconBrandTwitter />, href: '' },
  { icon: <IconBrandInstagram />, href: '' },
  { icon: <IconBrandYoutube />, href: '' },
  { icon: <IconBrandSteam />, href: '' },
];

const SocialMediaLinks = ({ size, ...props }: Props) => {
  return (
    <Group {...props}>
      {links.map((props, i) => (
        <SocialMediaLink key={i} size={size} {...props} />
      ))}
    </Group>
  );
};

export default SocialMediaLinks;
