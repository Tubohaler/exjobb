import { Box } from '@mantine/core';
import styled from '@emotion/styled';

export type ArticleProps = Omit<
  Parameters<typeof Box<'article'>>[0],
  'component'
> & {
  children: React.ReactNode;
};

const StyledArticle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 * Wraps content with a html article element
 */
const Article = (props: ArticleProps) => {
  return <Box component={StyledArticle} {...props} />;
};

export default Article;
