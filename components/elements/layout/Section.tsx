import { Box, createStyles, DefaultProps, Selectors } from '@mantine/core';
import { forwardRef } from 'react';

export type SectionStylesNames = Selectors<typeof useStyles>;

export type SectionProps = DefaultProps<SectionStylesNames> &
  Parameters<typeof Box<'section'>>[0] & {
    children: React.ReactNode;
  };

const useStyles = createStyles((theme) => ({
  root: {},
}));

/**
 * Wraps content with a html section element
 */
const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, classNames, styles, unstyled, ...props }, ref) => {
    const { classes, cx } = useStyles(undefined, {
      name: 'Section',
      classNames,
      styles,
      unstyled,
    });
    return (
      <Box
        ref={ref}
        component="section"
        className={cx(classes.root, className)}
        {...props}
      />
    );
  }
);

export default Section;
