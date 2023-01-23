import { Box, createStyles, DefaultProps, Selectors } from '@mantine/core';

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
const Section = ({
  className,
  classNames,
  styles,
  unstyled,
  ...props
}: SectionProps) => {
  const { classes, cx } = useStyles(undefined, {
    name: 'Section',
    classNames,
    styles,
    unstyled,
  });
  return (
    <Box
      component="section"
      className={cx(classes.root, className)}
      {...props}
    />
  );
};

export default Section;
