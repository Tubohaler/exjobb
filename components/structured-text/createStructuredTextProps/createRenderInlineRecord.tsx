import {
  AddressFragment,
  CurrentVacanciesFragment,
  ImageGalleryFragment,
  PageQuery,
  PeopleGalleryFragment,
  ProjectGalleryFragment,
  CoverVideoFragment,
  SocialLinksCollectionFragment,
  HtmlSectionFragment,
} from '@lib/dato-cms';
import {
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';
import DefaultComponents from './defaults/DefaultComponents';
import { StructuredTextComponents } from './types';
import inferType from './inferType';
import Placeholder from './Placeholder';

import { Section } from '@components/elements/layout';

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
          <Section>
            <Components.ImageGallery
              key={record.id}
              {...inferType<ImageGalleryFragment>(record)}
            />
          </Section>
        );
      case 'PeopleGalleryRecord':
        return (
          <Section>
            <Components.PeopleGallery
              key={record.id}
              {...inferType<PeopleGalleryFragment>(record)}
            />
          </Section>
        );
      case 'ProjectGalleryRecord':
        return (
          <Section>
            <Components.ProjectGallery
              key={record.id}
              {...inferType<ProjectGalleryFragment>(record)}
            />
          </Section>
        );
      case 'CoverVideoRecord':
        return (
          <Components.CoverVideo
            key={record.id}
            {...inferType<CoverVideoFragment>(record)}
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
            {...inferType<SocialLinksCollectionFragment>(record)}
          />
        );
      default:
        return <Placeholder key={record.id} type={record.__typename} />;
    }
  };
}
