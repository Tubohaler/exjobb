import { Code } from '@mantine/core';

const devMode = process.env.NODE_ENV === 'development';

/**
 * Placeholder for structured text nodes.
 *
 * Only visible in development.
 */
const Placeholder = ({ type }: { type: string }) => {
  return !devMode ? (
    <>{null}</>
  ) : (
    <Code
      p="xl"
      m="xl"
      sx={(theme) => ({ fontSize: theme.fontSizes.xl, display: 'block' })}
    >
      {type} Placeholder
    </Code>
  );
};

export default Placeholder;
