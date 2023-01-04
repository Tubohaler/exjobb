// A good place to store random functions :)
export {};

export const getFaviconMimeType = (url: string) => {
  const ext = url.split('.').at(-1)?.toLowerCase();
  return `image/${
    ext === 'png' ? 'png' : ext === 'svg' ? 'svg+xml' : 'x-icon'
  }`;
};
