import { Box, createStyles } from '@mantine/core';
import { ImageGalleryFragment } from '@lib/dato-cms';
import ImageGalleryThumbnail from './ImageGalleryThumbnail';

const useGalleryStyles = createStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignContent: 'center',
    justifyContent: 'center',

    [theme.fn.smallerThan('md')]: { gridTemplateColumns: '1fr' },
  },
}));

function ImageGallery({ title, images }: ImageGalleryFragment) {
  const { classes } = useGalleryStyles(undefined, { name: 'ImageGallery' });

  return (
    <Box className={classes.root}>
      {images.map((image) => (
        <ImageGalleryThumbnail key={image.id} {...image} />
      ))}
    </Box>
  );
}

export default ImageGallery;
