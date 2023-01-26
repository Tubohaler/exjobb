import { Button, createStyles } from '@mantine/core';
import Link from 'next/link';

import { createTransition } from '@lib/theme/utils';
import { ProjectFragment } from '@lib/dato-cms';
import { ExtendedTheme } from 'context/ExtendedTheme.context';
import useExtendedTheme from '@hooks/useExtendedTheme';

type Props = Omit<Parameters<typeof Button<typeof Link>>[0], 'children'> & {
  text?: ProjectFragment['humbleButtonText'];
};

const useStyles = createStyles(
  (theme, { extended }: { extended: ExtendedTheme }, getRef) => ({
    root: {
      background: theme.fn.primaryColor(),
      opacity: 0.75,
      transition: createTransition(['opacity', 'background']),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        opacity: 1,
        background: extended.fn.activeColor(),
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
      [theme.fn.smallerThan('xs')]: {
        fontSize: '0.8em',
      },
    },
  })
);

function HumbleButton({ text, ...props }: Props) {
  const extended = useExtendedTheme();
  const { classes } = useStyles(
    { extended },
    {
      name: ['HumbleButton'],
    }
  );

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
