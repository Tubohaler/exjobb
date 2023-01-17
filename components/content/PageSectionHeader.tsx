import { SectionFragment } from '@lib/dato-cms';
import { Center, Title } from '@mantine/core';
import { createStyles } from '@mantine/styles';

const useStyles = createStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing.xl,
  },
  title: {
    fontSize: '2em',
    letterSpacing: '0.1em',
    fontWeight: 'normal',
    textTransform: 'capitalize',
  },
}));

const PageSectionHeader = ({ title }: SectionFragment) => {
  const { classes } = useStyles(undefined, { name: 'PageSectionHeader' });
  return !title ? (
    <></>
  ) : (
    <Center className={classes.root}>
      <Title order={2} className={classes.title}>
        {title}
      </Title>
    </Center>
  );
};

export default PageSectionHeader;
