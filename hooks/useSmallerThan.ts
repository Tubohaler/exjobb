import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, MantineNumberSize } from '@mantine/core';
import type { UseMediaQueryOptions } from '@mantine/hooks/lib/use-media-query/use-media-query';

export default function useSmallerThan(
  size: MantineNumberSize,
  initialValue?: boolean,
  options?: UseMediaQueryOptions
) {
  const theme = useMantineTheme();
  const smallerThan = useMediaQuery(
    `(max-width: ${
      typeof size === 'number' ? size : theme.breakpoints[size]
    }px)`,
    initialValue,
    options
  );
  return smallerThan;
}
