import type { Tuple, DefaultMantineColor } from '@mantine/core';

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<DefaultMantineColor | 'background', Tuple<string, 10>>;
  }
  export type Shade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}
