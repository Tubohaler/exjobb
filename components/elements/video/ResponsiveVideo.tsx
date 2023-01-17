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
    width: '100vw',
    height: 'auto',
    minHeight: 0,
    minWidth: 0,
    position: 'relative',
    zIndex: 0,
  };
  return {
    root: {
      width: '100%',
      height: '100%',
      maxHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
    },
    titleWrapper: {
      position: 'absolute',
      inset: '0 0 0 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    title: {
      color: theme.white,
      opacity: 0.9,
      wordSpacing: '100vw',
      fontWeight: 'normal',
      fontSize: theme.fontSizes.xl * 5,
      textAlign: 'center',
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
        <Box className={classes.titleWrapper}>
          <Title order={1} className={classes.title}>
            {video.overlayText}
          </Title>
        </Box>
      )}
      <Video
        video={video[isPortrait ? 'portrait' : 'landscape']}
        className={classes[isPortrait ? 'portrait' : 'landscape']}
      />
    </Box>
  );
}

export default ResponsiveVideo;
