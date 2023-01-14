import type { MarkRules } from '@components/structured-text/createStructuredTextProps/types';
import { Text, Mark } from '@mantine/core';

const DefaultMarkRules: Partial<MarkRules> = {
  strong: ({ key, children }) => {
    return (
      <Text key={key} component="strong">
        {children}
      </Text>
    );
  },
  code: ({ key, children }) => {
    return (
      <Text key={key} component="code" inherit inline>
        {children}
      </Text>
    );
  },
  emphasis: ({ key, children }) => {
    return (
      <Text key={key} component="em" inherit inline>
        {children}
      </Text>
    );
  },
  underline: ({ key, children }) => {
    return (
      <Text key={key} span underline inherit inline>
        {children}
      </Text>
    );
  },
  strikethrough: ({ key, children }) => {
    return (
      <Text key={key} span strikethrough inherit inline>
        {children}
      </Text>
    );
  },
  highlight: ({ key, children }) => {
    return (
      <Mark key={key} color="beige">
        {children}
      </Mark>
    );
  },
};

export default DefaultMarkRules;
