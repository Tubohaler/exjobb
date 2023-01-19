import { AddressFragment } from '@lib/dato-cms';
import {
  Box,
  Title,
  Text,
  createStyles,
  Selectors,
  DefaultProps,
} from '@mantine/core';

export type AddressProps = DefaultProps<AddressStylesNames> &
  Omit<Parameters<typeof Box<'div'>>[0], 'children'> & {
    address: AddressFragment;
  };

export type AddressStylesNames = Selectors<typeof useStyles>;

const useStyles = createStyles(() => ({
  root: {},
  address: { fontStyle: 'normal' },
}));

const Address = ({
  address: { name, streetAddress, zipCode, city, country },
  className,
  classNames,
  styles,
  ...props
}: AddressProps) => {
  const { classes, cx } = useStyles(undefined, {
    name: 'Address',
    classNames,
    styles,
  });
  return (
    <Box className={cx(classes.root, className)} {...props}>
      <Box component="address" className={classes.address}>
        <Text>{name}</Text>
        <Text>{streetAddress}</Text>
        <Text>
          {zipCode} {city}
        </Text>
        <Text transform="uppercase">{country}</Text>
      </Box>
    </Box>
  );
};

export default Address;
