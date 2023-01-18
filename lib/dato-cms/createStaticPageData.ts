import { PageQuery, StaticPageData, StaticPageFooter } from './graphql';
import getSocialLinks from './getSocialLinks';

const createStaticPageData = async (
  queryData: PageQuery
): Promise<StaticPageData> => {
  const socialLinks = await getSocialLinks();

  const footer: StaticPageData['footer'] = !queryData.footer
    ? null
    : {
        ...queryData.footer,
        sections: queryData.footer.sections.map((section) => {
          const { content } = section;
          const links = content.links.map((link) => {
            return link.__typename === 'SocialLinksCollectionRecord'
              ? socialLinks
              : link;
          });
          return {
            ...section,
            content: {
              ...content,
              links,
            },
          };
        }) as StaticPageFooter['sections'],
      };

  return {
    ...queryData,
    header: !queryData.header ? null : { ...queryData.header, socialLinks },
    footer,
  };
};

export default createStaticPageData;
