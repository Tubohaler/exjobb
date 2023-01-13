import type { BlockComponents } from '@components/structured-text/types';
import ResponsiveVideo from '@components/elements/ResponsiveVideo';

const defaultBlockComponents: BlockComponents = {
  ResponsiveVideo: (props) => <ResponsiveVideo key={props.id} {...props} />,
};

export default defaultBlockComponents;
