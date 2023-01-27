import { parse } from 'parse5';
import { parse5ToStructuredText } from 'datocms-html-to-structured-text';
import { validate, isStructuredText } from 'datocms-structured-text-utils';
import { PageQuery, PageSectionFragment } from './graphql';

export async function htmlToStructuredText(html: string) {
  try {
    const structuredText = await parse5ToStructuredText(
      parse(html, { sourceCodeLocationInfo: true })
    );
    const { valid, message } = validate(structuredText);
    if (!valid) {
      throw new Error(message);
    }
    return structuredText;
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    return null;
  }
}

export default async function replaceHtmlSections(page: PageQuery['page']) {
  if (!page) return page;
  const sections = await Promise.all(
    page.sections.map(async (section) => {
      if (section.__typename !== 'PageSectionHtmlRecord') {
        return section;
      }
      const value = await htmlToStructuredText(section.htmlContent);
      return {
        __typename: 'PageSectionRecord',
        id: section.id,
        title: section.title,
        alignContentCenter: section.alignContentCenter,
        alignTitleCenter: section.alignTitleCenter,
        content: {
          __typename: 'PageSectionModelContentField',
          value,
          blocks: [],
          links: [],
        },
      } as PageSectionFragment;
    })
  );
  return {
    ...page,
    sections: sections.filter((section) => isStructuredText(section.content)),
  };
}
