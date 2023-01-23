import { Box } from '@mantine/core';

export type ArticleProps = Omit<
  Parameters<typeof Box<'article'>>[0],
  'component'
> & {
  children: React.ReactNode;
};

/**
 * Wraps content with a html article element
 */
const Article = (props: ArticleProps) => {
  return <Box component="article" {...props} />;
};

export default Article;
