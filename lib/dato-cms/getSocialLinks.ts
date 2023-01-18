import { modifyInlineSvg } from '@lib/svg-utils';
import axios from 'axios';
import isSvg from 'is-svg';
import { SocialLinksDocument, StaticSocialLinksCollection } from './graphql';
import request from './request';
import { isSvgIconFragment } from './typeGuard';

const getSocialLinks = async () => {
  const data = await request(SocialLinksDocument);
  const socialLinks = data.socialLinksCollection as StaticSocialLinksCollection;

  await Promise.all(
    socialLinks.links.map(
      (record) =>
        new Promise<void>((resolve) => {
          if (!isSvgIconFragment(record.icon)) return;
          axios
            .get(record.icon.url, {
              headers: { Accept: 'image/svg+xml' },
            })
            .then((res) => {
              if (res.headers['content-type'] !== 'image/svg+xml') {
                return;
              }
              const { data } = res;
              if (typeof data !== 'string' || !isSvg(data)) return;
              record.icon = {
                ...record.icon,
                inlineHTML:
                  modifyInlineSvg(data, ['title'], {
                    fill: 'currentColor',
                    width: `${record.icon.width}`,
                    height: `${record.icon.height}`,
                  }) || data,
              };
            })
            .catch((err) => {
              console.error(err instanceof Error ? err.message : err);
            })
            .finally(resolve);
        })
    )
  );
  return socialLinks;
};

export default getSocialLinks;
