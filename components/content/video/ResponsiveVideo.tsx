import { ResponsiveVideoFragment } from '@lib/dato-cms';
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

export type ResponsiveVideoStylesNames = Selectors<typeof useStyles>;

const useStyles = createStyles((theme) => {
  const videoStyles: CSSObject = {
    height: '100%',
    width: '100%',
    minHeight: '90vh',
    minWidth: '100vw',
    position: 'relative',
    zIndex: 0,
  };
  return {
    root: {
      width: '100vw',
      height: '100%',
      maxHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
    },
    title: {
      color: theme.white,
      opacity: 0.9,
      wordSpacing: '100vw',
      fontWeight: 'normal',
      fontSize: theme.fontSizes.xl * 6,
      textAlign: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      userSelect: 'none',
      zIndex: 1,
      [theme.fn.smallerThan('sm')]: {
        fontSize: theme.fontSizes.xl * 3,
      },
    },
    landscape: {
      ...videoStyles,
    },
    portrait: {
      ...videoStyles,
    },
  };
});

export type ResponsiveVideoProps = Parameters<typeof Box<'div'>>[0] &
  DefaultProps<ResponsiveVideoStylesNames> & {
    video: ResponsiveVideoFragment;
  };

function ResponsiveVideo({
  video,
  unstyled,
  className,
  classNames,
  ...props
}: ResponsiveVideoProps) {
  const isPortrait = useMediaQuery('(orientation: portrait)', false);
  const { classes, cx } = useStyles(undefined, {
    name: 'ResponsiveVideo',
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

export default ResponsiveVideo;