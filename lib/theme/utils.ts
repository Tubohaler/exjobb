import { ThemeColorsFragment } from '@lib/dato-cms';
import {
  MantineTheme,
  MantineThemeOverride,
  Shade,
  Tuple,
} from '@mantine/core';
import chroma from 'chroma-js';
import { ExtendedThemeOverride } from 'context/ExtendedTheme.provider';

export const createTransition = (
  properties: string[] = ['all'],
  secondDuration = 0.33,
  timingFunction:
    | 'ease'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'linear'
    | 'step-start'
    | 'step-end' = 'ease-in-out',
  secondDelay = 0.1
) => {
  return properties
    .map(
      (prop) => `${prop} ${secondDuration}s ${timingFunction} ${secondDelay}s`
    )
    .join(', ');
};

export const isShade = (value: unknown): value is Shade => {
  return (
    typeof value === 'number' &&
    !Number.isNaN(value) &&
    Number.isInteger(value) &&
    value >= 0 &&
    value <= 9
  );
};

export const isThemeShade = (
  value: unknown
): value is MantineTheme['primaryShade'] => {
  if (typeof value === 'number') return isShade(value);
  if (!value || typeof value !== 'object') return false;
  const { light, dark } = value as Record<string, unknown>;
  return [light, dark].every(isShade);
};

/**
 * Based on Smart Swatch by Ivan Dalmet:
 * https://github.com/ivan-dalmet/smart-swatch/blob/master/src/pages/SmartSwatch.js
 */
export const createColorSwatch = (
  color: string
): { swatch: Tuple<string, 10>; shade: Shade } | null => {
  if (!chroma.valid(color)) return null;
  const LIGHTNESS_MAP: Tuple<number, 10> = [
    0.95, 0.85, 0.75, 0.65, 0.55, 0.45, 0.35, 0.25, 0.15, 0.05,
  ];
  const SATURATION_MAP: Tuple<number, 10> = [
    0.32, 0.16, 0.08, 0.04, 0, 0, 0.04, 0.08, 0.16, 0.32,
  ];
  const c = chroma(color);
  const lightness = c.get('hsl.l');

  const closestLightness = LIGHTNESS_MAP.reduce((prev, curr) =>
    Math.abs(curr - lightness) < Math.abs(prev - lightness) ? curr : prev
  );
  const shade = LIGHTNESS_MAP.findIndex((l) => l === closestLightness) as Shade;
  if (shade < 0) return null;
  LIGHTNESS_MAP[shade] = lightness;
  SATURATION_MAP[shade] = c.get('hsl.s');

  const swatch = LIGHTNESS_MAP.map((l, i) => {
    const color = c.set('hsl.l', l);
    const saturationDelta = SATURATION_MAP[i] - SATURATION_MAP[shade];
    return (
      saturationDelta >= 0
        ? color.saturate(saturationDelta)
        : color.desaturate(saturationDelta * -1)
    ).hex();
  }) as Tuple<string, 10>;

  return { swatch, shade };
};

export const getThemeOverrides = ({
  background,
  primary,
  active,
  black,
  white,
}: ThemeColorsFragment) => {
  const base: MantineThemeOverride & {
    colors: Partial<
      Pick<MantineTheme['colors'], 'background' | 'active' | 'primary'>
    >;
  } = {
    colors: {},
  };
  const extended: ExtendedThemeOverride = {};

  const backgroundColor = createColorSwatch(background.hex);
  const primaryColor = createColorSwatch(primary.hex);
  const activeColor = createColorSwatch(active.hex);

  if (backgroundColor) {
    base.colors.background = backgroundColor.swatch;
    extended.backgroundShade = backgroundColor.shade;
    base.colorScheme = backgroundColor.shade >= 5 ? 'dark' : 'light';
  }
  if (primaryColor) {
    base.colors.primary = primaryColor.swatch;
    base.primaryShade = primaryColor.shade;
  }
  if (activeColor) {
    base.colors.active = activeColor.swatch;
    extended.activeShade = activeColor.shade;
  }
  if (typeof black === 'string' && chroma.valid(black)) {
    base.black = black;
  }
  if (typeof white === 'string' && chroma.valid(white)) {
    base.white = white;
  }
  return {
    base,
    extended,
  };
};
