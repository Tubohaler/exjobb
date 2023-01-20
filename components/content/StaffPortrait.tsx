import React from 'react';
import { Image } from 'react-datocms';

import { Box, createStyles, Title } from '@mantine/core';
import { createTransition } from '@lib/theme/utils';

import { StaffFragment } from '@lib/dato-cms';

const useStyles = createStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    aspectRatio: '5/7',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    inset: '0 0 0 0',
    zIndex: 0,
    objectFit: 'cover',
    objectPosition: 'center',
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
  name: {
    fontWeight: 'normal',
    textAlign: 'center',
  },
  title: {
    fontWeight: 'normal',
    textAlign: 'center',
  },
}));

function StaffPortrait({ featuredImage, name, jobPosition }: StaffFragment) {
  const { classes } = useStyles(undefined, { name: 'StaffPortrait' });

  return (
    <Box className={classes.root}>
      <Box className={classes.overlay}>
        <Title className={classes.name} order={3} size="h4">
          {name}
        </Title>
        <Title className={classes.title} order={4} size="h4" italic>
          {jobPosition}
        </Title>
      </Box>
      <Image className={classes.image} data={featuredImage.responsiveImage} />
    </Box>
  );
}

export default StaffPortrait;
