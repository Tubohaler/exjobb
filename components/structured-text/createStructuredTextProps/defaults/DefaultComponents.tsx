import type { StructuredTextComponents } from '@components/structured-text/createStructuredTextProps/types';
import Placeholder from '../Placeholder';
import ResponsiveVideo from '@components/elements/video/ResponsiveVideo';
import ProjectGallery from '@components/content/ProjectGallery';

const DefaultInlineComponents: StructuredTextComponents = {
  Address: () => {
    return <Placeholder type="Address" />;
  },
  ImageGallery: () => {
    return <Placeholder type="ImageGallery" />;
  },
  PeopleGallery: () => {
    return <Placeholder type="PeopleGallery" />;
  },
  ProjectGallery: (props) => {
    return <ProjectGallery {...props} />;
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
