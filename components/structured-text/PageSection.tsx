import { isStructuredText } from 'datocms-structured-text-utils';
import StructuredText, { StructuredTextProps } from './StructuredText';

import type { SectionFragment } from '@lib/dato-cms';

import { Title } from '@mantine/core';
import { Article } from '@components/elements/layout';

export type PageSectionProps<
  WrapperProps = { children: React.ReactNode } & Record<string, unknown>
> = Omit<StructuredTextProps, 'data'> & {
  section: SectionFragment;
  title?: React.ReactNode | ((title: string) => JSX.Element);
  wrapper?: (props: WrapperProps) => JSX.Element;
  wrapperProps?: Omit<WrapperProps, 'children'>;
};

const PageSection = ({
  section,
  title,
  wrapper: WrapperElement = Article,
  wrapperProps,
  ...props
}: PageSectionProps) => {
  return (
    <WrapperElement {...(wrapperProps || {})}>
      {!section.title ? null : !title ? (
        <Title order={3}>{section.title}</Title>
      ) : typeof title === 'function' ? (
        title(section.title)
      ) : (
        title
      )}
      <StructuredText
        data={isStructuredText(section.content) ? section.content : null}
        {...props}
      />
    </WrapperElement>
  );
};

export default PageSection;
