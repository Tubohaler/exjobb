import type { VideoFragment } from '@lib/dato-cms';
import { DetailedHTMLProps, VideoHTMLAttributes } from 'react';

// To reduce data transfer from cms in dev mode
const devMode = process.env.NODE_ENV === 'development';

export type VideoProps = Omit<
  DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>,
  'children'
> & {
  video: VideoFragment;
  fallback?: React.ReactNode;
};

const Video = ({
  video: { width, height, mimeType, video },
  fallback,
  ...props
}: VideoProps) => {
  return (
    <video width={width || 'auto'} height={height || 'auto'} {...props}>
      <source
        src={(devMode ? video.mp4Low : video.mp4High) || ''}
        type={mimeType}
      />
      {fallback}
    </video>
  );
};

Video.defaultProps = {
  autoPlay: true,
  muted: true,
  playsInline: true,
  loop: true,
};

export default Video;
