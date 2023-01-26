import { MantineTheme, Shade } from '@mantine/core';

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
