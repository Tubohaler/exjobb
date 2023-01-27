import { PageSectionFragment } from '@lib/dato-cms';
import { Box, DefaultProps, Selectors, Title } from '@mantine/core';
import { createStyles } from '@mantine/styles';

export type PageSectionHeaderProps = DefaultProps<
  PageSectionHeaderStylesNames,
  PageSectionHeaderStylesParams
> &
  Omit<Parameters<typeof Box<'div'>>[0], 'children'> & {
    title: string;
    alignCenter?: PageSectionFragment['alignTitleCenter'];
  };

export type PageSectionHeaderStylesNames = Selectors<typeof useStyles>;
export type PageSectionHeaderStylesParams = {
  alignCenter?: PageSectionFragment['alignTitleCenter'];
};

const useStyles = createStyles(
  (_, { alignCenter = true }: PageSectionHeaderStylesParams, getRef) => ({
    root: {
      display: 'flex',
      justifyContent: alignCenter ? 'center' : 'normal',
      alignItems: 'center',
      [`& .${getRef('title')}`]: {
        letterSpacing: '0.1em',
        textAlign: alignCenter ? 'center' : 'initial',
      },
    },
    title: {
      ref: getRef('title'),
    },
  })
);

const PageSectionHeader = ({
  title,
  className,
  classNames,
  styles,
  alignCenter = true,
  ...props
}: PageSectionHeaderProps) => {
  const { classes, cx } = useStyles(
    { alignCenter },
    {
      name: 'PageSectionHeader',
      classNames,
      styles,
    }
  );
  return !title ? (
    <></>
  ) : (
    <Box component="div" className={cx(classes.root, className)} {...props}>
      <Title
        order={2}
        className={classes.title}
        transform="uppercase"
        size="h1"
      >
        {title}
      </Title>
    </Box>
  );
};

export default PageSectionHeader;
