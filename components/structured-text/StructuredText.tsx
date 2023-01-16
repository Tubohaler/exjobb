import {
  StructuredText as RenderStructuredText,
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';
import createStructuredTextProps from './createStructuredTextProps';

export type StructuredTextProps =
  StructuredTextPropTypes<StructuredTextGraphQlResponseRecord>;

const defaultProps = createStructuredTextProps();

const StructuredText = (props: StructuredTextProps) => {
  return <RenderStructuredText {...{ ...defaultProps, ...props }} />;
};

export default StructuredText;
