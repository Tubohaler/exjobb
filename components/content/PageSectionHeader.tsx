import { SectionFragment } from '@lib/dato-cms';
import { Center, Title } from '@mantine/core';
import { createStyles } from '@mantine/styles';

const useStyles = createStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing.xl * 2,
  },
  title: {
    letterSpacing: '0.1em',
    textTransform: 'capitalize',
  },
}));

const PageSectionHeader = ({ title }: SectionFragment) => {
  const { classes } = useStyles(undefined, { name: 'PageSectionHeader' });
  return !title ? (
    <></>
  ) : (
    <Center className={classes.root}>
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
