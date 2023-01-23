import React from 'react';
import { Image } from 'react-datocms';

import { Box, createStyles, Title, useMantineTheme } from '@mantine/core';
import { createTransition } from '@lib/theme/utils';

import { StaffFragment } from '@lib/dato-cms';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    inset: '0 0 0 0',
    zIndex: 10,
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
    textAlign: 'center',
    userSelect: 'none',
  },
  title: {
    textAlign: 'center',
    userSelect: 'none',
  },
}));

function StaffPortrait({ featuredImage, name, jobPosition }: StaffFragment) {
  const { classes } = useStyles(undefined, { name: 'StaffPortrait' });
  const theme = useMantineTheme();
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
      <Image
        className={classes.image}
        data={featuredImage.responsiveImage}
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
        sizes={`(max-width: ${theme.breakpoints.md}px) ${Math.floor(
          theme.breakpoints.md / 2
        )}px, ${Math.floor(theme.breakpoints.md / 3)}px`}
      />
    </Box>
  );
}

export default StaffPortrait;
