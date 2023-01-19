import { SectionFragment } from '@lib/dato-cms';
import { Center, DefaultProps, Selectors, Title } from '@mantine/core';
import { createStyles } from '@mantine/styles';

export type PageSectionHeaderProps =
  DefaultProps<PageSectionHeaderStylesNames> &
    Omit<Parameters<typeof Center<'div'>>[0], 'children'> & {
      title: string;
    };

export type PageSectionHeaderStylesNames = Selectors<typeof useStyles>;

const useStyles = createStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing.xl * 2,
  },
  title: {
    letterSpacing: '0.1em',
    textTransform: 'capitalize',
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
    <Center component="div" className={cx(classes.root, className)} {...props}>
      <Title
        order={2}
        className={classes.title}
        weight={400}
        size="h1"
        transform="uppercase"
      >
        {title}
      </Title>
    </Center>
  );
};

export default PageSectionHeader;
