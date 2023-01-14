import type { InlineComponents } from '@components/structured-text/createStructuredTextProps/types';
import { Code } from '@mantine/core';

const devMode = process.env.NODE_ENV === 'development';

console.log(process.env.NODE_ENV);

const Placeholder = ({ type }: { type: keyof InlineComponents }) => {
  return !devMode ? (
    <>{null}</>
  ) : (
    <Code p="xl" m="xl">
      {type} Placeholder
    </Code>
  );
};

const DefaultInlineComponents: InlineComponents = {
  Address: () => {
    return <Placeholder type="Address" />;
  },
  ImageGallery: () => {
    return <Placeholder type="ImageGallery" />;
  },
  PeopleGallery: () => {
    return <Placeholder type="PeopleGallery" />;
  },
  ProjectGallery: () => {
    return <Placeholder type="ProjectGallery" />;
  },
};

export default DefaultInlineComponents;
