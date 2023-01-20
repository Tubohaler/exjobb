import React from 'react';
import { Image } from 'react-datocms';

import { Box, createStyles, Title } from '@mantine/core';

import { StaffFragment } from '@lib/dato-cms';
import { createTransition } from '@lib/theme/utils';

const useStyles = createStyles((theme) => ({
  root: {},

  image: {
    position: 'absolute',
    inset: '0 0 0 0',
    zIndex: 0,
    objectFit: 'cover',
    objectPosition: 'center',
  },
  name: {
    fontWeight: 'normal',
    textAlign: 'center',
  },
  title: {
    fontWeight: 'normal',
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
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
}));

function StaffPortrait({ featuredImage, name, jobPosition }: StaffFragment) {
  const { classes } = useStyles(undefined, { name: 'StaffPortrait' });

  return (
    <Box classNames={classes.root}>
      <Title className={classes.name}>{name}</Title>
      <Title className={classes.title}>{jobPosition}</Title>

      <Image data={featuredImage.responsiveImage} />
    </Box>
  );
}

export default StaffPortrait;
