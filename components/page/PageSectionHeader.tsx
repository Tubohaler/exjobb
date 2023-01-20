import { SectionFragment } from '@lib/dato-cms';
import { Box, DefaultProps, Selectors, Title } from '@mantine/core';
import { createStyles } from '@mantine/styles';

export type PageSectionHeaderProps =
  DefaultProps<PageSectionHeaderStylesNames> &
    Omit<Parameters<typeof Box<'div'>>[0], 'children'> & {
      title: string;
    };

export type PageSectionHeaderStylesNames = Selectors<typeof useStyles>;

const useStyles = createStyles((theme, _, getRef) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [`& .${getRef('title')}`]: {
      letterSpacing: '0.1em',
      textAlign: 'center',
    },
  },
  title: {
    ref: getRef('title'),
  },
}));

const PageSectionHeader = ({
  title,
  className,
  classNames,
  styles,
  ...props
}: PageSectionHeaderProps) => {
  const { classes, cx } = useStyles(undefined, {
    name: 'PageSectionHeader',
    classNames,
    styles,
  });
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
