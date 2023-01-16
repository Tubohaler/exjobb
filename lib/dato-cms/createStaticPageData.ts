import { modifyInlineSvg } from '@lib/svg-utils';
import axios from 'axios';
import isSvg from 'is-svg';
import {
  PageQuery,
  SocialLinksCollectionFragmentDoc,
  StaticSocialLinksCollectionFragment,
  StaticPageData,
  StaticPageFooter,
  StaticPageHeader,
} from './graphql';
import request from './request';
import { isSvgIconFragment } from './typeGuard';

const createStaticPageData = async (
  queryData: PageQuery
): Promise<StaticPageData> => {
  const socialLinks = (await request(
    SocialLinksCollectionFragmentDoc
  )) as unknown as StaticSocialLinksCollectionFragment;

  await Promise.all(
    socialLinks.links.map(
      (record) =>
        new Promise<void>((resolve) => {
          if (!isSvgIconFragment(record.icon)) return;
          axios
            .get(record.icon.url, {
              headers: { Accept: 'image/svg+xml' },
            })
            .then((res) => {
              if (res.headers['content-type'] !== 'image/svg+xml') {
                return;
              }
              const { data } = res;
              if (typeof data !== 'string' || !isSvg(data)) return;
              record.icon = {
                ...record.icon,
                inlineHTML:
                  modifyInlineSvg(data, ['title'], {
                    fill: 'currentColor',
                    width: `${record.icon.width}`,
                    height: `${record.icon.height}`,
                  }) || data,
              };
            })
            .catch((err) => {
              console.error(err instanceof Error ? err.message : err);
            })
            .finally(resolve);
        })
    )
  );

  const replaceSocialLinks = <
    T extends 'footer' | 'header',
    S extends Exclude<PageQuery[T], null>['sections'] = Exclude<
      PageQuery[T],
      null
    >['sections']
  >(
    sections: S
  ) => {
    return sections.map((section) => {
      return {
        ...section,
        content: {
          ...section.content,
          links: section.content.links.map((link) => {
            return link.__typename === 'SocialLinksCollectionRecord'
              ? socialLinks
              : link;
          }) as Exclude<
            (T extends 'header'
              ? StaticPageHeader
              : StaticPageFooter)['sections'][number]['content'],
            null
          >['links'],
        },
      };
    }) as T extends 'header'
      ? StaticPageHeader['sections']
      : StaticPageFooter['sections'];
  };

  return {
    ...queryData,
    header: !queryData.header
      ? null
      : {
          ...queryData.header,
          sections: replaceSocialLinks<'header'>(queryData.header.sections),
        },
    footer: !queryData.footer
      ? null
      : {
          ...queryData.footer,
          sections: replaceSocialLinks<'footer'>(queryData.footer.sections),
        },
  };
};

export default createStaticPageData;
