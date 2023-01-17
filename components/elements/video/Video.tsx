import type { VideoFragment } from '@lib/dato-cms';
import { createTransition } from '@lib/theme/utils';
import { createStyles } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { DetailedHTMLProps, VideoHTMLAttributes } from 'react';

// To reduce data transfer from CMS in development
const devMode = process.env.NODE_ENV === 'development';

export type VideoProps = Omit<
  DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>,
  'children' | 'src' | 'width' | 'height'
> & {
  video: VideoFragment;
  fallback?: React.ReactNode;
};

export type VideoStylesParams = { loaded?: boolean };

const useStyles = createStyles((theme) => {
  return {
    root: {
      opacity: 0,
      background: theme.black,
      transition: createTransition(['opacity'], 0.05, 'ease-in-out', 0),
      objectFit: 'cover',
      objectPosition: 'center',
    },
    loaded: {
      opacity: 1,
    },
  };
});

const Video = ({ video, fallback, className, ...props }: VideoProps) => {
  const [currentVideo, setCurrentVideo] = useState(video);
  const [visible, setVisible] = useState(true);
  const { classes, cx } = useStyles(undefined, { name: 'Video' });
  const prevVideo = useRef(currentVideo);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (video === prevVideo.current || !videoRef.current) return;
    const videoElement = videoRef.current;
    videoElement.pause();
    setVisible(false);
    videoElement.removeAttribute('src');
    const timeout = setTimeout(() => {
      videoElement.load();
      setCurrentVideo(video);
      prevVideo.current = video;
    }, 100);
    return () => clearTimeout(timeout);
  }, [video]);

  return (
    <video
      ref={videoRef}
      className={cx(classes.root, visible ? classes.loaded : null, className)}
      width={currentVideo.width || 'auto'}
      height={currentVideo.height || 'auto'}
      src={
        (devMode
          ? currentVideo.video.mp4Low
          : currentVideo.video.mp4High ||
            currentVideo.video.mp4Med ||
            currentVideo.video.mp4Low) || ''
      }
      onLoadedData={() => setVisible(true)}
      {...props}
    >
      {fallback}
    </video>
  );
};

const defaultProps: Partial<Omit<VideoProps, 'video'>> = {
  autoPlay: true,
  muted: true,
  playsInline: true,
  loop: true,
  disablePictureInPicture: true,
  disableRemotePlayback: true,
  preload: 'metadata',
};

Video.defaultProps = defaultProps;

export default Video;
