import {
  FooterSectionFragment,
  PageSectionFragment,
  SubsectionFragment,
} from '@lib/dato-cms';
import { isStructuredText } from 'datocms-structured-text-utils';
import {
  StructuredText as RenderStructuredText,
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';
import createStructuredTextProps from './createStructuredTextProps';

export type StructuredTextProps<
  R1 extends StructuredTextGraphQlResponseRecord = StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
> = Omit<StructuredTextPropTypes<R1, R2>, 'data'> & {
  data:
    | StructuredTextPropTypes<R1, R2>['data']
    | PageSectionFragment['content']
    | SubsectionFragment['content']
    | FooterSectionFragment['content'];
};

const devMode = process.env.NODE_ENV === 'development';

function StructuredText<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>({ data, ...props }: StructuredTextProps<R1, R2>) {
  if (!isStructuredText<R1, R2>(data)) {
    if (!devMode) return <></>;
    throw new Error('StructuredText error: data is not valid structured text');
  }
  return <RenderStructuredText data={data} {...props} />;
}

StructuredText.defaultProps = createStructuredTextProps();

export default StructuredText;
