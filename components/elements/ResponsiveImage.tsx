import { Image, ImagePropTypes } from 'react-datocms';

export type ResponsiveImageProps = ImagePropTypes & {
  placeholderOpacity?: number;
};

const ResponsiveImage = ({
  placeholderOpacity,
  placeholderStyle,
  ...props
}: ResponsiveImageProps) => {
  return (
    <Image
      placeholderStyle={{
        opacity: placeholderOpacity,
        ...(placeholderStyle ?? {}),
      }}
      {...props}
    />
  );
};

const defaultProps: Partial<Omit<ResponsiveImageProps, 'data'>> = {
  objectPosition: 'center',
  layout: 'responsive',
  objectFit: 'cover',
  placeholderOpacity: 0.5,
};

ResponsiveImage.defaultProps = defaultProps;

export default ResponsiveImage;
