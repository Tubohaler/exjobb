import {
  ActionIcon,
  Box,
  Button,
  createStyles,
  CSSObject,
  Modal,
  ModalStylesNames,
  Title,
} from '@mantine/core';
import { ImageGalleryFragment } from '@lib/dato-cms';
import ImageGalleryThumbnail from './ImageGalleryThumbnail';
import { useEffect, useState } from 'react';
import { Image } from 'react-datocms';
import { createTransition } from '@lib/theme/utils';

const useGalleryStyles = createStyles((theme) => ({
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
    '&:hover': {
      color: theme.colors.red[2],
    },
  },
  modalImage: {
    width: 'auto',
    height: '100%',
  },
}));

function ImageGallery({ images }: ImageGalleryFragment) {
  const { classes } = useGalleryStyles(undefined, { name: 'ImageGallery' });
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
        fullScreen
        exitTransitionDuration={0.3}
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
            background: 'rgba(0,0,0,0.75)',
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
          <Image
            className={classes.modalImage}
            data={currentImage.responsiveImage}
            layout="responsive"
            objectFit="contain"
            objectPosition="center"
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
