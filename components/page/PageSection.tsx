import StructuredText, {
  StructuredTextProps,
} from '@components/structured-text/StructuredText';
import type { SectionFragment } from '@lib/dato-cms';
import { Article } from '@components/elements/layout';
import PageSectionHeader from './PageSectionHeader';

export type PageSectionProps<
  WrapperProps = { children: React.ReactNode } & Record<string, unknown>
> = Omit<StructuredTextProps, 'data'> & {
  section: SectionFragment;
  wrapper?: (props: WrapperProps) => JSX.Element;
  header?: (props: SectionFragment) => JSX.Element;
  wrapperProps?: Omit<WrapperProps, 'children'>;
};

const PageSection = ({
  section,
  wrapper: WrapperElement = Article,
  header: HeaderElement = PageSectionHeader,
  wrapperProps,
  ...props
}: PageSectionProps) => {
  return (
    <WrapperElement {...(wrapperProps || {})}>
      <HeaderElement {...section} />
      <StructuredText data={section.content} {...props} />
    </WrapperElement>
  );
};

export default PageSection;
