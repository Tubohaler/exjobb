import { ActionIcon } from '@mantine/core';
import React from 'react';
import Link from 'next/link';

export type SocialMediaProps = ActionIconProps & {
  icon: React.ReactNode;
  hoverIcon?: React.ReactNode;
};

type ActionIconProps = Omit<
  Parameters<typeof ActionIcon<typeof Link>>[0],
  'children'
>;

function SocialMediaLink({ icon, ...props }: SocialMediaProps) {
  return (
    <ActionIcon component={Link} {...props}>
      {icon}
    </ActionIcon>
  );
}

export default SocialMediaLink;
