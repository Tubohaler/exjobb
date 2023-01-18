import { createStyles } from '@mantine/core';
import { ReactSVG, Props as ReactSVGProps } from 'react-svg';

const useStyles = createStyles(() => ({
  wrapper: {
    display: 'inline-block',
    fontSize: 'inherit',
    color: 'inherit',
    verticalAlign: 'baseline',
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

  // if (!isSvgIconFragment(icon)) {
  //   return (
  //     <ReactSVG
  //       src={icon}
  //       beforeInjection={beforeInjection}
  //       className={cx(classes.wrapper, className)}
  //       fallback={fallback}
  //     />
  //   );
  // }
  // if (typeof icon.inlineHTML === 'string' && isSvg(icon.inlineHTML)) {
  //   return (
  //     <div
  //       className={className}
  //       dangerouslySetInnerHTML={{
  //         __html: setSvgAttribute(
  //           icon.inlineHTML,
  //           'class',
  //           cx(classes.svg, svgClassName)
  //         ),
  //       }}
  //     />
  //   );
  // }
  return (
    <ReactSVG
      src={src}
      beforeInjection={beforeInjection}
      className={className}
      fallback={fallback}
    />
  );
};

export default SvgIcon;
