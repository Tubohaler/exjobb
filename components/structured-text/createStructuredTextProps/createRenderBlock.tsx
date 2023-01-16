import type { ResponsiveVideoFragment, StaticPageData } from '@lib/dato-cms';
import type {
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';
import { DefaultBlockComponents } from './defaults';
import { BlockComponents } from './types';
import inferType from './inferType';
import Placeholder from './Placeholder';
type BlockTypeNames = Exclude<
  Exclude<
    StaticPageData['page'],
    null
  >['sections'][number]['content']['blocks'],
  null
>[number]['__typename'];

export default function createRenderBlock<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>(
  blockComponents?: Partial<BlockComponents>
): StructuredTextPropTypes<R1, R2>['renderBlock'] {
  const components = !blockComponents
    ? DefaultBlockComponents
    : { ...DefaultBlockComponents, ...blockComponents };

  return ({ record }) => {
    const typename = record.__typename as BlockTypeNames | 'unknown';
    switch (typename) {
      case 'ResponsiveVideoRecord':
        return components.ResponsiveVideo(
          inferType<ResponsiveVideoFragment>(record)
        );
      default:
        return <Placeholder key={record.id} type={record.__typename} />;
    }
  };
}
