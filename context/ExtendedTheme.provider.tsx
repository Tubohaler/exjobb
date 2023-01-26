import { isShade, isThemeShade } from '@lib/theme/utils';
import {
  useMantineTheme,
  MantineTheme,
  DEFAULT_THEME,
  MantineThemeOverride,
} from '@mantine/core';
import { useMemo } from 'react';
import ExtendedThemeContext, {
  type ExtendedTheme,
} from './ExtendedTheme.context';

export type ExtendedThemeOverride = Partial<Omit<ExtendedTheme, 'fn'>>;

const createExtendedTheme = (
  theme?: MantineTheme,
  extendedThemeOverride?: ExtendedThemeOverride
) => {
  const extended: Omit<ExtendedTheme, 'fn'> = {
    theme: theme || DEFAULT_THEME,
    backgroundColor: 'beige',
    activeColor: 'red',
    backgroundShade: { light: 1, dark: 9 },
    activeShade: DEFAULT_THEME.primaryShade,
    ...(extendedThemeOverride || {}),
  };
  if (
    theme?.primaryShade !== undefined &&
    extended.activeShade === DEFAULT_THEME.primaryShade
  ) {
    extended.activeShade = theme.primaryShade;
  }
  const fn: ExtendedTheme['fn'] = {
    backgroundColor: (colorScheme) => {
      const { theme, backgroundColor, backgroundShade } = extended;
      return theme.colors[backgroundColor][
        typeof backgroundShade === 'number'
          ? backgroundShade
          : backgroundShade[colorScheme || theme.colorScheme]
      ];
    },
    activeColor: (colorScheme) => {
      const { theme, activeColor, activeShade } = extended;
      return theme.colors[activeColor][
        typeof activeShade === 'number'
          ? activeShade
          : activeShade[colorScheme || theme.colorScheme]
      ];
    },
  };
  return {
    ...extended,
    fn,
  } as ExtendedTheme;
};

export default function ExtendedThemeProvider({
  children,
  extendedThemeOverride,
}: {
  children: React.ReactNode;
  extendedThemeOverride?: ExtendedThemeOverride;
}) {
  const theme = useMantineTheme();
  const value = useMemo<ExtendedTheme>(
    () => createExtendedTheme(theme, extendedThemeOverride),
    [theme, extendedThemeOverride]
  );
  return (
    <ExtendedThemeContext.Provider value={value}>
      {children}
    </ExtendedThemeContext.Provider>
  );
}
