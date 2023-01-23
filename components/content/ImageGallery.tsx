import React from 'react';

import { Box, Title, createStyles } from '@mantine/core';

import SingleImage from './SingleImage';
import { ImageGalleryFragment } from '@lib/dato-cms';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignContent: 'center',
    justifyContent: 'center',

    [theme.fn.largerThan('md')]: { gridTemplateColumns: 'repeat(3, 1fr)' },
  },
}));

function ImageGallery({ images }: ImageGalleryFragment) {
  const { classes } = useStyles(undefined, { name: 'ImageGallery' });

  return (
    <Box>
      {/* {images.map((image) => (
        <SingleImage key={image.id} {...image} />
      ))} */}
    </Box>
  );
}

export default ImageGallery;
