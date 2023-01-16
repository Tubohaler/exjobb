import type { VideoFragment } from '@lib/dato-cms';
import React from 'react';
import { DetailedHTMLProps, VideoHTMLAttributes } from 'react';

// To reduce data transfer from CMS in development
const devMode = process.env.NODE_ENV === 'development';

export type VideoProps = Omit<
  DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>,
  'children'
> & {
  video: VideoFragment;
  fallback?: React.ReactNode;
};

const Video = React.forwardRef<HTMLVideoElement, VideoProps>(
  ({ video: { width, height, mimeType, video }, fallback, ...props }, ref) => {
    return (
      <video
        ref={ref}
        width={width || 'auto'}
        height={height || 'auto'}
        {...props}
      >
        <source
          src={(devMode ? video.mp4Low : video.mp4High) || ''}
          type={mimeType}
        />
        {fallback}
      </video>
    );
  }
);

Video.defaultProps = {
  autoPlay: true,
  muted: true,
  playsInline: true,
  loop: true,
};

export default Video;
