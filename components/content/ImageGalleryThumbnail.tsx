import ResponsiveImage from '@components/elements/ResponsiveImage';

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
  const { classes } = useStyles(undefined, { name: 'ImageGalleryThumbnail' });
  const theme = useMantineTheme();

  return (
    <Box className={classes.root} onClick={() => onClick && onClick(image.id)}>
      {image.thumbnail.title && (
        <Box className={classes.overlay}>
          <Title className={classes.title} italic order={3}>
            {image.thumbnail.title}
          </Title>
        </Box>
      )}
      <ResponsiveImage
        className={classes.image}
        data={image.thumbnail}
        sizes={`(max-width: ${theme.breakpoints.md}px) ${
          theme.breakpoints.md
        }px, ${Math.floor(theme.breakpoints.md / 3)}px`}
      />
    </Box>
  );
}

export default ImageGalleryThumbnail;
