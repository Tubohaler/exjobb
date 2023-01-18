import { StaticPageFooter } from '@lib/dato-cms';
import { Box, createStyles } from '@mantine/core';
import StructuredText from '@components/structured-text/StructuredText';
import createStructuredTextProps from '@components/structured-text/createStructuredTextProps';
import Address from '@components/content/Address';
export type FooterProps = Omit<
  Parameters<typeof Box<'footer'>>[0],
  'children'
> & {
  data: StaticPageFooter;
};

const useStyles = createStyles((theme) => ({
  root: {
    height: 110,
    padding: theme.spacing.md,
    backgroundColor: theme.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.fn.smallerThan('sm')]: {
      height: 250,
    },
  },
  section: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '&:first-of-type': {
      alignItems: 'flex-start',
    },
    '&:last-of-type': {
      alignItems: 'flex-end',
    },
  },
}));

const structuredTextProps = createStructuredTextProps({
  components: {
    Address: (address) => {
      return (
        <Address
          address={address}
          displayTitle={false}
          sx={() => ({ textAlign: 'center' })}
        />
      );
    },
  },
});

const Footer = ({
  data,
  className,
  classNames,
  styles,
  ...props
}: FooterProps) => {
  const { classes, cx } = useStyles(undefined, {
    name: 'Footer',
    classNames,
    styles,
  });
  return (
    <Box component="footer" className={cx(classes.root, className)} {...props}>
      {data.sections.map((section) => {
        return (
          <Box key={section.id} className={classes.section}>
            <StructuredText data={section.content} {...structuredTextProps} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Footer;
