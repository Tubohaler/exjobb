import React from 'react';
import { Image } from 'react-datocms';

import { ImageGalleryFragment } from '@lib/dato-cms';
import { createStyles, Box, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {},
  image: {},
  overlay: {},
  name: {},
}));

function Gallery({ title, images }: ImageGalleryFragment) {
  const { classes } = useStyles(undefined, { name: 'Gallery' });

  return (
    <Box className={classes.root}>
      <Box className={classes.overlay}>
        <Title className={classes.name}>{title}</Title>
      </Box>

      {/* <Image className={classes.image} data={images} /> */}
    </Box>
  );
}

export default Gallery;
