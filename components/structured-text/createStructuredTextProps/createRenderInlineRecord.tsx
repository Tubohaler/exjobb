import {
  AddressFragment,
  CurrentVacanciesFragment,
  ImageGalleryFragment,
  PeopleGalleryFragment,
  ProjectGalleryFragment,
  ResponsiveVideoFragment,
  StaticPageData,
  StaticSocialLinksCollection,
} from '@lib/dato-cms';
import {
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';
import DefaultComponents from './defaults/DefaultComponents';
import { StructuredTextComponents } from './types';
import inferType from './inferType';
import Placeholder from './Placeholder';

type RecordTypeNames =
  | Exclude<
      Exclude<
        StaticPageData['page'],
        null
      >['sections'][number]['content']['links'],
      null
    >[number]['__typename']
  | Exclude<
      StaticPageData['footer'],
      null
    >['sections'][number]['content']['links'][number]['__typename'];

export default function createRenderInlineRecord<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>(
  components?: Partial<StructuredTextComponents>
): StructuredTextPropTypes<R1, R2>['renderInlineRecord'] {
  const Components = !components
    ? DefaultComponents
    : { ...DefaultComponents, ...components };

  return ({ record }) => {
    const typename = record.__typename as RecordTypeNames | 'unknown';
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
      case 'ResponsiveVideoRecord':
        return (
          <Components.ResponsiveVideo
            key={record.id}
            {...inferType<ResponsiveVideoFragment>(record)}
          />
        );
      case 'CurrentVacanciesModelRecord':
        return (
          <Components.CurrentVacancies
            key={record.id}
            {...inferType<CurrentVacanciesFragment>(record)}
          />
        );
      case 'SocialLinksCollectionRecord':
        return (
          <Components.SocialLinks
            key={record.id}
            {...inferType<StaticSocialLinksCollection>(record)}
          />
        );
      default:
        return <Placeholder key={record.id} type={record.__typename} />;
    }
  };
}
