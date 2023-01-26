import { StaticPageProps } from '@lib/dato-cms';
import { renderMetaTags } from 'react-datocms';
import NextHead from 'next/head';

import React from 'react';

export type HeadProps = {
  data: StaticPageProps['data'];
  children?: React.ReactNode;
};

/**
 * Page head element
 */
const Head = ({ children, data }: HeadProps) => {
  return (
    <NextHead>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      {data &&
        renderMetaTags([
          ...(data.page?._seoMetaTags || []),
          ...(data._site?.favicon || []),
        ])}
      {children}
    </NextHead>
  );
};

export default Head;
