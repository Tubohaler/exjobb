import React from 'react';
import { Image } from 'react-datocms';

import { ProjectFragment } from '@lib/dato-cms';

import { Grid } from '@mantine/core';

const Project = ({ name, featuredImage }: ProjectFragment) => {
  return (
    <>
      {/* <h2>{name}</h2> */}
      <Image data={featuredImage.responsiveImage} />
    </>
  );
};

export default Project;
