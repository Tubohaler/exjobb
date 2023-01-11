import {
  MantineTheme,
  Tuple,
  DefaultMantineColor,
  DEFAULT_THEME,
  AnchorProps,
} from '@mantine/core';
import Link from 'next/link';
import { EB_Garamond } from '@next/font/google';

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<DefaultMantineColor | 'beige', Tuple<string, 10>>;
  }
}

const ebGaramond = EB_Garamond({
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
  fallback: ['serif'],
});

/**
 * Custom Theme Colors
 *
 * color swatches for beige, blue and red generated with
 * https://smart-swatch.netlify.app/
 * based on:
 * (beige: #e8e5df, blue: #9dc3df, red: #ff8a8a)
 *
 * body background: beige[1],
 * link color: blue[2]
 * link:hover color: red[2]
 */
export const colors: MantineTheme['colors'] = {
  ...DEFAULT_THEME.colors,
  beige: [
    '#f6f3eb',
    '#e8e5df', // background color
    '#c9c3b8',
    '#b3ab9b',
    '#9d937e',
    '#847965',
    '#675e4f',
    '#494337',
    '#2d2820',
    '#130c04',
  ],
  blue: [
    '#e5f4ff',
    '#c2dcee',
    '#9dc3df', // link color
    '#7aadd2',
    '#5695c5',
    '#3d7cab',
    '#2e6086',
    '#1f4560',
    '#0f293c',
    '#000f19',
  ],
  red: [
    '#ffe2e2',
    '#ffb2b2',
    '#ff8a8a', // link hover
    '#fe4e4e',
    '#fe1f1c',
    '#e50a03',
    '#b20301',
    '#800000',
    '#4e0000',
    '#1f0000',
  ],
};

const mainTheme: MantineTheme = {
  ...DEFAULT_THEME,
  colors,
  colorScheme: 'light',
  defaultRadius: 0,
  fontFamily: ebGaramond.style.fontFamily,
  headings: {
    ...DEFAULT_THEME.headings,
    fontFamily: ebGaramond.style.fontFamily,
  },
  globalStyles: (theme) => ({
    body: {
      background: theme.colors.beige[1],
    },
    'main > article': {
      '&:nth-of-type(odd)': {
        backgroundColor: 'rgba(0,0,0,0.02)',
      },
    },
  }),
  components: {
    Anchor: {
      defaultProps: {
        component: Link,
        sx: (theme) => ({
          color: theme.black,
          textDecoration: 'none',
          transition: 'all 0.33s ease-in-out 0.1s',
          '&:hover': {
            color: theme.colors.red[2],
            textDecoration: 'none',
          },
        }),
      } as Partial<AnchorProps>,
    },
  },
};

export default mainTheme;