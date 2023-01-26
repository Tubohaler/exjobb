import { ActionIcon, Box, createStyles, Modal } from '@mantine/core';
import { ImageGalleryFragment } from '@lib/dato-cms';
import ImageGalleryThumbnail from './ImageGalleryThumbnail';
import { useState } from 'react';
import { createTransition } from '@lib/theme/utils';
import ResponsiveImage from '@components/elements/ResponsiveImage';
import { ExtendedTheme } from 'context/ExtendedTheme.context';
import useExtendedTheme from '@hooks/useExtendedTheme';

const useGalleryStyles = createStyles(
  (theme, { extended }: { extended: ExtendedTheme }) => ({
    root: {
      display: 'grid',
      gridTemplateRows: 'auto',
      gridTemplateColumns: 'repeat(3, 1fr)',
      alignContent: 'center',
      justifyContent: 'center',

      [theme.fn.smallerThan('md')]: { gridTemplateColumns: '1fr' },
    },
    overlay: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'green',
      padding: theme.spacing.xl * 2,
    },
    modalImageWrapper: {
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    modalCloseButton: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 48,
      color: theme.white,
      fontWeight: 700,
      fontFamily: 'Verdana',
      fontSize: theme.fontSizes.xl * 1.5,
      transform: 'rotate(45deg)',
      transformOrigin: 'center',
      transition: createTransition(['color', 'transform']),
      border: 'none',
      outline: 'none',
      '&:hover': {
        color: extended.fn.activeColor(),
      },
      '&:focus': {
        border: 'none',
        outline: 'none',
      },
    },
    modalImage: {
      width: 'auto',
      height: '100%',
    },
  })
);

function ImageGallery({ images }: ImageGalleryFragment) {
  const extended = useExtendedTheme();
  const { classes } = useGalleryStyles({ extended }, { name: 'ImageGallery' });
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const handleClick = (id: string) => {
    setCurrentImage((prev) => images.find((image) => image.id === id) || prev);
    setShowOverlay((show) => !show);
  };

  return (
    <>
      <Modal
        opened={showOverlay}
        onClose={() => setShowOverlay(false)}
        withCloseButton={false}
        closeOnClickOutside
        closeOnEscape
        centered
        exitTransitionDuration={0.3}
        overlayBlur={2}
        styles={{
          inner: {
            width: '100%',
            height: '100%',
            padding: 0,
            '& *': {
              padding: 0,
            },
          },
          modal: {
            background: 'transparent',
            width: '100%',
            height: '100%',
            display: 'flex',
          },
          body: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            position: 'relative',
          },
        }}
      >
        <ActionIcon
          variant="transparent"
          onClick={() => setShowOverlay(false)}
          className={classes.modalCloseButton}
        >
          +
        </ActionIcon>
        <Box
          className={classes.modalImageWrapper}
          onClick={() => setShowOverlay(false)}
        >
          <ResponsiveImage
            className={classes.modalImage}
            data={currentImage.highres}
            objectFit="contain"
            usePlaceholder={false}
          />
        </Box>
      </Modal>
      <Box className={classes.root}>
        {images.map((image) => (
          <ImageGalleryThumbnail
            key={image.id}
            image={image}
            onClick={handleClick}
          />
        ))}
      </Box>
    </>
  );
}

export default ImageGallery;
