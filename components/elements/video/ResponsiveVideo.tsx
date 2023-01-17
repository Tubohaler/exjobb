import { ResponsiveVideoFragment, VideoFragment } from '@lib/dato-cms';
import { defaultTransition } from '@lib/theme/main';
import { Box, createStyles, DefaultProps, Selectors } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';
import Video from './Video';

export type ResponsiveVideoStylesNames = Selectors<typeof useStyles>;

const useStyles = createStyles((theme) => {
  const videoStyles = {
    width: '100vw',
    height: 'auto',
    minHeight: 0,
    minWidth: 0,
  };
  return {
    root: {
      width: '100%',
      maxHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
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
      <Video
        video={video[isPortrait ? 'portrait' : 'landscape']}
        className={classes[isPortrait ? 'portrait' : 'landscape']}
      />
    </Box>
  );
}

export default ResponsiveVideo;
