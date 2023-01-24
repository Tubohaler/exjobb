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
    const children = svg.querySelectorAll('*');
    if (children.length <= 1) {
      children[0].removeAttribute('fill');
      return;
    }
    const colors = new Set<string>();
    children.forEach((element) => {
      const fill = element.getAttribute('fill');
      if (fill) colors.add(fill);
    });
    if (colors.size >= 2 || !colors.size) return;
    children.forEach((element) => element.removeAttribute('fill'));
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
