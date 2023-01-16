import type { InlineComponents } from '@components/structured-text/createStructuredTextProps/types';
import Placeholder from '../Placeholder';

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
