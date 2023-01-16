import {
  StructuredText as RenderStructuredText,
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';
import createStructuredTextProps from './createStructuredTextProps';

export type StructuredTextProps =
  StructuredTextPropTypes<StructuredTextGraphQlResponseRecord>;

const StructuredText = (props: StructuredTextProps) => {
  return <RenderStructuredText {...props} />;
};

StructuredText.defaultProps = createStructuredTextProps();

export default StructuredText;
