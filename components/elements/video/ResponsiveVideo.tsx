import { ResponsiveVideoFragment, VideoFragment } from '@lib/dato-cms';
import { defaultTransition } from '@lib/theme/main';
import { Box, createStyles, DefaultProps, Selectors } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import Video from './Video';

export type ResponsiveVideoStylesNames = Selectors<typeof useStyles>;

const useStyles = createStyles((theme) => ({
  root: {},
  landscape: {
    width: '100%',
    height: 'auto',
  },
  portrait: {
    width: '100%',
    height: 'auto',
  },
}));

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
    <Box component="div" className={cx(classes.root, className)} {...props}>
      {isPortrait ? (
        <Video video={video.portrait} className={classes.portrait} />
      ) : (
        <Video video={video.landscape} className={classes.landscape} />
      )}
    </Box>
  );
}

export default ResponsiveVideo;
