import { createStyles } from '@mantine/core';
import { ReactSVG, Props as ReactSVGProps } from 'react-svg';

function getAttributes<K extends string = string>(el: Element, ...keys: K[]) {
  return keys.reduce((attributes, key) => {
    return { ...attributes, [key]: el.getAttribute(key) };
  }, {}) as Record<K, string | null>;
}

function setAttributes(el: Element, attributes: Record<string, string>) {
  Object.entries(attributes).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });
}

const useStyles = createStyles(() => ({
  root: {
    display: 'inline-block',
    color: 'inherit',
    '& > div': {
      display: 'inline-block',
    },
  },
  svg: {
    display: 'block',
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
    svg.setAttribute('class', cx(classes.svg, svgClassName));
    const children = svg.querySelectorAll('*');
    const colors = {
      fill: new Set<string>(),
      stroke: new Set<string>(),
    };

    children.forEach((el) => {
      const { fill, stroke } = getAttributes(el, 'fill', 'stroke');
      if (fill) colors.fill.add(fill);
      if (stroke) colors.stroke.add(stroke);
    });
    // If no children has either stroke or fill attribute
    if (!colors.stroke.size && !colors.fill.size) {
      setAttributes(
        svg,
        !svg.hasAttribute('stroke')
          ? { fill: 'currentColor', stroke: 'none' }
          : { fill: 'none', stroke: 'currentColor' }
      );
      return;
    }

    // If there are more than 2 fill or stroke colors, don't overwrite
    if (colors.fill.size >= 2 || colors.fill.size >= 2) {
      if (svg.hasAttribute('fill')) svg.setAttribute('fill', 'none');
      if (svg.hasAttribute('stroke')) svg.setAttribute('stroke', 'none');
      return;
    }
    // If the colors are stroke colors
    setAttributes(
      svg,
      colors.stroke.size > colors.fill.size
        ? { fill: 'none', stroke: 'currentColor' }
        : { fill: 'currentColor', stroke: 'none' }
    );

    children.forEach((el) => {
      el.removeAttribute('fill');
      el.removeAttribute('stroke');
    });
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
