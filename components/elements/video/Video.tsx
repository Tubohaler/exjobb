import type { VideoFragment } from '@lib/dato-cms';
import { Box, createStyles, Selectors, DefaultProps } from '@mantine/core';

const devMode = process.env.NODE_ENV === 'development';

export type VideoStylesNames = Selectors<typeof useStyles>;
export type VideoStylesParams = Pick<VideoFragment, 'width' | 'height'>;

export type VideoProps = Parameters<typeof Box<'video'>>[0] &
  DefaultProps<VideoStylesNames, VideoStylesParams> & {
    video: VideoFragment;
  };

const useStyles = createStyles(
  (theme, { width, height }: VideoStylesParams) => {
    return {
      root: {},
    };
  }
);

const Video = ({
  video: { width, height, mimeType, video },
  styles,
  unstyled,
  className,
  classNames,
  ...props
}: VideoProps) => {
  const { classes, cx } = useStyles(
    { width, height },
    { name: 'Video', styles, unstyled, classNames }
  );
  return (
    <Box
      component="video"
      className={cx(classes.root, className)}
      width={width || 'auto'}
      height={height || 'auto'}
      autoPlay
      muted
      playsInline
      loop
      {...props}
    >
      <source
        src={(devMode ? video.mp4Low : video.mp4High) || ''}
        type={mimeType}
      />
    </Box>
  );
};
export default Video;
