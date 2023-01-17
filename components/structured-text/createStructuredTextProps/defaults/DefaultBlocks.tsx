import type { BlockComponents } from '@components/structured-text/createStructuredTextProps/types';
import { Section } from '@components/elements/layout';
import { Title } from '@mantine/core';

const DefaultBlockComponents: BlockComponents = {
  Subsection: ({ children, section }) => {
    return (
      <Section>
        {section.title && <Title order={3}>{section.title}</Title>}
        {children}
      </Section>
    );
  },
};

export default DefaultBlockComponents;
