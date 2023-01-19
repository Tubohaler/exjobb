import { Button, createStyles, Box } from '@mantine/core';
import Link from 'next/link';

import { createTransition } from '@lib/theme/utils';
import { ProjectFragment } from '@lib/dato-cms';

type Props = Omit<Parameters<typeof Button<typeof Link>>[0], 'children'> & {
  text?: ProjectFragment['humbleButtonText'];
};

const useStyles = createStyles((theme, _, getRef) => ({
  root: {
    background: theme.colors.blue[2],
    opacity: 0.75,
    transition: createTransition(['opacity', 'background']),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      opacity: 1,
      background: theme.colors.red[2],
      [`& .${getRef('text')}`]: {
        transform: 'scale(1.1)',
        color: theme.white,
      },
    },
  },
  text: {
    fontWeight: 'normal',
    color: theme.black,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    ref: getRef('text'),
    transition: createTransition(['transform', 'color']),
  },
}));

function HumbleButton({ text, ...props }: Props) {
  const { classes } = useStyles(undefined, {
    name: ['HumbleButton'],
  });

  return (
    <Button
      component={Link}
      className={classes.root}
      classNames={{ label: classes.text }}
      {...props}
    >
      {text}
    </Button>
  );
}

HumbleButton.defaultProps = {
  text: 'From us',
};
export default HumbleButton;
