import type { InlineComponents } from '@components/structured-text/createStructuredTextProps/types';
import { Text, Box } from '@mantine/core';

const DefaultInlineComponents: InlineComponents = {
  Address: ({ id }) => {
    return <Text key={id}>Address {id}</Text>;
  },
  ImageGallery: ({ id, images }) => {
    return <Text key={id}>ImageGallery {id}</Text>;
  },
  PeopleGallery: ({ id, people }) => {
    return <Text key={id}>PeopleGallery</Text>;
  },
  ProjectGallery: ({ projects }) => {
    return (
      <Box>
        {projects.map(({ id, name }) => {
          return <Text key={id}>{name}</Text>;
        })}
      </Box>
    );
  },
};

export default DefaultInlineComponents;
