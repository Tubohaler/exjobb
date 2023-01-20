import React from 'react';

import { Image } from 'react-datocms';
import { Box, createStyles, Title } from '@mantine/core';

import StaffPortrait from './StaffPortrait';
import { PeopleGalleryFragment } from '@lib/dato-cms';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignContent: 'center',
    justifyItems: 'center',

    [theme.fn.largerThan('md')]: { gridTemplateColumns: 'repeat(3, 1fr)' },
  },
}));

function PeopleGallery({ people }: PeopleGalleryFragment) {
  const { classes } = useStyles(undefined, { name: 'PeopleGallery' });
  return (
    <Box className={classes.root}>
      {people.map((staff) => (
        <StaffPortrait key={staff.id} {...staff} />
      ))}
    </Box>
  );
}
export default PeopleGallery;
