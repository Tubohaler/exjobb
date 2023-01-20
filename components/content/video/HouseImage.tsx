import React from 'react';
import { Image } from 'react-datocms';

import { ImageGalleryFragment } from '@lib/dato-cms';
import { createStyles, Box, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  image: {},
}));

function HouseImage({ title, images }: ImageGalleryFragment) {
  return <Box>HouseImage</Box>;
}

export default HouseImage;
