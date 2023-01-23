import { Box, createStyles, DefaultProps, Selectors } from '@mantine/core';

export type ArticleStylesNames = Selectors<typeof useStyles>;

export type ArticleProps = DefaultProps<ArticleStylesNames> &
  Parameters<typeof Box<'article'>>[0] & {
    children: React.ReactNode;
  };

const useStyles = createStyles((theme) => ({
  root: {},
}));

/**
 * Wraps content with a html article element
 */
const Article = ({
  className,
  classNames,
  styles,
  unstyled,
  ...props
}: ArticleProps) => {
  const { classes, cx } = useStyles(undefined, {
    name: 'Article',
    classNames,
    styles,
    unstyled,
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
