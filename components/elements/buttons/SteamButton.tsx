import { Button, createStyles } from '@mantine/core';
import Link from 'next/link';
import { createTransition } from '@lib/theme/utils';

type Props = Omit<Parameters<typeof Button<typeof Link>>[0], 'children'>;

const useStyles = createStyles((theme, _, getRef) => ({
  icon: {
    display: 'block',
    fill: theme.white,
    height: '75%',
    width: 'auto',
    objectFit: 'contain',
    objectPosition: 'center',
    maxWidth: '100%',
    ref: getRef('icon'),
    transition: createTransition(['transform']),
    overflow: 'visible',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.black,
    opacity: 0.75,
    padding: 0,
    transition: createTransition(['opacity', 'background']),
    '&:hover': {
      opacity: 1,
      background: theme.colors.red[2],
      [`& .${getRef('icon')}`]: { transform: 'scale(1.1)' },
    },
  },
}));

function SteamButton(props: Props) {
  const { classes } = useStyles(undefined, { name: 'SteamButton' });

  return (
    <Button component={Link} className={classes.button} {...props}>
      <svg
        className={classes.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 99 35"
        fill="white"
        width="150"
        height="35"
      >
        <g id="Layer_1" data-name="Layer 1">
          <path
            className="cls-1"
            d="M17.51,4.2A13.93,13.93,0,0,0,3.67,17.1l7.44,3.1a4,4,0,0,1,2.22-.68h.22l3.31-4.84v-.07A5.24,5.24,0,1,1,22.1,19.9H22L17.26,23.3v.18a3.93,3.93,0,0,1-7.79.79L4.14,22A13.92,13.92,0,1,0,17.51,4.2"
          />
          <path
            className="cls-1"
            d="M12.37,25.48l-1.7-.71a2.94,2.94,0,0,0,5.38-.15,3,3,0,0,0,0-2.28,2.92,2.92,0,0,0-1.59-1.61,2.89,2.89,0,0,0-2.18,0l1.77.74a2.21,2.21,0,0,1,1.17,2.87,2.19,2.19,0,0,1-2.85,1.18"
          />
          <path
            className="cls-1"
            d="M19.48,14.6a2.63,2.63,0,1,1,2.63,2.65,2.64,2.64,0,0,1-2.63-2.65m6.11,0a3.49,3.49,0,1,0-3.49,3.52,3.51,3.51,0,0,0,3.49-3.52"
          />
          <path
            className="cls-1"
            d="M46,13.92l-.9,1.61a4.44,4.44,0,0,0-2.46-.79c-.94,0-1.52.39-1.52,1.1s1,1.05,2.57,1.61,2.6,1.28,2.6,2.81c0,2.08-1.63,3.26-4,3.26a7.13,7.13,0,0,1-3.57-.95l.66-1.77a6.28,6.28,0,0,0,2.8.73c1.23,0,1.82-.46,1.82-1.14s-.89-1-2.34-1.5c-1.64-.55-2.79-1.28-2.79-3,0-1.91,1.52-3,3.69-3a5.73,5.73,0,0,1,3.41,1"
          />
          <polygon
            className="cls-1"
            points="53.06 14.94 53.06 23.34 50.94 23.34 50.94 14.94 47.85 14.94 47.85 13.1 56.14 13.1 56.14 14.94 53.06 14.94"
          />
          <polygon
            className="cls-1"
            points="60.62 14.93 60.62 17.24 64.69 17.24 64.69 19.08 60.62 19.08 60.62 21.48 65.35 21.48 65.35 23.34 58.5 23.34 58.5 13.1 65.35 13.1 65.35 14.93 60.62 14.93"
          />
          <path
            className="cls-1"
            d="M72.06,15.54l-1.39,4.1h2.8Zm-2,5.81-.67,2H67.19L71,13.1h2.14l3.91,10.24h-2.3l-.69-2Z"
          />
          <polygon
            className="cls-1"
            points="87.97 17.06 85.19 23.04 83.99 23.04 81.25 17.11 81.25 23.34 79.22 23.34 79.22 13.1 81.25 13.1 84.66 20.49 87.95 13.1 90 13.1 90 23.34 87.97 23.34 87.97 17.06"
          />
          <path
            className="cls-1"
            d="M92.47,14.31h.25a.22.22,0,0,0,.25-.22c0-.13-.07-.22-.26-.22h-.24Zm.26-.65c.36,0,.49.19.49.4a.41.41,0,0,1-.26.39l.33.62H93l-.27-.55h-.28v.55h-.23V13.66Zm-1.19.73a1.17,1.17,0,1,0,1.17-1.2,1.14,1.14,0,0,0-1.17,1.2m2.57,0A1.41,1.41,0,1,1,92.71,13a1.37,1.37,0,0,1,1.4,1.43"
          />
        </g>
      </svg>
    </Button>
  );
}

export default SteamButton;
