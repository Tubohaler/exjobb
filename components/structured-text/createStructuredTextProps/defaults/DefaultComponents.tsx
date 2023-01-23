import type { StructuredTextComponents } from '@components/structured-text/createStructuredTextProps/types';
import Placeholder from '../Placeholder';
import ResponsiveVideo from '@components/content/video/ResponsiveVideo';
import ProjectGallery from '@components/content/ProjectGallery';
import SocialLinkGroup from '@components/content/SocialLinkGroup';
import Address from '@components/content/Address';
import CurrentVacancies from '@components/content/CurrentVacancies';
import PeopleGallery from '@components/content/PeopleGallery';
import ImageGallery from '@components/content/ImageGallery';

const DefaultInlineComponents: StructuredTextComponents = {
  Address: (address) => {
    return <Address address={address} />;
  },
  ResponsiveVideo: (video) => {
    return <ResponsiveVideo video={video} />;
  },
  SocialLinks: ({ links }) => {
    return <SocialLinkGroup links={links} />;
  },
  ProjectGallery,
  ImageGallery,
  PeopleGallery,
  CurrentVacancies,
};

export default DefaultInlineComponents;
