import React from 'react';

import Project from './Project';

import { Grid } from '@mantine/core';

import { ProjectFragment, ProjectGalleryFragment } from '@lib/dato-cms';

const sampleProjects: ProjectFragment[] = [
  {
    __typename: 'ProjectRecord',
    id: '90591230',
    name: 'Book of Travels',
    pageUrl:
      'https://mightanddelight.com/bookoftravels?utm_source=mightanddelight_com&utm_medium=projects-page',
    steamUrl: 'https://store.steampowered.com/app/1152340/Book_of_Travels/',
    humbleUrl: '',
    humbleButtonText: 'From us',
    featuredImage: {
      __typename: 'ImageFileField',
      id: '32551773',
      responsiveImage: {
        __typename: 'ResponsiveImage',
        src: 'https://www.datocms-assets.com/91892/1673281258-book-of-travels.jpg?fm=webp',
        alt: null,
        title: null,
        width: 1024,
        height: 1024,
        srcSet:
          'https://www.datocms-assets.com/91892/1673281258-book-of-travels.jpg?dpr=0.25&fm=webp 256w,https://www.datocms-assets.com/91892/1673281258-book-of-travels.jpg?dpr=0.5&fm=webp 512w,https://www.datocms-assets.com/91892/1673281258-book-of-travels.jpg?dpr=0.75&fm=webp 768w,https://www.datocms-assets.com/91892/1673281258-book-of-travels.jpg?fm=webp 1024w',
        sizes: '(max-width: 512px) 100vw, 512px',
        bgColor: '#d4c471',
        aspectRatio: 1,
      },
    },
  },
];

const ProjectGallery = ({ projects }: ProjectGalleryFragment) => {
  return (
    <Grid>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </Grid>
  );
};

export default ProjectGallery;
