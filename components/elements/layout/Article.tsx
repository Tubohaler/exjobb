import { Box, createStyles } from '@mantine/core';

export type ArticleProps = Omit<
  Parameters<typeof Box<'article'>>[0],
  'component'
> & {
  children: React.ReactNode;
};

const useStyles = createStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      maxWidth: theme.breakpoints.md,
    },
  },
}));

/**
 * Wraps content with a html article element
 */
const Article = ({ className, ...props }: ArticleProps) => {
  const { classes, cx } = useStyles(undefined, { name: 'Article' });
  return (
    <Box
      component="article"
      className={cx(classes.root, className)}
      {...props}
    />
  );
};

export default Article;
