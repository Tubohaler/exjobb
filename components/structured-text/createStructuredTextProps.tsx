import {
  AddressFragment,
  ImageGalleryFragment,
  PeopleGalleryFragment,
  ProjectFragment,
  ProjectGalleryFragment,
  ResponsiveVideoFragment,
  StaffFragment,
} from '@lib/dato-cms';
import { StructuredText } from 'react-datocms';
import { isStructuredText } from 'datocms-structured-text-utils';

export interface BlockComponents {
  ResponsiveVideo: (props: ResponsiveVideoFragment) => JSX.Element;
}

export interface InlineComponents {
  Address: (props: AddressFragment) => JSX.Element;
  ImageGallery: (props: ImageGalleryFragment) => JSX.Element;
  PeopleGallery: (props: PeopleGalleryFragment) => JSX.Element;
  ProjectGallery: (props: ProjectGalleryFragment) => JSX.Element;
  Staff: (props: StaffFragment) => JSX.Element;
  Project: (props: ProjectFragment) => JSX.Element;
}

// const defaultBlockComponents: BlockComponents = {
//   ResponsiveVideo: (props) => {

//   },
// };
