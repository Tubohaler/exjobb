import type { StructuredTextComponents } from '@components/structured-text/createStructuredTextProps/types';
import CoverVideo from '@components/content/video/CoverVideo';
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
  CoverVideo: (video) => {
    return <CoverVideo video={video} />;
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
