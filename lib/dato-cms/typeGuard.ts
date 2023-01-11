import { FileField, IconFragment, SvgIconFragment } from './graphql/generated';

export const isFileField = (data: unknown): data is FileField => {
  return (
    data instanceof Object &&
    '__typename' in data &&
    data['__typename'] === 'FileField'
  );
};

export const isIconFragment = (data: unknown): data is IconFragment => {
  if (!isFileField(data)) return false;
  const { mimeType, url, width, height } = data;
  return (
    [mimeType, url].every((value) => typeof value === 'string') &&
    [width, height].every(
      (value) => value === null || typeof value === 'number'
    )
  );
};

export const isSvgIconFragment = (data: unknown): data is SvgIconFragment => {
  return isIconFragment(data) && data.mimeType === 'image/svg+xml';
};
