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
      wordSpacing: '100%',
      fontWeight: 'normal',
      fontSize: theme.fontSizes.xl * 6,
      textAlign: 'center',
      userSelect: 'none',
      zIndex: 10,
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
