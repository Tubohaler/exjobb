import { MantineColor, MantineTheme, ColorScheme } from '@mantine/core';
import { createContext } from 'react';

export interface ExtendedTheme {
  theme: MantineTheme;
  backgroundColor: MantineColor;
  activeColor: MantineColor;
  backgroundShade: MantineTheme['primaryShade'];
  activeShade: MantineTheme['primaryShade'];
  fn: {
    backgroundColor: (colorScheme?: ColorScheme) => string;
    activeColor: (colorScheme?: ColorScheme) => string;
  };
}

const ExtendedThemeContext = createContext<ExtendedTheme | null>(null);

export default ExtendedThemeContext;
