import { createStyles } from '@mantine/core';
import { ReactSVG, Props as ReactSVGProps } from 'react-svg';

const useStyles = createStyles(() => ({
  root: {
    display: 'inline-block',
    color: 'inherit',
    '& > div': {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  svg: {
    height: '1em',
    maxHeight: '100%',
    width: 'auto',
    pointerEvents: 'none',
  },
}));

export type SvgIconProps = {
  src: string;
  /** Wrapper className */
  className?: string;
  /** SVG Element className */
  svgClassName?: string;
  /**
   * Fallback to use if an injection error occurs.
   * Can be a string, class component, or function component
   * Only executed if icon is an url or does not contain valid inline SVG
   */
  fallback?: ReactSVGProps['fallback'];
};

const SvgIcon = ({ src, svgClassName, className, fallback }: SvgIconProps) => {
  const { classes, cx } = useStyles(undefined, { name: 'SvgIcon' });

  const beforeInjection: ReactSVGProps['beforeInjection'] = (svg) => {
    svg.classList.add(
      ...cx(classes.svg, svgClassName)
        .split(' ')
        .filter((v) => !!v)
    );
    svg.setAttribute('fill', 'currentColor');
    console.log(svg.getAttribute('class'));
  };
  return (
    <ReactSVG
      src={src}
      beforeInjection={beforeInjection}
      className={cx(classes.root, className)}
      fallback={fallback}
    />
  );
};

export default SvgIcon;
