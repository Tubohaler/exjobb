import { getFaviconMimeType } from '@lib/index';
import NextHead from 'next/head';

import React from 'react';

export type HeadProps = {
  title?: string;
  faviconUrl?: string;
  description?: string;
  children?: React.ReactNode;
};

/**
 * Page head element
 */
const Head = ({ title, faviconUrl, description, children }: HeadProps) => {
  return (
    <NextHead>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <title>{title}</title>
      <link
        rel="icon"
        href={faviconUrl}
        type={getFaviconMimeType(faviconUrl || '/favicon.ico')}
      />
      {children}
    </NextHead>
  );
};

Head.defaultProps = {
  title: 'Might and Delight',
  faviconUrl: '/favicon.png',
  description: 'Welcome to game studio Might and Delight',
};

export default Head;
