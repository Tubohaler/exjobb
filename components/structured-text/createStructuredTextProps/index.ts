import type {
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';

import type { CreateStructuredTextPropsConfig } from './types';
import createRenderBlock from './createRenderBlock';
import createRenderInlineRecord from './createRenderInlineRecord';
import createCustomNodeRules from './createCustomNodeRules';
import createCustomMarkRules from './createCustomMarkRules';

export * from './types';

/**
 * Create custom props for StructuredText component
 * Includes default custom render components,
 * and additional custom components if provided in config
 *
 * config type declaration:
 * @see CreateStructuredTextPropsConfig
 *
 * Example usage with and createGetStaticProps and PageSection component (which accepts same props as StructuredText but with defaults):
 * @example
 *
 * import { Head, PageWrapper } from '@components/elements/layout';
 * import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';
 * import PageSection from '@components/structured-text/PageSection';
 *
 * export const getStaticProps = createGetStaticPageProps("home");
 *
 * const structuredTextProps = createStructuredTextProps({
 *   inlineComponents: {
 *      ProjectGallery: ({ id, projects }) => {
 *          // return some jsx
 *      }
 *   }
 * });
 *
 * const Home = ({ data }: StaticPageProps) => {
 *  return (
 *      <>
 *          <Head />
 *          <PageWrapper>
 *              {data.page?.sections.map((section) => {
 *                  return (
 *                      <PageSection
 *                          key={section.id}
 *                          section={section}
 *                          {...structuredTextProps}
 *                      />
 *                  );
 *              })}
 *          <PageWrapper/>
 *      </>
 *  );
 * };
 *
 * export default Home;
 */
export default function createStructuredTextProps<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>(
  config?: CreateStructuredTextPropsConfig
): Partial<StructuredTextPropTypes<R1, R2>> {
  const props: Partial<StructuredTextPropTypes<R1, R2>> = {
    renderInlineRecord: createRenderInlineRecord<R1, R2>(config?.components),
    customNodeRules: createCustomNodeRules<R1, R2>(config?.nodeRules),
    customMarkRules: createCustomMarkRules<R1, R2>(
      config?.markRules,
      config?.customMarkRules
    ),
  };

  return {
    ...props,
    renderBlock: createRenderBlock<R1, R2>(props, config?.blocks),
  };
}
