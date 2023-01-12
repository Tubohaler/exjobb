import {
  StructuredText,
  StructuredTextPropTypes,
  StructuredTextGraphQlResponseRecord,
} from 'react-datocms';
import { isStructuredText } from 'datocms-structured-text-utils';

import type {
  AddressFragment,
  ImageGalleryFragment,
  PeopleGalleryFragment,
  ProjectGalleryFragment,
  ResponsiveVideoFragment,
  SectionFragment,
} from '@lib/dato-cms';
import { Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useMemo } from 'react';
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
> = {
  section: SectionFragment;
  blockComponents?: Partial<BlockComponents>;
  inlineComponents?: Partial<InlineComponents>;
  title?: React.ReactNode | ((title: string) => JSX.Element);
  wrapper?: (props: WrapperProps) => JSX.Element;
  wrapperProps?: Omit<WrapperProps, 'children'>;
};

const defaultBlock: BlockComponents = {
  ResponsiveVideoRecord: ({ landscape, portrait }) => {
    const isPortrait = useMediaQuery('(orientation: portrait)', false);
    const { width, height, mimeType, video } = useMemo(
      () => (!isPortrait ? landscape : portrait),
      [isPortrait, landscape, portrait]
    );
    return (
      <video
        width={width || 'auto'}
        height={height || 'auto'}
        autoPlay
        muted
        playsInline
        loop
      >
        <source
          src={video.mp4High || video.mp4Med || video.mp4Low || ''}
          type={mimeType}
        />
      </video>
    );
  },
};

const defaultInline: InlineComponents = {
  AddressRecord: ({ id }) => {
    return <Text>Address {id}</Text>;
  },
  ImageGalleryRecord: ({ id, images }) => {
    return <Text>ImageGallery {id}</Text>;
  },
  PeopleGalleryRecord: ({ people }) => {
    return <Text>PeopleGallery</Text>;
  },
  ProjectGalleryRecord: ({ projects }) => {
    return <Text>ProjectGallery </Text>;
  },
};

const getStructuredTextProps = ({
  section,
  inlineComponents,
  blockComponents,
}: Pick<
  PageSectionProps,
  'section' | 'inlineComponents' | 'blockComponents'
>): StructuredTextPropTypes<StructuredTextGraphQlResponseRecord> => {
  function inferRecordType<T = StructuredTextGraphQlResponseRecord>(
    record: StructuredTextGraphQlResponseRecord
  ): T {
    return record as unknown as T;
  }

  const components = {
    inline: inlineComponents
      ? { ...defaultInline, ...inlineComponents }
      : defaultInline,
    block: blockComponents
      ? { ...blockComponents, ...defaultBlock }
      : defaultBlock,
  };
  return {
    data: isStructuredText(section.content) ? section.content : null,
    renderBlock: ({ record }) => {
      const typename = record.__typename as keyof BlockComponents | 'unknown';
      switch (typename) {
        case 'ResponsiveVideoRecord':
          return components.block.ResponsiveVideoRecord(
            inferRecordType<ResponsiveVideoFragment>(record)
          );

        default:
          // return null;
          return <Text>record.__typename: {record.__typename}</Text>;
      }
    },
    renderInlineRecord: ({ record }) => {
      const typename = record.__typename as keyof InlineComponents | 'unknown';
      switch (typename) {
        case 'AddressRecord':
          return components.inline.AddressRecord(
            inferRecordType<AddressFragment>(record)
          );
        case 'ImageGalleryRecord':
          return components.inline.ImageGalleryRecord(
            inferRecordType<ImageGalleryFragment>(record)
          );
        case 'PeopleGalleryRecord':
          return components.inline.PeopleGalleryRecord(
            inferRecordType<PeopleGalleryFragment>(record)
          );
        case 'ProjectGalleryRecord':
          return components.inline.ProjectGalleryRecord(
            inferRecordType<ProjectGalleryFragment>(record)
          );
        default:
          // return null;
          return <Text>record.__typename: {record.__typename}</Text>;
      }
    },
  };
};

const PageSection = ({
  section,
  inlineComponents,
  blockComponents,
  title,
  wrapper: Wrapper = Article,
  wrapperProps,
}: PageSectionProps) => {
  return (
    <Wrapper {...(wrapperProps || {})}>
      {!title ? (
        <Title order={3}>{section.title}</Title>
      ) : typeof title === 'function' ? (
        title(section.title)
      ) : (
        title
      )}
      <StructuredText
        {...getStructuredTextProps({
          section,
          inlineComponents,
          blockComponents,
        })}
      />
    </Wrapper>
  );
};

export default PageSection;
