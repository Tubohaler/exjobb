import type { StructuredTextComponents } from '@components/structured-text/createStructuredTextProps/types';
import Placeholder from '../Placeholder';
import ResponsiveVideo from '@components/content/video/ResponsiveVideo';
import ProjectGallery from '@components/content/ProjectGallery';
import SocialLinkGroup from '@components/content/SocialLinkGroup';
import Address from '@components/content/Address';
import CurrentVacancies from '@components/content/CurrentVacancies';
import PeopleGallery from '@components/content/PeopleGallery';

const DefaultInlineComponents: StructuredTextComponents = {
  Address: (address) => {
    return <Address address={address} />;
  },
  ImageGallery: () => {
    return <Placeholder type="ImageGallery" />;
  },
  PeopleGallery,

  ProjectGallery: (props) => {
    return <ProjectGallery {...props} />;
  },
  ResponsiveVideo: (video) => {
    return <ResponsiveVideo video={video} />;
  },
  CurrentVacancies,
  SocialLinks: ({ links }) => {
    return <SocialLinkGroup links={links} />;
  },
};

export default DefaultInlineComponents;
