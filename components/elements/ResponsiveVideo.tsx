import { ResponsiveVideoFragment } from '@lib/dato-cms';
import { defaultTransition } from '@lib/theme/main';
import { createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';

const useStyles = createStyles(() => ({
  video: {
    width: '100%',
    height: 'auto',
  },
}));

const ResponsiveVideo = ({ landscape, portrait }: ResponsiveVideoFragment) => {
  const { classes } = useStyles();
  const isPortrait = useMediaQuery('(orientation: portrait)', false);
  const { width, height, mimeType, video } = isPortrait ? portrait : landscape;
  console.log('isPortrait: ', isPortrait);
  console.log('video: ', video);

  return (
    <video
      className={classes.video}
      width={width || 'auto'}
      height={height || 'auto'}
      autoPlay
      muted
      playsInline
      loop
    >
      <source
        src={video.mp4High || video.mp4Med || video.mp4Low || ''}
        type={mimeType}
      />
    </video>
  );
};

export default ResponsiveVideo;
