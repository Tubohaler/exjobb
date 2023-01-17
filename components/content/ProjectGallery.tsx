import React from 'react';

import Project from './Project';

import { Container, Flex, Grid, Text } from '@mantine/core';

import { ProjectFragment, ProjectGalleryFragment } from '@lib/dato-cms';

const ProjectGallery = ({ projects }: ProjectGalleryFragment) => {
  return (
    <>
      <Text fz="xl" fw="xl" p={40}>
        Projects
      </Text>
      <Flex>
        <Grid
          /*  align={"center"} */ mx={{ xs: 10, sm: 50, md: 50, xl: 200 }}
          /* w={"100vw"} */ justify={'center'}
          gutter={0}
          columns={11}
        >
          {projects.map((project, i) => (
            <Grid.Col
              maw={200}
              xs={6}
              sm={5}
              md={5}
              lg={3}
              /* span={3} */ key={i}
            >
              <Project key={project.id} {...project} />
              {i === projects.length - 1 && <LastRow />}
            </Grid.Col>
          ))}
        </Grid>
      </Flex>
    </>
  );
};
const LastRow = () => {
  return (
    <div style={{ justifyContent: 'flex-start' }}>
      {/* Your last row content */}
    </div>
  );
};

export default ProjectGallery;
