import { Box, createStyles, DefaultProps, Selectors } from '@mantine/core';

export type ArticleProps = DefaultProps<ArticleStylesNames> &
  Omit<Parameters<typeof Box<'article'>>[0], 'component'> & {
    children: React.ReactNode;
  };

export type ArticleStylesNames = Selectors<typeof useStyles>;

const useStyles = createStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.xl * 3}px ${theme.spacing.xl}px`,
  },
}));

/**
 * Wraps content with a html article element
 */
const Article = ({ className, classNames, styles, ...props }: ArticleProps) => {
  const { classes, cx } = useStyles(undefined, {
    name: 'Article',
    classNames,
    styles,
  });
  return (
    <Box
      component="article"
      className={cx(classes.root, className)}
      {...props}
    />
  );
};

export default Article;
