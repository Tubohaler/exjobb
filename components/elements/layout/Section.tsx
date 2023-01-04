import { Box } from '@mantine/core';

export type SectionProps = Omit<
  Parameters<typeof Box<'section'>>[0],
  'component'
> & {
  children: React.ReactNode;
};

/**
 * Wraps content with a html section element
 */
const Section = (props: SectionProps) => {
  return <Box component="section" {...props} />;
};

export default Section;
