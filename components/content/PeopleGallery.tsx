import React from 'react';

import { Image } from 'react-datocms';
import { Box, createStyles, Title } from '@mantine/core';

import StaffPortrait from './StaffPortrait';
import { PeopleGalleryFragment } from '@lib/dato-cms';

const useStyles = createStyles((theme) => ({
  image: {
    width: '100%',
  },
}));

function PeopleGallery({ people }: PeopleGalleryFragment) {
  const { classes } = useStyles(undefined, { name: 'PeopleGallery' });
  return (
    <Box>
      {people.map((staff) => (
        <StaffPortrait key={staff.id} {...staff} />
      ))}
    </Box>
  );
}

export default PeopleGallery;
