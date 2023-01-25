import { forwardRef } from 'react';
import { Box } from '@mantine/core';

export type ArticleProps = Parameters<typeof Box<'article'>>[0] & {
  children: React.ReactNode;
};
/**
 * Wraps content with a html article element
 */
const Article = forwardRef<HTMLDivElement, ArticleProps>((props, ref) => {
  return <Box ref={ref} component="article" {...props} />;
});

export default Article;
