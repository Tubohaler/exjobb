import type { RecordLinkComponents } from '../types';
import Link from '@components/elements/links/Link';

const DefaultRecordLinks: RecordLinkComponents = {
  Page: ({ record, children, transformedMeta }) => {
    return (
      <Link
        {...transformedMeta}
        href={`/${record.urlSlug}`}
        title={record.name}
      >
        {children}
      </Link>
    );
  },
};

export default DefaultRecordLinks;
