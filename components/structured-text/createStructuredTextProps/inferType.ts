import { StructuredTextGraphQlResponseRecord } from 'react-datocms';

export default function inferType<T = StructuredTextGraphQlResponseRecord>(
  record: StructuredTextGraphQlResponseRecord
): T {
  return record as unknown as T;
}
