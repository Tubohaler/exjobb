import React from 'react';
import { Image } from 'react-datocms';
import HumbleButton from '@components/elements/buttons/HumbleButton';
import SteamButton from '@components/elements/buttons/SteamButton';

import { ProjectFragment } from '@lib/dato-cms';
import {
  createStyles,
  Box,
  Title,
  Overlay,
  Flex,
  Stack,
  Group,
  Button,
} from '@mantine/core';

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
  overlay: {
    position: 'absolute',
    inset: '0 0 0 0',
    zIndex: 1,
    opacity: 0,
    background: 'rgba(0,0,0,0.5)',
    color: theme.white,
    transition: createTransition(['opacity']),
    '&:hover': { opacity: 1 },
  },
  info: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontWeight: 'normal',
    // fontSize: '1em',
    textAlign: 'center',
  },
  description: {
    fontWeight: 'normal',
    // fontSize: '1em',
    textAlign: 'center',
  },
  buttonGroup: {
    width: '100%',
  },
}));

const Project = ({ name, featuredImage, description }: ProjectFragment) => {
  const { classes } = useStyles(undefined, { name: 'Project' });
  return (
    <Box className={classes.root}>
      <Flex
        className={classes.overlay}
        align="center"
        justify="center"
        direction="column"
      >
        <Stack className={classes.info} spacing="xs" justify="center">
          <Title className={classes.title} order={3} size="h4">
            {name}
          </Title>
          <Title className={classes.description} order={4} size="h5" italic>
            {description}
          </Title>
        </Stack>
        <Group className={classes.buttonGroup} grow spacing={0}>
          <HumbleButton />
          <SteamButton />
        </Group>
      </Flex>
      <Image className={classes.image} data={featuredImage.responsiveImage} />
    </Box>
  );
};

export default Project;
