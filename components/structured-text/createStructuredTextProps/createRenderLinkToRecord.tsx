import {
  HtmlSectionFragment,
  PageLinkFragment,
  PageQuery,
} from '@lib/dato-cms';
import {
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';
import DefaultComponents from './defaults/DefaultComponents';
import DefaultRecordLinks from './defaults/DefaultRecordLinks';
import { RecordLinkComponents } from './types';
import inferType from './inferType';
import Placeholder from './Placeholder';

type RecordTypeNames =
  | Exclude<
      Exclude<
        Exclude<PageQuery['page'], null>['sections'][number],
        HtmlSectionFragment
      >['content']['links'],
      null
    >[number]['__typename']
  | Exclude<
      PageQuery['page'],
      null
    >['footer']['sections'][number]['content']['links'][number]['__typename'];

export default function createRenderLinkToRecord<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>(
  components?: Partial<RecordLinkComponents>
): StructuredTextPropTypes<R1, R2>['renderLinkToRecord'] {
  const Components = !components
    ? DefaultRecordLinks
    : { ...DefaultRecordLinks, ...components };

  return ({ record, ...props }) => {
    const typename = record.__typename as RecordTypeNames | 'unknown';
    switch (typename) {
      case 'PageRecord':
        return (
          <Components.Page
            key={record.id}
            {...{ record: inferType<PageLinkFragment>(record), ...props }}
          />
        );
      default:
        return <Placeholder key={record.id} type={record.__typename} />;
    }
  };
}
