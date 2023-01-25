import { Box } from '@mantine/core';
import { forwardRef } from 'react';

export type SectionProps = Parameters<typeof Box<'section'>>[0] & {
  children: React.ReactNode;
};

/**
 * Wraps content with a html section element
 */
const Section = forwardRef<HTMLDivElement, SectionProps>((props, ref) => {
  return <Box ref={ref} component="section" {...props} />;
});

export default Section;
