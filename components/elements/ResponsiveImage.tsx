import { Image, ImagePropTypes } from 'react-datocms';
import { forwardRef } from 'react';

export type ResponsiveImageProps = ImagePropTypes & {
  placeholderOpacity?: number;
};

const ResponsiveImage = forwardRef<HTMLDivElement, ResponsiveImageProps>(
  ({ placeholderOpacity, placeholderStyle, ...props }, ref) => {
    return (
      <Image
        ref={ref}
        placeholderStyle={{
          opacity: placeholderOpacity,
          ...(placeholderStyle ?? {}),
        }}
        {...props}
      />
    );
  }
);

const defaultProps: Partial<Omit<ResponsiveImageProps, 'data'>> = {
  objectPosition: 'center',
  layout: 'responsive',
  objectFit: 'cover',
  placeholderOpacity: 0.6,
};

ResponsiveImage.defaultProps = defaultProps;

export default ResponsiveImage;
