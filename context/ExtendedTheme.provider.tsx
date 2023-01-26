import { useMantineTheme, MantineTheme, DEFAULT_THEME } from '@mantine/core';
import { useCallback, useMemo } from 'react';
import ExtendedThemeContext, {
  type ExtendedTheme,
} from './ExtendedTheme.context';

export type ExtendedThemeOverride = Partial<
  Omit<ExtendedTheme, 'fn' | 'theme'>
>;

const DEFAULT_EXTENDED_THEME: Required<ExtendedThemeOverride> = {
  activeColor: 'red',
  backgroundShade: { light: 1, dark: 9 },
  activeShade: 2,
};
export default function ExtendedThemeProvider({
  children,
  extendedThemeOverride,
}: {
  children: React.ReactNode;
  extendedThemeOverride?: ExtendedThemeOverride;
}) {
  const theme = useMantineTheme();
  const extended = useMemo(
    () => ({ ...DEFAULT_EXTENDED_THEME, ...(extendedThemeOverride || {}) }),
    [extendedThemeOverride]
  );
  const backgroundColor: ExtendedTheme['fn']['backgroundColor'] = useCallback(
    (colorScheme) => {
      return theme.colors.background[
        typeof extended.backgroundShade === 'number'
          ? extended.backgroundShade
          : extended.backgroundShade[colorScheme || theme.colorScheme]
      ];
    },
    [theme, extended]
  );
  const activeColor: ExtendedTheme['fn']['activeColor'] = useCallback(
    (colorScheme) => {
      return theme.colors[extended.activeColor][
        typeof extended.activeShade === 'number'
          ? extended.activeShade
          : extended.activeShade[colorScheme || theme.colorScheme]
      ];
    },
    [theme, extended]
  );
  const value = useMemo<ExtendedTheme>(
    () => ({
      theme,
      ...extended,
      fn: {
        backgroundColor,
        activeColor,
      },
    }),
    [theme, extended, activeColor, backgroundColor]
  );
  return (
    <ExtendedThemeContext.Provider value={value}>
      {children}
    </ExtendedThemeContext.Provider>
  );
}
