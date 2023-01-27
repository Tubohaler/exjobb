import { CoverVideoFragment } from '@lib/dato-cms';
import {
  Box,
  createStyles,
  CSSObject,
  DefaultProps,
  Selectors,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Video from './Video';

export type CoverVideoStylesNames = Selectors<typeof useStyles>;

const useStyles = createStyles((theme) => {
  const absoluteCenter: CSSObject = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  };
  const videoStyles: CSSObject = {
    ...absoluteCenter,
    height: '100%',
    width: '100%',
    zIndex: 1,
  };
  return {
    root: {
      width: '100vw',
      height: '100vh',
      maxWidth: '100%',
      maxHeight: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    title: {
      ...absoluteCenter,
      color: theme.white,
      opacity: 0.9,
      wordSpacing: '100vw',
      letterSpacing: '0.03em',
      lineHeight: 1,
      fontWeight: 'normal',
      fontSize: theme.fontSizes.xl * 8,
      textAlign: 'center',
      userSelect: 'none',
      [theme.fn.smallerThan('sm')]: {
        fontSize: theme.fontSizes.xl * 6,
      },
      [theme.fn.smallerThan('xs')]: {
        fontSize: theme.fontSizes.xl * 4,
      },
      [`@media (max-height: ${theme.breakpoints.xs}px)`]: {
        fontSize: theme.fontSizes.xl * 2,
      },
      [`@media (max-height: ${theme.breakpoints.xs * 1.5}px)`]: {
        fontSize: theme.fontSizes.xl * 4,
      },
      zIndex: 8,
    },
    landscape: {
      ...videoStyles,
    },
    portrait: {
      ...videoStyles,
    },
  };
});

export type CoverVideoProps = Parameters<typeof Box<'div'>>[0] &
  DefaultProps<CoverVideoStylesNames> & {
    video: CoverVideoFragment;
  };

function CoverVideo({
  video,
  unstyled,
  className,
  classNames,
  ...props
}: CoverVideoProps) {
  const isPortrait = useMediaQuery('(orientation: portrait)', false);
  const { classes, cx } = useStyles(undefined, {
    name: 'CoverVideo',
    unstyled,
    classNames,
  });

  return (
    <Box className={cx(classes.root, className)} {...props}>
      {video.overlayText && (
        <Title order={1} className={classes.title}>
          {video.overlayText}
        </Title>
      )}
      <Video
        video={video[isPortrait ? 'portrait' : 'landscape']}
        className={classes[isPortrait ? 'portrait' : 'landscape']}
      />
    </Box>
  );
}

export default CoverVideo;
