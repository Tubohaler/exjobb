import Project from './Project';
import { Box, createStyles } from '@mantine/core';
import { ProjectGalleryFragment } from '@lib/dato-cms';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignContent: 'center',
    justifyItems: 'center',
    maxWidth: theme.breakpoints.xl,
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.fn.largerThan('md')]: { gridTemplateColumns: 'repeat(3, 1fr)' },
  },
}));

const ProjectGallery = ({ projects }: ProjectGalleryFragment) => {
  const { classes } = useStyles(undefined, { name: 'ProjectGallery' });

  return (
    <Box className={classes.root}>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </Box>
  );
};

export default ProjectGallery;
