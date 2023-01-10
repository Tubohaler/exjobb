import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { PageName } from '../types';
import { PageQuery } from '../graphql/generated';

type DevCacheData = {
  modified_at: number;
  pages: Partial<Record<PageName, PageQuery>>;
};

interface DevCache {
  get(name: PageName): Promise<PageQuery | null>;
  set(name: PageName, data: PageQuery): Promise<boolean>;
}

const isDevCacheData = (data: unknown): data is DevCacheData => {
  if (
    !(data instanceof Object) ||
    !('modified_at' in data) ||
    typeof data['modified_at'] !== 'number' ||
    !('pages' in data) ||
    !(data['pages'] instanceof Object)
  ) {
    return false;
  }
  const pages = data.pages as { [key: string]: unknown };
  return (['home', 'about', 'contact', 'career'] as PageName[]).every(
    (key) => !(key in pages) || pages[key] instanceof Object
  );
};

/**
 * @param maxAge Max-Age in seconds
 */
const createDevCache =
  process.env.NODE_ENV !== 'development'
    ? () => ({
        get: async () => null,
        set: async () => false,
      })
    : (maxAge = 3600): DevCache => {
        const cachePath = path.resolve(
          fileURLToPath(import.meta.url),
          `../page-cache.development.json`
        );
        const writeCache = async (pages: DevCacheData['pages']) => {
          try {
            const data: DevCacheData = { modified_at: Date.now(), pages };
            const json = JSON.stringify(data);
            await fs.promises.writeFile(cachePath, json, 'utf-8');
            return true;
          } catch (err) {
            return false;
          }
        };

        const readCache = async () => {
          if (!fs.existsSync(cachePath)) return null;
          try {
            const buffer = await fs.promises.readFile(cachePath, 'utf-8');
            const data = JSON.parse(buffer.toString());
            if (!isDevCacheData(data)) return null;
            return data;
          } catch (err) {
            return null;
          }
        };

        return {
          get: async (name) => {
            const cache = await readCache();
            if (!cache) return null;
            if (cache.modified_at < Date.now() - maxAge * 1000) {
              await writeCache({});
              return null;
            }
            return cache.pages[name] || null;
          },
          set: async (name, data) => {
            const cache = await readCache();
            return await writeCache(
              !cache ? { [name]: data } : { ...cache.pages, [name]: data }
            );
          },
        };
      };

export default createDevCache;
