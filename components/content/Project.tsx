import React from 'react';
import { Image } from 'react-datocms';
import HumbleButton from '@components/elements/buttons/HumbleButton';
import SteamButton from '@components/elements/buttons/SteamButton';

import { ProjectFragment } from '@lib/dato-cms';
import { createStyles, Box, Title, Group } from '@mantine/core';

import { createTransition } from '@lib/theme/utils';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
    objectFit: 'cover',
    objectPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    inset: '0 0 0 0',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    background: 'rgba(0,0,0,0.5)',
    color: theme.white,
    transition: createTransition(['opacity']),
    '&:hover': { opacity: 1 },
  },
  info: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: theme.spacing.xs,
    userSelect: 'none',
  },
  pageLink: {
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
  },
  title: {
    fontWeight: 'normal',
    textAlign: 'center',
  },
  description: {
    fontWeight: 'normal',
    textAlign: 'center',
  },
  buttonGroup: {
    width: '100%',
    '& > *': {
      height: '100%',
    },
  },
}));

type InfoWrapperProps = {
  pageUrl: ProjectFragment['pageUrl'];
  children: React.ReactNode;
  className?: string;
};
const InfoWrapper = ({ children, pageUrl, className }: InfoWrapperProps) => {
  return !pageUrl ? (
    <Box className={className}>{children}</Box>
  ) : (
    <Box component={Link} href={pageUrl} className={className}>
      {children}
    </Box>
  );
};

const Project = ({
  name,
  featuredImage,
  description,
  humbleUrl,
  humbleButtonText,
  steamUrl,
  pageUrl,
}: ProjectFragment) => {
  const { classes, cx } = useStyles(undefined, { name: 'Project' });
  return (
    <Box className={classes.root}>
      <Box className={classes.overlay}>
        <InfoWrapper
          pageUrl={pageUrl}
          className={cx(classes.info, pageUrl && classes.pageLink)}
        >
          <Title className={classes.title} order={3} size="h4">
            {name}
          </Title>
          <Title className={classes.description} order={4} size="h5" italic>
            {description}
          </Title>
        </InfoWrapper>
        {(humbleUrl || steamUrl) && (
          <Group className={classes.buttonGroup} grow spacing={0} p={0}>
            {humbleUrl && (
              <HumbleButton href={humbleUrl} text={humbleButtonText} />
            )}
            {steamUrl && <SteamButton href={steamUrl} />}
          </Group>
        )}
      </Box>
      <Image className={classes.image} data={featuredImage.responsiveImage} />
    </Box>
  );
};

export default Project;
