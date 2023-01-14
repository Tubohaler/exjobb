import type { BlockComponents } from '@components/structured-text/createStructuredTextProps/types';
import ResponsiveVideo from '@components/elements/video/ResponsiveVideo';

const DefaultBlockComponents: BlockComponents = {
  ResponsiveVideo: (responsiveVideo) => (
    <ResponsiveVideo video={responsiveVideo} />
  ),
};

export default DefaultBlockComponents;
