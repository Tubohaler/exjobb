import React from 'react';
import { Image } from 'react-datocms';

import { ProjectFragment } from '@lib/dato-cms';
import { createStyles, Box, Title, Overlay, Flex, Stack } from '@mantine/core';

import { createTransition } from '@lib/theme/utils';

const useStyles = createStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    aspectRatio: '1',
    position: 'relative',
  },
  image: {
    position: 'absolute',
    inset: '0 0 0 0',
    zIndex: 0,
    objectFit: 'cover',
    objectPosition: 'center',
  },
  // title: {},
  overlay: {
    position: 'absolute',
    inset: '0 0 0 0',
    zIndex: 1,
    opacity: 0,
    background: 'rgba(0,0,0,0.5)',
    transition: createTransition(['opacity']),
    '&:hover': { opacity: 1 },
  },
}));

const Project = ({ name, featuredImage }: ProjectFragment) => {
  const { classes } = useStyles(undefined, { name: 'Project' });
  return (
    <Box className={classes.root}>
      <Flex className={classes.overlay}>
        <Stack>
          <Title order={3}>{name}</Title>
          <Title></Title>
        </Stack>
      </Flex>
      <Image className={classes.image} data={featuredImage.responsiveImage} />
    </Box>
  );
};

export default Project;
