import type { StaticPageData, SubsectionFragment } from '@lib/dato-cms';
import {
  StructuredText,
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';
import { BlockComponents } from './types';
import inferType from './inferType';
import Placeholder from './Placeholder';
import { DefaultBlockComponents } from './defaults';
import { isStructuredText } from 'datocms-structured-text-utils';

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
  structuredTextProps: Partial<StructuredTextPropTypes<R1, R2>>,
  blockComponents?: Partial<BlockComponents>
): StructuredTextPropTypes<R1, R2>['renderBlock'] {
  const Components: BlockComponents = !blockComponents
    ? DefaultBlockComponents
    : { ...DefaultBlockComponents, ...blockComponents };

  return ({ record }) => {
    const typename = record.__typename as BlockTypeNames | 'unknown';
    switch (typename) {
      case 'SubsectionRecord':
        const content = record.content as SubsectionFragment;
        return (
          <Components.Subsection
            section={inferType<SubsectionFragment>(record)}
          >
            {!isStructuredText<R1, R2>(content) ? null : (
              <StructuredText data={content} {...structuredTextProps} />
            )}
          </Components.Subsection>
        );
      default:
        return <Placeholder key={record.id} type={record.__typename} />;
    }
  };
}
