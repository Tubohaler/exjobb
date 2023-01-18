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
    displayTitle?: boolean;
  };

export type AddressStylesNames = Selectors<typeof useStyles>;

const useStyles = createStyles(() => ({
  root: {},
  title: { fontStyle: 'italic' },
  address: { fontStyle: 'normal' },
}));

const Address = ({
  address: { title, name, streetAddress, zipCode, city, country },
  displayTitle = true,
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
      {displayTitle && (
        <Title order={4} size="h4" weight="normal" className={classes.title}>
          {title}
        </Title>
      )}
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
