import {
  Image,
  StructuredText,
  StructuredTextPropTypes,
  StructuredTextGraphQlResponseRecord,
  renderNodeRule,
  renderMarkRule,
} from 'react-datocms';
import { isHeading, isStructuredText } from 'datocms-structured-text-utils';

import type {
  AddressFragment,
  ImageGalleryFragment,
  PeopleGalleryFragment,
  ProjectFragment,
  ProjectGalleryFragment,
  ResponsiveVideoFragment,
  SectionFragment,
} from '@lib/dato-cms';

import createStructuredTextProps from './createStructuredTextProps';

import { Title } from '@mantine/core';
import { Article } from '@components/elements/layout';

export interface BlockComponents {
  ResponsiveVideoRecord: (props: ResponsiveVideoFragment) => JSX.Element;
}

export interface InlineComponents {
  AddressRecord: (props: AddressFragment) => JSX.Element;
  ImageGalleryRecord: (props: ImageGalleryFragment) => JSX.Element;
  PeopleGalleryRecord: (props: PeopleGalleryFragment) => JSX.Element;
  ProjectGalleryRecord: (props: ProjectGalleryFragment) => JSX.Element;
}

export type PageSectionProps<
  WrapperProps = { children: React.ReactNode } & Record<string, unknown>
> = Omit<
  StructuredTextPropTypes<StructuredTextGraphQlResponseRecord>,
  'data'
> & {
  section: SectionFragment;
  title?: React.ReactNode | ((title: string) => JSX.Element);
  wrapper?: (props: WrapperProps) => JSX.Element;
  wrapperProps?: Omit<WrapperProps, 'children'>;
};

const defaultProps = createStructuredTextProps();

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
        {...{ ...defaultProps, ...props }}
      />
    </WrapperElement>
  );
};

export default PageSection;
