import request from './request';
import { PageLinksDocument } from './graphql';

const getPageLinks = async () => {
  const data = await request(PageLinksDocument);
  return data.pages;
};

export default getPageLinks;
