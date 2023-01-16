import {
  AddressFragment,
  ImageGalleryFragment,
  PeopleGalleryFragment,
  ProjectGalleryFragment,
  StaticPageData,
} from '@lib/dato-cms';
import {
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';
import { DefaultInlineComponents } from './defaults';
import { InlineComponents } from './types';
import inferType from './inferType';
import Placeholder from './Placeholder';

type InlineTypeNames = Exclude<
  Exclude<StaticPageData['page'], null>['sections'][number]['content']['links'],
  null
>[number]['__typename'];

export default function createRenderInlineRecord<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>(
  inlineComponents?: Partial<InlineComponents>
): StructuredTextPropTypes<R1, R2>['renderInlineRecord'] {
  const Components = !inlineComponents
    ? DefaultInlineComponents
    : { ...DefaultInlineComponents, ...inlineComponents };

  return ({ record }) => {
    const typename = record.__typename as InlineTypeNames | 'unknown';
    switch (typename) {
      case 'AddressRecord':
        return (
          <Components.Address
            key={record.id}
            {...inferType<AddressFragment>(record)}
          />
        );
      case 'ImageGalleryRecord':
        return (
          <Components.ImageGallery
            key={record.id}
            {...inferType<ImageGalleryFragment>(record)}
          />
        );
      case 'PeopleGalleryRecord':
        return (
          <Components.PeopleGallery
            key={record.id}
            {...inferType<PeopleGalleryFragment>(record)}
          />
        );
      case 'ProjectGalleryRecord':
        return (
          <Components.ProjectGallery
            key={record.id}
            {...inferType<ProjectGalleryFragment>(record)}
          />
        );
      default:
        return <Placeholder key={record.id} type={record.__typename} />;
    }
  };
}
