export const createTransition = (
  properties: string[] = ['all'],
  secondDuration: number = 0.33,
  timingFunction:
    | 'ease'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'linear'
    | 'step-start'
    | 'step-end' = 'ease-in-out',
  secondDelay: number = 0.1
) => {
  return properties
    .map(
      (prop) => `${prop} ${secondDuration}s ${timingFunction} ${secondDelay}s`
    )
    .join(', ');
};
