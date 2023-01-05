import { PeopleDocument, PeopleQuery } from './graphql/generated';
import request from './request';

export type People = PeopleQuery['allPeopleModels'];

export default async function getPeople(): Promise<People> {
  const result = await request(PeopleDocument);
  return result.allPeopleModels;
}
