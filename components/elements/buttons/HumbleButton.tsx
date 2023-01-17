import React from 'react';

import { Button, createStyles, Text, Box } from '@mantine/core';

import { createTransition } from '@lib/theme/utils';

type Props = {};
const useStyles = createStyles((theme, params, getRef) => ({
  humbleText: {
    fontWeight: 'normal',
    width: 'auto',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ref: getRef('humbleText'),
    transition: createTransition(['font-size', 'color']),
  },

  humbleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.colors.blue[2],
    opacity: 0.75,
    transition: createTransition(['opacity', 'background']),
    '&:hover': {
      opacity: 1,
      background: theme.colors.red[2],

      [`& .${getRef('humbleText')}`]: { fontSize: '16px', color: 'white' },
    },
  },
}));

function HumbleButton(props: Props) {
  const { classes } = useStyles(undefined, {
    name: ['humbleButton', 'humbleText'],
  });

  return (
    <Button className={classes.humbleButton}>
      <Box className={classes.humbleText}>FROM US</Box>
    </Button>
  );
}
export default HumbleButton;
