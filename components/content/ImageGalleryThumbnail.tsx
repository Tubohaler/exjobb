import React from 'react';
import { Image } from 'react-datocms';

import { ImageGalleryFragment } from '@lib/dato-cms';
import { createStyles, Box, Title, useMantineTheme } from '@mantine/core';
import { createTransition } from '@lib/theme/utils';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    cursor: 'pointer',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    inset: '0 0 0 0',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
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
    userSelect: 'none',
  },
}));

export type ImageGalleryThumbnailProps = {
  image: ImageGalleryFragment['images'][number];
  onClick?: (id: string) => unknown;
};

function ImageGalleryThumbnail({ image, onClick }: ImageGalleryThumbnailProps) {
  const { classes } = useStyles(undefined, { name: 'Gallery' });
  const theme = useMantineTheme();

  return (
    <Box className={classes.root} onClick={() => onClick && onClick(image.id)}>
      {image.responsiveImage.title && (
        <Box className={classes.overlay}>
          <Title className={classes.title} italic order={3}>
            {image.responsiveImage.title}
          </Title>
        </Box>
      )}
      <Image
        className={classes.image}
        data={image.responsiveImage}
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
        sizes={`(max-width: ${theme.breakpoints.md}px) 100vw, ${
          theme.breakpoints.md * 0.33
        }px`}
      />
    </Box>
  );
}

export default ImageGalleryThumbnail;
