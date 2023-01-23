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

export const defaultTransition = 'all 0.33s ease-in-out 0.1s';

const breakpoints: MantineTheme['breakpoints'] = {
  ...DEFAULT_THEME.breakpoints,
  xs: 480,
};

const mainTheme: MantineTheme = {
  ...DEFAULT_THEME,
  colors,
  colorScheme: 'light',
  defaultRadius: 0,
  fontFamily: ebGaramond.style.fontFamily,
  breakpoints,
  headings: {
    ...DEFAULT_THEME.headings,
    fontFamily: ebGaramond.style.fontFamily,
    fontWeight: 400,
  },
  globalStyles: () => ({
    html: {
      height: '100%',
    },
    body: {
      minHeight: '100%',
      width: '100%',
    },

    'html, body': {
      margin: 0,
      padding: 0,
    },
    'main > article': {
      '&:nth-of-type(even)': {
        backgroundColor: 'rgba(0,0,0,0.02)',
      },
    },
  }),
};

export default mainTheme;
