import ResponsiveVideo from '@components/elements/video/ResponsiveVideo';
import type { InlineComponents } from '@components/structured-text/createStructuredTextProps/types';
import {
  CurrentVacanciesFragment,
  StaticSocialLinksCollection,
  NavLinkCollectionFragment,
} from '@lib/dato-cms';
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
  ResponsiveVideo: (video) => {
    return <ResponsiveVideo video={video} />;
  },
  CurrentVacancies: () => {
    return <Placeholder type="CurrentVacancies" />;
  },
  SocialLinks: () => {
    return <Placeholder type="SocialLinks" />;
  },
  NavLinks: () => {
    return <Placeholder type="NavLinks" />;
  },
};

export default DefaultInlineComponents;
