import React from 'react';
import { Image } from 'react-datocms';

import { ImageGalleryFragment } from '@lib/dato-cms';
import { createStyles, Box, Title } from '@mantine/core';
import { createTransition } from '@lib/theme/utils';

type ImageGalleryThumbnailStylesParams = { aspectRatio?: number };

const useStyles = createStyles(
  (theme, { aspectRatio }: ImageGalleryThumbnailStylesParams) => ({
    root: {
      aspectRatio: `${aspectRatio || 'auto'}`,
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    image: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      inset: '0 0 0 0',
      zIndex: 0,
      objectFit: 'cover',
      objectPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      inset: '0 0 0 0',
      zIndex: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0,
      background: 'rgba(0,0,0,0.5)',
      transition: createTransition(['opacity']),
      '&:hover': {
        opacity: 1,
      },
    },
    title: {
      color: theme.white,
    },
  })
);

export type ImageGalleryThumbnailProps = {
  image: ImageGalleryFragment['images'][number];
  onClick?: (id: string) => unknown;
};

function ImageGalleryThumbnail({
  responsiveImage,
}: ImageGalleryFragment['images'][number]) {
  const { classes } = useStyles(
    { aspectRatio: responsiveImage.aspectRatio },
    { name: 'Gallery' }
  );

  return (
    <Box className={classes.root}>
      {responsiveImage.title && (
        <Box className={classes.overlay}>
          <Title className={classes.title} italic>
            {responsiveImage.title}
          </Title>
        </Box>
      )}
      <Image className={classes.image} data={responsiveImage} />
    </Box>
  );
}

export default ImageGalleryThumbnail;
