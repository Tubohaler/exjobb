import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BooleanType: boolean;
  CustomData: Record<string, unknown>;
  DateTime: string;
  FloatType: number;
  IntType: number;
  ItemId: string;
  JsonField: unknown;
  MetaTagAttributes: Record<string, string>;
  UploadId: string;
}

export interface AddressModelFilter {
  OR: InputMaybe<Array<InputMaybe<AddressModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  city: InputMaybe<StringFilter>;
  country: InputMaybe<StringFilter>;
  id: InputMaybe<ItemIdFilter>;
  name: InputMaybe<StringFilter>;
  streetAddress: InputMaybe<StringFilter>;
  title: InputMaybe<StringFilter>;
  zipCode: InputMaybe<StringFilter>;
}

export enum AddressModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StreetAddressAsc = 'streetAddress_ASC',
  StreetAddressDesc = 'streetAddress_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ZipCodeAsc = 'zipCode_ASC',
  ZipCodeDesc = 'zipCode_DESC',
}

/** Record of type Address (address) */
export interface AddressRecord extends RecordInterface {
  __typename: 'AddressRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ItemId'];
  name: Scalars['String'];
  streetAddress: Scalars['String'];
  title: Scalars['String'];
  zipCode: Scalars['String'];
}

/** Record of type Address (address) */
export interface AddressRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

/** Specifies how to filter Boolean fields */
export interface BooleanFilter {
  /** Search for records with an exact match */
  eq: InputMaybe<Scalars['BooleanType']>;
}

export interface CollectionMetadata {
  __typename: 'CollectionMetadata';
  count: Scalars['IntType'];
}

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow',
}

export interface ColorField {
  __typename: 'ColorField';
  alpha: Scalars['IntType'];
  blue: Scalars['IntType'];
  green: Scalars['IntType'];
  hex: Scalars['String'];
  red: Scalars['IntType'];
}

export interface CoverVideoModelFilter {
  OR: InputMaybe<Array<InputMaybe<CoverVideoModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  id: InputMaybe<ItemIdFilter>;
  landscape: InputMaybe<FileFilter>;
  overlayText: InputMaybe<StringFilter>;
  portrait: InputMaybe<FileFilter>;
  presentationTitle: InputMaybe<StringFilter>;
}

export enum CoverVideoModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OverlayTextAsc = 'overlayText_ASC',
  OverlayTextDesc = 'overlayText_DESC',
  PresentationTitleAsc = 'presentationTitle_ASC',
  PresentationTitleDesc = 'presentationTitle_DESC',
}

/** Record of type Cover Video (cover_video) */
export interface CoverVideoRecord extends RecordInterface {
  __typename: 'CoverVideoRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  landscape: VideoFileField;
  overlayText: Maybe<Scalars['String']>;
  portrait: VideoFileField;
  presentationTitle: Maybe<Scalars['String']>;
}

/** Record of type Cover Video (cover_video) */
export interface CoverVideoRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

/** Specifies how to filter by creation datetime */
export interface CreatedAtFilter {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq: InputMaybe<Scalars['DateTime']>;
}

/** Record of type Current Vacancies (current_vacancies_model) */
export interface CurrentVacanciesModelRecord extends RecordInterface {
  __typename: 'CurrentVacanciesModelRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  jobs: Array<JobRecord>;
  presentationTitle: Maybe<Scalars['String']>;
}

/** Record of type Current Vacancies (current_vacancies_model) */
export interface CurrentVacanciesModelRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication',
}

export interface FileField extends FileFieldInterface {
  __typename: 'FileField';
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb: Maybe<Scalars['String']>;
  blurhash: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint: Maybe<FocalPoint>;
  format: Scalars['String'];
  height: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes: Maybe<Scalars['String']>;
  responsiveImage: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video: Maybe<UploadVideoField>;
  width: Maybe<Scalars['IntType']>;
}

export interface FileFieldAltArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface FileFieldBlurUpThumbArgs {
  imgixParams: InputMaybe<ImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
}

export interface FileFieldCustomDataArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface FileFieldFocalPointArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface FileFieldResponsiveImageArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  imgixParams: InputMaybe<ImgixParams>;
  locale: InputMaybe<SiteLocale>;
  sizes: InputMaybe<Scalars['String']>;
}

export interface FileFieldTitleArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface FileFieldUrlArgs {
  imgixParams: InputMaybe<ImgixParams>;
}

export interface FileFieldInterface {
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb: Maybe<Scalars['String']>;
  blurhash: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint: Maybe<FocalPoint>;
  format: Scalars['String'];
  height: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes: Maybe<Scalars['String']>;
  responsiveImage: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video: Maybe<UploadVideoField>;
  width: Maybe<Scalars['IntType']>;
}

export interface FileFieldInterfaceAltArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface FileFieldInterfaceBlurUpThumbArgs {
  imgixParams: InputMaybe<ImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
}

export interface FileFieldInterfaceCustomDataArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface FileFieldInterfaceFocalPointArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface FileFieldInterfaceResponsiveImageArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  imgixParams: InputMaybe<ImgixParams>;
  locale: InputMaybe<SiteLocale>;
  sizes: InputMaybe<Scalars['String']>;
}

export interface FileFieldInterfaceTitleArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface FileFieldInterfaceUrlArgs {
  imgixParams: InputMaybe<ImgixParams>;
}

/** Specifies how to filter Single-file/image fields */
export interface FileFilter {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq: InputMaybe<Scalars['UploadId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that have one of the specified uploads */
  in: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq: InputMaybe<Scalars['UploadId']>;
  /** Filter records that do not have one of the specified uploads */
  notIn: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
}

/** Linking fields */
export enum FooterModelFieldsReferencingPageModel {
  FooterSections = 'footer_sections',
  FooterSectionsFooterSectionContent = 'footer_sections__footerSection_content',
}

export interface FooterModelFilter {
  OR: InputMaybe<Array<InputMaybe<FooterModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  id: InputMaybe<ItemIdFilter>;
  presentationTitle: InputMaybe<StringFilter>;
  title: InputMaybe<StringFilter>;
}

export enum FooterModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PresentationTitleAsc = 'presentationTitle_ASC',
  PresentationTitleDesc = 'presentationTitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Footer (footer) */
export interface FooterRecord extends RecordInterface {
  __typename: 'FooterRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  presentationTitle: Maybe<Scalars['String']>;
  sections: Array<FooterSectionRecord>;
  title: Scalars['String'];
}

/** Record of type Footer (footer) */
export interface FooterRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

export interface FooterSectionModelContentField {
  __typename: 'FooterSectionModelContentField';
  blocks: Array<Scalars['String']>;
  links: Array<FooterSectionModelContentLinksField>;
  value: Scalars['JsonField'];
}

export type FooterSectionModelContentLinksField =
  | AddressRecord
  | PageRecord
  | SocialLinksCollectionRecord;

/** Block of type Footer Section (footer_section) */
export interface FooterSectionRecord extends RecordInterface {
  __typename: 'FooterSectionRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content: FooterSectionModelContentField;
  id: Scalars['ItemId'];
}

/** Block of type Footer Section (footer_section) */
export interface FooterSectionRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

/** Specifies how to filter Multiple files/images field */
export interface GalleryFilter {
  /** Filter records that have all of the specified uploads. The specified values must be Upload IDs */
  allIn: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Filter records that have one of the specified uploads. The specified values must be Upload IDs */
  anyIn: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Search for records with an exact match. The specified values must be Upload IDs */
  eq: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that do not have any of the specified uploads. The specified values must be Upload IDs */
  notIn: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
}

export interface GlobalSeoField {
  __typename: 'GlobalSeoField';
  facebookPageUrl: Maybe<Scalars['String']>;
  fallbackSeo: Maybe<SeoField>;
  siteName: Maybe<Scalars['String']>;
  titleSuffix: Maybe<Scalars['String']>;
  twitterAccount: Maybe<Scalars['String']>;
}

/** Linking fields */
export enum HeaderModelFieldsReferencingPageModel {
  HeaderNavigationLinks = 'header_navigationLinks',
}

export interface HeaderModelFilter {
  OR: InputMaybe<Array<InputMaybe<HeaderModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  id: InputMaybe<ItemIdFilter>;
  logo: InputMaybe<FileFilter>;
  navigationLinks: InputMaybe<LinksFilter>;
  presentationTitle: InputMaybe<StringFilter>;
  socialLinks: InputMaybe<LinkFilter>;
  title: InputMaybe<StringFilter>;
}

export enum HeaderModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PresentationTitleAsc = 'presentationTitle_ASC',
  PresentationTitleDesc = 'presentationTitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Header (header) */
export interface HeaderRecord extends RecordInterface {
  __typename: 'HeaderRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  logo: FileField;
  navigationLinks: Array<PageRecord>;
  presentationTitle: Maybe<Scalars['String']>;
  socialLinks: SocialLinksCollectionRecord;
  title: Scalars['String'];
}

/** Record of type Header (header) */
export interface HeaderRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

export interface ImageFileField extends FileFieldInterface {
  __typename: 'ImageFileField';
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb: Maybe<Scalars['String']>;
  blurhash: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint: FocalPoint;
  format: Scalars['String'];
  height: Scalars['IntType'];
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes: Maybe<Scalars['String']>;
  responsiveImage: ResponsiveImage;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video: Maybe<UploadVideoField>;
  width: Scalars['IntType'];
}

export interface ImageFileFieldAltArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface ImageFileFieldBlurUpThumbArgs {
  imgixParams: InputMaybe<ImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
}

export interface ImageFileFieldCustomDataArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface ImageFileFieldFocalPointArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface ImageFileFieldResponsiveImageArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  imgixParams: InputMaybe<ImgixParams>;
  locale: InputMaybe<SiteLocale>;
  sizes: InputMaybe<Scalars['String']>;
}

export interface ImageFileFieldTitleArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface ImageFileFieldUrlArgs {
  imgixParams: InputMaybe<ImgixParams>;
}

export interface ImageGalleryModelFilter {
  OR: InputMaybe<Array<InputMaybe<ImageGalleryModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  id: InputMaybe<ItemIdFilter>;
  images: InputMaybe<GalleryFilter>;
  presentationTitle: InputMaybe<StringFilter>;
  title: InputMaybe<StringFilter>;
}

export enum ImageGalleryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PresentationTitleAsc = 'presentationTitle_ASC',
  PresentationTitleDesc = 'presentationTitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Image Gallery (image_gallery) */
export interface ImageGalleryRecord extends RecordInterface {
  __typename: 'ImageGalleryRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  images: Array<ImageFileField>;
  presentationTitle: Maybe<Scalars['String']>;
  title: Scalars['String'];
}

/** Record of type Image Gallery (image_gallery) */
export interface ImageGalleryRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

export interface ImgixParams {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar: InputMaybe<Scalars['String']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg: InputMaybe<Scalars['String']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend: InputMaybe<Scalars['String']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor: InputMaybe<Scalars['String']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY: InputMaybe<Scalars['IntType']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur: InputMaybe<Scalars['IntType']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border: InputMaybe<Scalars['String']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom: InputMaybe<Scalars['IntType']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft: InputMaybe<Scalars['IntType']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius: InputMaybe<Scalars['String']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner: InputMaybe<Scalars['String']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight: InputMaybe<Scalars['IntType']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop: InputMaybe<Scalars['IntType']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri: InputMaybe<Scalars['IntType']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub: InputMaybe<Scalars['IntType']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant: InputMaybe<Scalars['IntType']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors: InputMaybe<Scalars['IntType']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius: InputMaybe<Scalars['String']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl: InputMaybe<Scalars['String']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi: InputMaybe<Scalars['IntType']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr: InputMaybe<Scalars['FloatType']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone: InputMaybe<Scalars['String']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha: InputMaybe<Scalars['IntType']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp: InputMaybe<Scalars['IntType']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires: InputMaybe<Scalars['IntType']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex: InputMaybe<Scalars['IntType']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad: InputMaybe<Scalars['FloatType']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces: InputMaybe<Scalars['IntType']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor: InputMaybe<Scalars['String']>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug: InputMaybe<Scalars['BooleanType']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ: InputMaybe<Scalars['FloatType']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam: InputMaybe<Scalars['IntType']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors: InputMaybe<Scalars['String']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize: InputMaybe<Scalars['IntType']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h: InputMaybe<Scalars['FloatType']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high: InputMaybe<Scalars['IntType']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn: InputMaybe<Scalars['IntType']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue: InputMaybe<Scalars['IntType']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert: InputMaybe<Scalars['BooleanType']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc: InputMaybe<ImgixParamsIptc>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless: InputMaybe<Scalars['BooleanType']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark: InputMaybe<Scalars['String']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase: InputMaybe<Scalars['String']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask: InputMaybe<Scalars['String']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg: InputMaybe<Scalars['String']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH: InputMaybe<Scalars['IntType']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW: InputMaybe<Scalars['IntType']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome: InputMaybe<Scalars['String']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr: InputMaybe<Scalars['IntType']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs: InputMaybe<Scalars['IntType']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient: InputMaybe<Scalars['IntType']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop: InputMaybe<Scalars['IntType']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page: InputMaybe<Scalars['IntType']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation: InputMaybe<Scalars['BooleanType']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix: InputMaybe<Scalars['String']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px: InputMaybe<Scalars['IntType']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q: InputMaybe<Scalars['IntType']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect: InputMaybe<Scalars['String']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot: InputMaybe<Scalars['FloatType']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat: InputMaybe<Scalars['IntType']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia: InputMaybe<Scalars['IntType']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad: InputMaybe<Scalars['FloatType']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp: InputMaybe<Scalars['FloatType']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor: InputMaybe<Scalars['String']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad: InputMaybe<Scalars['IntType']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol: InputMaybe<Scalars['FloatType']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt: InputMaybe<Scalars['String']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor: InputMaybe<Scalars['String']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont: InputMaybe<Scalars['String']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead: InputMaybe<Scalars['IntType']>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor: InputMaybe<Scalars['String']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad: InputMaybe<Scalars['IntType']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad: InputMaybe<Scalars['FloatType']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize: InputMaybe<Scalars['IntType']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack: InputMaybe<Scalars['IntType']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth: InputMaybe<Scalars['IntType']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX: InputMaybe<Scalars['IntType']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY: InputMaybe<Scalars['IntType']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm: InputMaybe<Scalars['IntType']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad: InputMaybe<Scalars['FloatType']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib: InputMaybe<Scalars['IntType']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w: InputMaybe<Scalars['FloatType']>;
}

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye',
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight',
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit',
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width',
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb',
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid',
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale',
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v',
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp',
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block',
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsMarkTile {
  Grid = 'grid',
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json',
}

export enum ImgixParamsTransparency {
  Grid = 'grid',
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color',
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start',
}

export enum ImgixParamsTxtFit {
  Max = 'max',
}

/** Specifies how to filter by usage */
export interface InUseFilter {
  /** Search uploads that are currently used by some record or not */
  eq: InputMaybe<Scalars['BooleanType']>;
}

/** Specifies how to filter by linking fields */
export interface InverseRelationshipFieldFilterBetweenFooterAndPage {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn: InputMaybe<Array<FooterModelFieldsReferencingPageModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn: InputMaybe<Array<FooterModelFieldsReferencingPageModel>>;
}

/** Specifies how to filter by linking fields */
export interface InverseRelationshipFieldFilterBetweenHeaderAndPage {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn: InputMaybe<Array<HeaderModelFieldsReferencingPageModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn: InputMaybe<Array<HeaderModelFieldsReferencingPageModel>>;
}

/** Specifies how to filter by linking fields */
export interface InverseRelationshipFieldFilterBetweenPageAndPage {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn: InputMaybe<Array<PageModelFieldsReferencingPageModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn: InputMaybe<Array<PageModelFieldsReferencingPageModel>>;
}

/** Specifies how to filter linking records */
export interface InverseRelationshipFilterBetweenFooterAndPage {
  /** Specifies how to filter by linking fields */
  fields: InputMaybe<InverseRelationshipFieldFilterBetweenFooterAndPage>;
  /** Specifies how to filter by linking locales */
  locales: InputMaybe<LinkingLocalesFilter>;
}

/** Specifies how to filter linking records */
export interface InverseRelationshipFilterBetweenHeaderAndPage {
  /** Specifies how to filter by linking fields */
  fields: InputMaybe<InverseRelationshipFieldFilterBetweenHeaderAndPage>;
  /** Specifies how to filter by linking locales */
  locales: InputMaybe<LinkingLocalesFilter>;
}

/** Specifies how to filter linking records */
export interface InverseRelationshipFilterBetweenPageAndPage {
  /** Specifies how to filter by linking fields */
  fields: InputMaybe<InverseRelationshipFieldFilterBetweenPageAndPage>;
  /** Specifies how to filter by linking locales */
  locales: InputMaybe<LinkingLocalesFilter>;
}

/** Specifies how to filter by ID */
export interface ItemIdFilter {
  /** Search the record with the specified ID */
  eq: InputMaybe<Scalars['ItemId']>;
  /** Search records with the specified IDs */
  in: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude the record with the specified ID */
  neq: InputMaybe<Scalars['ItemId']>;
  /** Search records that do not have the specified IDs */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
}

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated',
}

export interface JobModelFilter {
  OR: InputMaybe<Array<InputMaybe<JobModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  id: InputMaybe<ItemIdFilter>;
  jobTitle: InputMaybe<StringFilter>;
  maxLevel: InputMaybe<StringFilter>;
  minLevel: InputMaybe<StringFilter>;
}

export enum JobModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  MaxLevelAsc = 'maxLevel_ASC',
  MaxLevelDesc = 'maxLevel_DESC',
  MinLevelAsc = 'minLevel_ASC',
  MinLevelDesc = 'minLevel_DESC',
}

/** Record of type Job (job) */
export interface JobRecord extends RecordInterface {
  __typename: 'JobRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  jobTitle: Scalars['String'];
  maxLevel: Scalars['String'];
  minLevel: Scalars['String'];
}

/** Record of type Job (job) */
export interface JobRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

/** Specifies how to filter JSON fields */
export interface JsonFilter {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
}

/** Specifies how to filter Single-link fields */
export interface LinkFilter {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq: InputMaybe<Scalars['ItemId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records linked to one of the specified records */
  in: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq: InputMaybe<Scalars['ItemId']>;
  /** Filter records not linked to one of the specified records */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
}

/** Linking locales */
export enum LinkingLocale {
  NonLocalized = '_nonLocalized',
  En = 'en',
}

/** Specifies how to filter by linking locales */
export interface LinkingLocalesFilter {
  /** Filter linking records that link to current record in at least one of the specified locales */
  anyIn: InputMaybe<Array<LinkingLocale>>;
  /** Filter linking records that do not link to current record in any of the specified locales */
  notIn: InputMaybe<Array<LinkingLocale>>;
}

/** Specifies how to filter Multiple-links fields */
export interface LinksFilter {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
}

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
}

/** Specifies how to filter by image orientation */
export interface OrientationFilter {
  /** Search uploads with the specified orientation */
  eq: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq: InputMaybe<UploadOrientation>;
}

/** Linking fields */
export enum PageModelFieldsReferencingPageModel {
  PageSections = 'page_sections',
  PageSectionsPageSectionContent = 'page_sections__pageSection_content',
}

export interface PageModelFilter {
  OR: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  footer: InputMaybe<LinkFilter>;
  header: InputMaybe<LinkFilter>;
  id: InputMaybe<ItemIdFilter>;
  metaTags: InputMaybe<SeoFilter>;
  name: InputMaybe<StringFilter>;
  pageTitle: InputMaybe<StringFilter>;
  parent: InputMaybe<ParentFilter>;
  position: InputMaybe<PositionFilter>;
  sectionDivider: InputMaybe<FileFilter>;
  urlSlug: InputMaybe<SlugFilter>;
}

export enum PageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
}

export type PageModelSectionsField = PageSectionHtmlRecord | PageSectionRecord;

/** Record of type Page (page) */
export interface PageRecord extends RecordInterface {
  __typename: 'PageRecord';
  _allReferencingFooters: Array<FooterRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingFootersMeta: CollectionMetadata;
  _allReferencingHeaders: Array<HeaderRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHeadersMeta: CollectionMetadata;
  _allReferencingPages: Array<PageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPagesMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  children: Maybe<Array<Maybe<PageRecord>>>;
  footer: FooterRecord;
  header: HeaderRecord;
  id: Scalars['ItemId'];
  metaTags: Maybe<SeoField>;
  name: Scalars['String'];
  pageTitle: Scalars['String'];
  parent: Maybe<PageRecord>;
  position: Maybe<Scalars['IntType']>;
  sectionDivider: Maybe<FileField>;
  sections: Array<PageModelSectionsField>;
  urlSlug: Maybe<Scalars['String']>;
}

/** Record of type Page (page) */
export interface PageRecord_AllReferencingFootersArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FooterModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
  through: InputMaybe<InverseRelationshipFilterBetweenFooterAndPage>;
}

/** Record of type Page (page) */
export interface PageRecord_AllReferencingFootersMetaArgs {
  through: InputMaybe<InverseRelationshipFilterBetweenFooterAndPage>;
}

/** Record of type Page (page) */
export interface PageRecord_AllReferencingHeadersArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HeaderModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
  through: InputMaybe<InverseRelationshipFilterBetweenHeaderAndPage>;
}

/** Record of type Page (page) */
export interface PageRecord_AllReferencingHeadersMetaArgs {
  through: InputMaybe<InverseRelationshipFilterBetweenHeaderAndPage>;
}

/** Record of type Page (page) */
export interface PageRecord_AllReferencingPagesArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
  through: InputMaybe<InverseRelationshipFilterBetweenPageAndPage>;
}

/** Record of type Page (page) */
export interface PageRecord_AllReferencingPagesMetaArgs {
  through: InputMaybe<InverseRelationshipFilterBetweenPageAndPage>;
}

/** Record of type Page (page) */
export interface PageRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

/** Block of type Page Section - HTML (page_section_html) */
export interface PageSectionHtmlRecord extends RecordInterface {
  __typename: 'PageSectionHtmlRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  htmlContent: Scalars['String'];
  id: Scalars['ItemId'];
  title: Maybe<Scalars['String']>;
}

/** Block of type Page Section - HTML (page_section_html) */
export interface PageSectionHtmlRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

/** Block of type Page Section - HTML (page_section_html) */
export interface PageSectionHtmlRecordHtmlContentArgs {
  markdown: InputMaybe<Scalars['Boolean']>;
}

export interface PageSectionModelContentField {
  __typename: 'PageSectionModelContentField';
  blocks: Array<SubsectionRecord>;
  links: Array<PageSectionModelContentLinksField>;
  value: Scalars['JsonField'];
}

export type PageSectionModelContentLinksField =
  | AddressRecord
  | CoverVideoRecord
  | CurrentVacanciesModelRecord
  | ImageGalleryRecord
  | PageRecord
  | PeopleGalleryRecord
  | ProjectGalleryRecord;

/** Block of type Page Section - Structured Text (page_section) */
export interface PageSectionRecord extends RecordInterface {
  __typename: 'PageSectionRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content: PageSectionModelContentField;
  id: Scalars['ItemId'];
  title: Maybe<Scalars['String']>;
}

/** Block of type Page Section - Structured Text (page_section) */
export interface PageSectionRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

/** Specifies how to filter by parent (tree-like collections only) */
export interface ParentFilter {
  /** Filter records children of the specified record. Value must be a Record ID */
  eq: InputMaybe<Scalars['ItemId']>;
  /** Filter records with a parent record or not */
  exists: InputMaybe<Scalars['BooleanType']>;
}

/** Record of type People Gallery (people_gallery) */
export interface PeopleGalleryRecord extends RecordInterface {
  __typename: 'PeopleGalleryRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  people: Array<StaffRecord>;
  presentationTitle: Maybe<Scalars['String']>;
}

/** Record of type People Gallery (people_gallery) */
export interface PeopleGalleryRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

/** Specifies how to filter by position (sorted and tree-like collections) */
export interface PositionFilter {
  /** Search for records with an exact match */
  eq: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's less than the one specified */
  lt: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte: InputMaybe<Scalars['IntType']>;
  /** Exclude records with an exact match */
  neq: InputMaybe<Scalars['IntType']>;
}

/** Record of type Project Gallery (project_gallery) */
export interface ProjectGalleryRecord extends RecordInterface {
  __typename: 'ProjectGalleryRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  presentationTitle: Maybe<Scalars['String']>;
  projects: Array<ProjectRecord>;
}

/** Record of type Project Gallery (project_gallery) */
export interface ProjectGalleryRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

export interface ProjectModelFilter {
  OR: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  description: InputMaybe<StringFilter>;
  featuredImage: InputMaybe<FileFilter>;
  humbleButtonText: InputMaybe<StringFilter>;
  humbleSlug: InputMaybe<SlugFilter>;
  humbleUrl: InputMaybe<StringFilter>;
  id: InputMaybe<ItemIdFilter>;
  name: InputMaybe<StringFilter>;
  pageUrl: InputMaybe<StringFilter>;
  slugSrc: InputMaybe<StringFilter>;
  steamSlug: InputMaybe<SlugFilter>;
  steamUrl: InputMaybe<StringFilter>;
}

export enum ProjectModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HumbleButtonTextAsc = 'humbleButtonText_ASC',
  HumbleButtonTextDesc = 'humbleButtonText_DESC',
  HumbleUrlAsc = 'humbleUrl_ASC',
  HumbleUrlDesc = 'humbleUrl_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PageUrlAsc = 'pageUrl_ASC',
  PageUrlDesc = 'pageUrl_DESC',
  SlugSrcAsc = 'slugSrc_ASC',
  SlugSrcDesc = 'slugSrc_DESC',
  SteamUrlAsc = 'steamUrl_ASC',
  SteamUrlDesc = 'steamUrl_DESC',
}

/** Record of type Project (project) */
export interface ProjectRecord extends RecordInterface {
  __typename: 'ProjectRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  description: Scalars['String'];
  featuredImage: ImageFileField;
  humbleButtonText: Maybe<Scalars['String']>;
  humbleSlug: Maybe<Scalars['String']>;
  humbleUrl: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  name: Scalars['String'];
  pageUrl: Maybe<Scalars['String']>;
  slugSrc: Maybe<Scalars['String']>;
  steamSlug: Maybe<Scalars['String']>;
  steamUrl: Maybe<Scalars['String']>;
}

/** Record of type Project (project) */
export interface ProjectRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

/** Specifies how to filter by publication datetime */
export interface PublishedAtFilter {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq: InputMaybe<Scalars['DateTime']>;
}

/** The query root for this schema */
export interface Query {
  __typename: 'Query';
  /** Returns meta information regarding a record collection */
  _allAddressesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCoverVideosMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFootersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allHeadersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allImageGalleriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allJobsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProjectsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSocialLinksCollectionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSocialLinksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStaffsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allThemesMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: Maybe<CollectionMetadata>;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a specific record */
  address: Maybe<AddressRecord>;
  /** Returns a collection of records */
  allAddresses: Array<AddressRecord>;
  /** Returns a collection of records */
  allCoverVideos: Array<CoverVideoRecord>;
  /** Returns a collection of records */
  allFooters: Array<FooterRecord>;
  /** Returns a collection of records */
  allHeaders: Array<HeaderRecord>;
  /** Returns a collection of records */
  allImageGalleries: Array<ImageGalleryRecord>;
  /** Returns a collection of records */
  allJobs: Array<JobRecord>;
  /** Returns a collection of records */
  allPages: Array<PageRecord>;
  /** Returns a collection of records */
  allProjects: Array<ProjectRecord>;
  /** Returns a collection of records */
  allSocialLinks: Array<SocialLinkRecord>;
  /** Returns a collection of records */
  allSocialLinksCollections: Array<SocialLinksCollectionRecord>;
  /** Returns a collection of records */
  allStaffs: Array<StaffRecord>;
  /** Returns a collection of records */
  allThemes: Array<ThemeRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a specific record */
  coverVideo: Maybe<CoverVideoRecord>;
  /** Returns the single instance record */
  currentVacanciesModel: Maybe<CurrentVacanciesModelRecord>;
  /** Returns a specific record */
  footer: Maybe<FooterRecord>;
  /** Returns a specific record */
  header: Maybe<HeaderRecord>;
  /** Returns a specific record */
  imageGallery: Maybe<ImageGalleryRecord>;
  /** Returns a specific record */
  job: Maybe<JobRecord>;
  /** Returns a specific record */
  page: Maybe<PageRecord>;
  /** Returns the single instance record */
  peopleGallery: Maybe<PeopleGalleryRecord>;
  /** Returns a specific record */
  project: Maybe<ProjectRecord>;
  /** Returns the single instance record */
  projectGallery: Maybe<ProjectGalleryRecord>;
  /** Returns a specific record */
  socialLink: Maybe<SocialLinkRecord>;
  /** Returns a specific record */
  socialLinksCollection: Maybe<SocialLinksCollectionRecord>;
  /** Returns a specific record */
  staff: Maybe<StaffRecord>;
  /** Returns a specific record */
  theme: Maybe<ThemeRecord>;
  /** Returns a specific asset */
  upload: Maybe<FileField>;
}

/** The query root for this schema */
export interface Query_AllAddressesMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<AddressModelFilter>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface Query_AllCoverVideosMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<CoverVideoModelFilter>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface Query_AllFootersMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<FooterModelFilter>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface Query_AllHeadersMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<HeaderModelFilter>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface Query_AllImageGalleriesMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ImageGalleryModelFilter>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface Query_AllJobsMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<JobModelFilter>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface Query_AllPagesMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<PageModelFilter>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface Query_AllProjectsMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ProjectModelFilter>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface Query_AllSocialLinksCollectionsMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<SocialLinksCollectionModelFilter>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface Query_AllSocialLinksMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<SocialLinkModelFilter>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface Query_AllStaffsMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<StaffModelFilter>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface Query_AllThemesMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ThemeModelFilter>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface Query_AllUploadsMetaArgs {
  filter: InputMaybe<UploadFilter>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface Query_SiteArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface QueryAddressArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<AddressModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AddressModelOrderBy>>>;
}

/** The query root for this schema */
export interface QueryAllAddressesArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<AddressModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AddressModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}

/** The query root for this schema */
export interface QueryAllCoverVideosArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<CoverVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CoverVideoModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}

/** The query root for this schema */
export interface QueryAllFootersArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<FooterModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FooterModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}

/** The query root for this schema */
export interface QueryAllHeadersArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<HeaderModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HeaderModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}

/** The query root for this schema */
export interface QueryAllImageGalleriesArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ImageGalleryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ImageGalleryModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}

/** The query root for this schema */
export interface QueryAllJobsArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<JobModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<JobModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}

/** The query root for this schema */
export interface QueryAllPagesArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}

/** The query root for this schema */
export interface QueryAllProjectsArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}

/** The query root for this schema */
export interface QueryAllSocialLinksArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<SocialLinkModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SocialLinkModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}

/** The query root for this schema */
export interface QueryAllSocialLinksCollectionsArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<SocialLinksCollectionModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SocialLinksCollectionModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}

/** The query root for this schema */
export interface QueryAllStaffsArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<StaffModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StaffModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}

/** The query root for this schema */
export interface QueryAllThemesArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ThemeModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ThemeModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}

/** The query root for this schema */
export interface QueryAllUploadsArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}

/** The query root for this schema */
export interface QueryCoverVideoArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<CoverVideoModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CoverVideoModelOrderBy>>>;
}

/** The query root for this schema */
export interface QueryCurrentVacanciesModelArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface QueryFooterArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<FooterModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FooterModelOrderBy>>>;
}

/** The query root for this schema */
export interface QueryHeaderArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<HeaderModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HeaderModelOrderBy>>>;
}

/** The query root for this schema */
export interface QueryImageGalleryArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ImageGalleryModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ImageGalleryModelOrderBy>>>;
}

/** The query root for this schema */
export interface QueryJobArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<JobModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<JobModelOrderBy>>>;
}

/** The query root for this schema */
export interface QueryPageArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<PageModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
}

/** The query root for this schema */
export interface QueryPeopleGalleryArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface QueryProjectArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ProjectModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
}

/** The query root for this schema */
export interface QueryProjectGalleryArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface QuerySocialLinkArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<SocialLinkModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SocialLinkModelOrderBy>>>;
}

/** The query root for this schema */
export interface QuerySocialLinksCollectionArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<SocialLinksCollectionModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SocialLinksCollectionModelOrderBy>>>;
}

/** The query root for this schema */
export interface QueryStaffArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<StaffModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StaffModelOrderBy>>>;
}

/** The query root for this schema */
export interface QueryThemeArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ThemeModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ThemeModelOrderBy>>>;
}

/** The query root for this schema */
export interface QueryUploadArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<UploadFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
}

export interface RecordInterface {
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
}

export interface RecordInterface_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

/** Specifies how to filter by upload type */
export interface ResolutionFilter {
  /** Search uploads with the specified resolution */
  eq: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn: InputMaybe<Array<InputMaybe<ResolutionType>>>;
}

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export interface ResponsiveImage {
  __typename: 'ResponsiveImage';
  alt: Maybe<Scalars['String']>;
  aspectRatio: Scalars['FloatType'];
  base64: Maybe<Scalars['String']>;
  bgColor: Maybe<Scalars['String']>;
  height: Scalars['IntType'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  title: Maybe<Scalars['String']>;
  webpSrcSet: Scalars['String'];
  width: Scalars['IntType'];
}

export interface SeoField {
  __typename: 'SeoField';
  description: Maybe<Scalars['String']>;
  image: Maybe<FileField>;
  title: Maybe<Scalars['String']>;
  twitterCard: Maybe<Scalars['String']>;
}

/** Specifies how to filter SEO meta tags fields */
export interface SeoFilter {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
}

export interface Site {
  __typename: 'Site';
  favicon: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
}

export interface SiteFaviconMetaTagsArgs {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
}

export interface SiteGlobalSeoArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export enum SiteLocale {
  En = 'en',
}

/** Specifies how to filter Slug fields */
export interface SlugFilter {
  /** Search for records with an exact match */
  eq: InputMaybe<Scalars['String']>;
  /** Filter records that have one of the specified slugs */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records with an exact match */
  neq: InputMaybe<Scalars['String']>;
  /** Filter records that do have one of the specified slugs */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface SocialLinkModelFilter {
  OR: InputMaybe<Array<InputMaybe<SocialLinkModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  href: InputMaybe<StringFilter>;
  icon: InputMaybe<FileFilter>;
  id: InputMaybe<ItemIdFilter>;
  linkTitle: InputMaybe<StringFilter>;
  position: InputMaybe<PositionFilter>;
  title: InputMaybe<StringFilter>;
}

export enum SocialLinkModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkTitleAsc = 'linkTitle_ASC',
  LinkTitleDesc = 'linkTitle_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Social Link (social_link) */
export interface SocialLinkRecord extends RecordInterface {
  __typename: 'SocialLinkRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  href: Scalars['String'];
  icon: FileField;
  id: Scalars['ItemId'];
  linkTitle: Maybe<Scalars['String']>;
  position: Maybe<Scalars['IntType']>;
  title: Scalars['String'];
}

/** Record of type Social Link (social_link) */
export interface SocialLinkRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

export interface SocialLinksCollectionModelFilter {
  OR: InputMaybe<Array<InputMaybe<SocialLinksCollectionModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  id: InputMaybe<ItemIdFilter>;
  links: InputMaybe<LinksFilter>;
  presentationTitle: InputMaybe<StringFilter>;
  title: InputMaybe<StringFilter>;
}

export enum SocialLinksCollectionModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PresentationTitleAsc = 'presentationTitle_ASC',
  PresentationTitleDesc = 'presentationTitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Social Links (social_links_collection) */
export interface SocialLinksCollectionRecord extends RecordInterface {
  __typename: 'SocialLinksCollectionRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  links: Array<SocialLinkRecord>;
  presentationTitle: Maybe<Scalars['String']>;
  title: Scalars['String'];
}

/** Record of type Social Links (social_links_collection) */
export interface SocialLinksCollectionRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

export interface StaffModelFilter {
  OR: InputMaybe<Array<InputMaybe<StaffModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  email: InputMaybe<StringFilter>;
  featuredImage: InputMaybe<FileFilter>;
  id: InputMaybe<ItemIdFilter>;
  jobPosition: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
}

export enum StaffModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  JobPositionAsc = 'jobPosition_ASC',
  JobPositionDesc = 'jobPosition_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

/** Record of type Staff (staff) */
export interface StaffRecord extends RecordInterface {
  __typename: 'StaffRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  email: Maybe<Scalars['String']>;
  featuredImage: ImageFileField;
  id: Scalars['ItemId'];
  jobPosition: Scalars['String'];
  name: Scalars['String'];
}

/** Record of type Staff (staff) */
export interface StaffRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

/** Specifies how to filter by status */
export interface StatusFilter {
  /** Search the record with the specified status */
  eq: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn: InputMaybe<Array<InputMaybe<ItemStatus>>>;
}

/** Specifies how to filter Single-line string fields */
export interface StringFilter {
  /** Search for records with an exact match */
  eq: InputMaybe<Scalars['String']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that equal one of the specified values */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq: InputMaybe<Scalars['String']>;
  /** Filter records that do not equal one of the specified values */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

export interface StringMatchesFilter {
  caseSensitive: InputMaybe<Scalars['BooleanType']>;
  pattern: Scalars['String'];
  regexp: InputMaybe<Scalars['BooleanType']>;
}

export interface SubsectionModelContentField {
  __typename: 'SubsectionModelContentField';
  blocks: Array<Scalars['String']>;
  links: Array<SubsectionModelContentLinksField>;
  value: Scalars['JsonField'];
}

export type SubsectionModelContentLinksField =
  | AddressRecord
  | CurrentVacanciesModelRecord;

/** Block of type Subsection (subsection) */
export interface SubsectionRecord extends RecordInterface {
  __typename: 'SubsectionRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content: SubsectionModelContentField;
  id: Scalars['ItemId'];
  title: Maybe<Scalars['String']>;
}

/** Block of type Subsection (subsection) */
export interface SubsectionRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

export interface Tag {
  __typename: 'Tag';
  attributes: Maybe<Scalars['MetaTagAttributes']>;
  content: Maybe<Scalars['String']>;
  tag: Scalars['String'];
}

export interface ThemeModelFilter {
  OR: InputMaybe<Array<InputMaybe<ThemeModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  content: InputMaybe<JsonFilter>;
  id: InputMaybe<ItemIdFilter>;
  name: InputMaybe<StringFilter>;
}

export enum ThemeModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

/** Record of type Theme (theme) */
export interface ThemeRecord extends RecordInterface {
  __typename: 'ThemeRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content: Scalars['JsonField'];
  id: Scalars['ItemId'];
  name: Scalars['String'];
}

/** Record of type Theme (theme) */
export interface ThemeRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

/** Specifies how to filter by upload type */
export interface TypeFilter {
  /** Search uploads with the specified type */
  eq: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn: InputMaybe<Array<InputMaybe<UploadType>>>;
}

/** Specifies how to filter by update datetime */
export interface UpdatedAtFilter {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq: InputMaybe<Scalars['DateTime']>;
}

/** Specifies how to filter by default alt */
export interface UploadAltFilter {
  /** Search the uploads with the specified alt */
  eq: InputMaybe<Scalars['String']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Search uploads with the specified values as default alt */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq: InputMaybe<Scalars['String']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

/** Specifies how to filter by auhtor */
export interface UploadAuthorFilter {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

/** Specifies how to filter by basename */
export interface UploadBasenameFilter {
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

/** Specifies how to filter by colors */
export interface UploadColorsFilter {
  /** Filter uploads that have all of the specified colors */
  allIn: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
}

/** Specifies how to filter by copyright */
export interface UploadCopyrightFilter {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

/** Specifies how to filter by creation datetime */
export interface UploadCreatedAtFilter {
  /** Search for uploads with an exact match */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq: InputMaybe<Scalars['DateTime']>;
}

/** Specifies how to filter by filename */
export interface UploadFilenameFilter {
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

export interface UploadFilter {
  OR: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt: InputMaybe<UploadUpdatedAtFilter>;
  alt: InputMaybe<UploadAltFilter>;
  author: InputMaybe<UploadAuthorFilter>;
  basename: InputMaybe<UploadBasenameFilter>;
  colors: InputMaybe<UploadColorsFilter>;
  copyright: InputMaybe<UploadCopyrightFilter>;
  filename: InputMaybe<UploadFilenameFilter>;
  format: InputMaybe<UploadFormatFilter>;
  height: InputMaybe<UploadHeightFilter>;
  id: InputMaybe<UploadIdFilter>;
  inUse: InputMaybe<InUseFilter>;
  md5: InputMaybe<UploadMd5Filter>;
  mimeType: InputMaybe<UploadMimeTypeFilter>;
  notes: InputMaybe<UploadNotesFilter>;
  orientation: InputMaybe<OrientationFilter>;
  resolution: InputMaybe<ResolutionFilter>;
  size: InputMaybe<UploadSizeFilter>;
  smartTags: InputMaybe<UploadTagsFilter>;
  tags: InputMaybe<UploadTagsFilter>;
  title: InputMaybe<UploadTitleFilter>;
  type: InputMaybe<TypeFilter>;
  width: InputMaybe<UploadWidthFilter>;
}

/** Specifies how to filter by format */
export interface UploadFormatFilter {
  /** Search the asset with the specified format */
  eq: InputMaybe<Scalars['String']>;
  /** Search assets with the specified formats */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified format */
  neq: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified formats */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

/** Specifies how to filter by height */
export interface UploadHeightFilter {
  /** Search assets with the specified height */
  eq: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified height */
  gt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  gte: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified height */
  lt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  lte: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified height */
  neq: InputMaybe<Scalars['IntType']>;
}

/** Specifies how to filter by ID */
export interface UploadIdFilter {
  /** Search the asset with the specified ID */
  eq: InputMaybe<Scalars['UploadId']>;
  /** Search assets with the specified IDs */
  in: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude the asset with the specified ID */
  neq: InputMaybe<Scalars['UploadId']>;
  /** Search assets that do not have the specified IDs */
  notIn: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
}

/** Specifies how to filter by MD5 */
export interface UploadMd5Filter {
  /** Search the asset with the specified MD5 */
  eq: InputMaybe<Scalars['String']>;
  /** Search assets with the specified MD5s */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified MD5 */
  neq: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified MD5s */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

/** Specifies how to filter by mime type */
export interface UploadMimeTypeFilter {
  /** Search the asset with the specified mime type */
  eq: InputMaybe<Scalars['String']>;
  /** Search assets with the specified mime types */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified mime types */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

/** Specifies how to filter by notes */
export interface UploadNotesFilter {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
}

/** Specifies how to filter by size */
export interface UploadSizeFilter {
  /** Search assets with the specified size (in bytes) */
  eq: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq: InputMaybe<Scalars['IntType']>;
}

/** Specifies how to filter by tags */
export interface UploadTagsFilter {
  /** Filter uploads linked to all of the specified tags */
  allIn: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to the specified tag */
  contains: InputMaybe<Scalars['String']>;
  /** Search for uploads with an exact match */
  eq: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn: InputMaybe<Array<Scalars['String']>>;
}

/** Specifies how to filter by default title */
export interface UploadTitleFilter {
  /** Search the asset with the specified title */
  eq: InputMaybe<Scalars['String']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Search assets with the specified as default title */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified as default title */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video',
}

/** Specifies how to filter by update datetime */
export interface UploadUpdatedAtFilter {
  /** Search for uploads with an exact match */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq: InputMaybe<Scalars['DateTime']>;
}

export interface UploadVideoField {
  __typename: 'UploadVideoField';
  duration: Maybe<Scalars['Int']>;
  framerate: Maybe<Scalars['Int']>;
  mp4Url: Maybe<Scalars['String']>;
  muxAssetId: Scalars['String'];
  muxPlaybackId: Scalars['String'];
  streamingUrl: Scalars['String'];
  thumbnailUrl: Scalars['String'];
}

export interface UploadVideoFieldMp4UrlArgs {
  exactRes: InputMaybe<VideoMp4Res>;
  res: InputMaybe<VideoMp4Res>;
}

export interface UploadVideoFieldThumbnailUrlArgs {
  format?: InputMaybe<MuxThumbnailFormatType>;
}

/** Specifies how to filter by width */
export interface UploadWidthFilter {
  /** Search assets with the specified width */
  eq: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified width */
  gt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  gte: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified width */
  lt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  lte: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified width */
  neq: InputMaybe<Scalars['IntType']>;
}

export interface VideoFileField extends FileFieldInterface {
  __typename: 'VideoFileField';
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb: Maybe<Scalars['String']>;
  blurhash: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint: Maybe<FocalPoint>;
  format: Scalars['String'];
  height: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes: Maybe<Scalars['String']>;
  responsiveImage: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video: UploadVideoField;
  width: Maybe<Scalars['IntType']>;
}

export interface VideoFileFieldAltArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface VideoFileFieldBlurUpThumbArgs {
  imgixParams: InputMaybe<ImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
}

export interface VideoFileFieldCustomDataArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface VideoFileFieldFocalPointArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface VideoFileFieldResponsiveImageArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  imgixParams: InputMaybe<ImgixParams>;
  locale: InputMaybe<SiteLocale>;
  sizes: InputMaybe<Scalars['String']>;
}

export interface VideoFileFieldTitleArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export interface VideoFileFieldUrlArgs {
  imgixParams: InputMaybe<ImgixParams>;
}

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium',
}

export interface FocalPoint {
  __typename: 'focalPoint';
  x: Scalars['FloatType'];
  y: Scalars['FloatType'];
}

export type PageFragment = {
  name: string;
  pageTitle: string;
  urlSlug: string | null;
  id: string;
  header: {
    id: string;
    logo: {
      mimeType: string;
      url: string;
      width: number | null;
      height: number | null;
    } & { __typename: 'FileField' };
    navigationLinks: Array<
      {
        id: string;
        urlSlug: string | null;
        name: string;
        metaTags:
          | ({
              description: string | null;
              title: string | null;
              twitterCard: string | null;
              image:
                | ({
                    url: string;
                    title: string | null;
                    width: number | null;
                    height: number | null;
                  } & { __typename: 'FileField' })
                | null;
            } & { __typename: 'SeoField' })
          | null;
        _seoMetaTags: Array<
          {
            content: string | null;
            tag: string;
            attributes: Record<string, string> | null;
          } & { __typename: 'Tag' }
        >;
      } & { __typename: 'PageRecord' }
    >;
    socialLinks: {
      id: string;
      links: Array<
        {
          linkTitle: string | null;
          id: string;
          title: string;
          href: string;
          icon: {
            mimeType: string;
            url: string;
            width: number | null;
            height: number | null;
          } & { __typename: 'FileField' };
        } & { __typename: 'SocialLinkRecord' }
      >;
    } & { __typename: 'SocialLinksCollectionRecord' };
  } & { __typename: 'HeaderRecord' };
  footer: {
    id: string;
    sections: Array<
      {
        id: string;
        content: {
          value: unknown;
          links: Array<
            | ({
                id: string;
                title: string;
                name: string;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
              } & { __typename: 'AddressRecord' })
            | ({
                id: string;
                urlSlug: string | null;
                name: string;
                metaTags:
                  | ({
                      description: string | null;
                      title: string | null;
                      twitterCard: string | null;
                      image:
                        | ({
                            url: string;
                            title: string | null;
                            width: number | null;
                            height: number | null;
                          } & { __typename: 'FileField' })
                        | null;
                    } & { __typename: 'SeoField' })
                  | null;
                _seoMetaTags: Array<
                  {
                    content: string | null;
                    tag: string;
                    attributes: Record<string, string> | null;
                  } & { __typename: 'Tag' }
                >;
              } & { __typename: 'PageRecord' })
            | ({
                id: string;
                links: Array<
                  {
                    linkTitle: string | null;
                    id: string;
                    title: string;
                    href: string;
                    icon: {
                      mimeType: string;
                      url: string;
                      width: number | null;
                      height: number | null;
                    } & { __typename: 'FileField' };
                  } & { __typename: 'SocialLinkRecord' }
                >;
              } & { __typename: 'SocialLinksCollectionRecord' })
          >;
        } & { __typename: 'FooterSectionModelContentField' };
      } & { __typename: 'FooterSectionRecord' }
    >;
  } & { __typename: 'FooterRecord' };
  sections: Array<
    | ({ id: string; title: string | null; htmlContent: string } & {
        __typename: 'PageSectionHtmlRecord';
      })
    | ({
        id: string;
        title: string | null;
        content: {
          value: unknown;
          blocks: Array<
            {
              id: string;
              title: string | null;
              content: {
                value: unknown;
                links: Array<
                  | ({
                      id: string;
                      title: string;
                      name: string;
                      streetAddress: string;
                      zipCode: string;
                      city: string;
                      country: string;
                    } & { __typename: 'AddressRecord' })
                  | ({
                      id: string;
                      jobs: Array<
                        {
                          id: string;
                          jobTitle: string;
                          minLevel: string;
                          maxLevel: string;
                        } & { __typename: 'JobRecord' }
                      >;
                    } & { __typename: 'CurrentVacanciesModelRecord' })
                >;
              } & { __typename: 'SubsectionModelContentField' };
            } & { __typename: 'SubsectionRecord' }
          >;
          links: Array<
            | ({
                id: string;
                title: string;
                name: string;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
              } & { __typename: 'AddressRecord' })
            | ({
                id: string;
                overlayText: string | null;
                landscape: {
                  mimeType: string;
                  width: number | null;
                  height: number | null;
                  video: {
                    duration: number | null;
                    framerate: number | null;
                    mp4High: string | null;
                    mp4Med: string | null;
                    mp4Low: string | null;
                    thumbJpg: string;
                    thumbGif: string;
                  } & { __typename: 'UploadVideoField' };
                } & { __typename: 'VideoFileField' };
                portrait: {
                  mimeType: string;
                  width: number | null;
                  height: number | null;
                  video: {
                    duration: number | null;
                    framerate: number | null;
                    mp4High: string | null;
                    mp4Med: string | null;
                    mp4Low: string | null;
                    thumbJpg: string;
                    thumbGif: string;
                  } & { __typename: 'UploadVideoField' };
                } & { __typename: 'VideoFileField' };
              } & { __typename: 'CoverVideoRecord' })
            | ({
                id: string;
                jobs: Array<
                  {
                    id: string;
                    jobTitle: string;
                    minLevel: string;
                    maxLevel: string;
                  } & { __typename: 'JobRecord' }
                >;
              } & { __typename: 'CurrentVacanciesModelRecord' })
            | ({
                id: string;
                title: string;
                images: Array<
                  {
                    id: string;
                    responsiveImage: {
                      src: string;
                      alt: string | null;
                      title: string | null;
                      width: number;
                      height: number;
                      srcSet: string;
                      sizes: string;
                      bgColor: string | null;
                      aspectRatio: number;
                    } & { __typename: 'ResponsiveImage' };
                  } & { __typename: 'ImageFileField' }
                >;
              } & { __typename: 'ImageGalleryRecord' })
            | { __typename: 'PageRecord' }
            | ({
                id: string;
                people: Array<
                  {
                    id: string;
                    jobPosition: string;
                    name: string;
                    featuredImage: {
                      id: string;
                      responsiveImage: {
                        src: string;
                        alt: string | null;
                        title: string | null;
                        width: number;
                        height: number;
                        srcSet: string;
                        sizes: string;
                        bgColor: string | null;
                        aspectRatio: number;
                      } & { __typename: 'ResponsiveImage' };
                    } & { __typename: 'ImageFileField' };
                  } & { __typename: 'StaffRecord' }
                >;
              } & { __typename: 'PeopleGalleryRecord' })
            | ({
                id: string;
                projects: Array<
                  {
                    id: string;
                    name: string;
                    pageUrl: string | null;
                    steamUrl: string | null;
                    humbleUrl: string | null;
                    humbleButtonText: string | null;
                    description: string;
                    featuredImage: {
                      id: string;
                      responsiveImage: {
                        src: string;
                        alt: string | null;
                        title: string | null;
                        width: number;
                        height: number;
                        srcSet: string;
                        sizes: string;
                        bgColor: string | null;
                        aspectRatio: number;
                      } & { __typename: 'ResponsiveImage' };
                    } & { __typename: 'ImageFileField' };
                  } & { __typename: 'ProjectRecord' }
                >;
              } & { __typename: 'ProjectGalleryRecord' })
          >;
        } & { __typename: 'PageSectionModelContentField' };
      } & { __typename: 'PageSectionRecord' })
  >;
  sectionDivider:
    | ({
        mimeType: string;
        url: string;
        width: number | null;
        height: number | null;
      } & { __typename: 'FileField' })
    | null;
  metaTags:
    | ({
        description: string | null;
        title: string | null;
        twitterCard: string | null;
        image:
          | ({
              url: string;
              title: string | null;
              width: number | null;
              height: number | null;
            } & { __typename: 'FileField' })
          | null;
      } & { __typename: 'SeoField' })
    | null;
  _seoMetaTags: Array<
    {
      content: string | null;
      tag: string;
      attributes: Record<string, string> | null;
    } & { __typename: 'Tag' }
  >;
} & { __typename: 'PageRecord' };

export type PageLinkFragment = {
  id: string;
  urlSlug: string | null;
  name: string;
  metaTags:
    | ({
        description: string | null;
        title: string | null;
        twitterCard: string | null;
        image:
          | ({
              url: string;
              title: string | null;
              width: number | null;
              height: number | null;
            } & { __typename: 'FileField' })
          | null;
      } & { __typename: 'SeoField' })
    | null;
  _seoMetaTags: Array<
    {
      content: string | null;
      tag: string;
      attributes: Record<string, string> | null;
    } & { __typename: 'Tag' }
  >;
} & { __typename: 'PageRecord' };

export type PageMetaTagsFragment = {
  description: string | null;
  title: string | null;
  twitterCard: string | null;
  image:
    | ({
        url: string;
        title: string | null;
        width: number | null;
        height: number | null;
      } & { __typename: 'FileField' })
    | null;
} & { __typename: 'SeoField' };

export type PageSeoFragment = {
  content: string | null;
  tag: string;
  attributes: Record<string, string> | null;
} & { __typename: 'Tag' };

export type HtmlSectionFragment = {
  id: string;
  title: string | null;
  htmlContent: string;
} & { __typename: 'PageSectionHtmlRecord' };

export type PageSectionFragment = {
  id: string;
  title: string | null;
  content: {
    value: unknown;
    blocks: Array<
      {
        id: string;
        title: string | null;
        content: {
          value: unknown;
          links: Array<
            | ({
                id: string;
                title: string;
                name: string;
                streetAddress: string;
                zipCode: string;
                city: string;
                country: string;
              } & { __typename: 'AddressRecord' })
            | ({
                id: string;
                jobs: Array<
                  {
                    id: string;
                    jobTitle: string;
                    minLevel: string;
                    maxLevel: string;
                  } & { __typename: 'JobRecord' }
                >;
              } & { __typename: 'CurrentVacanciesModelRecord' })
          >;
        } & { __typename: 'SubsectionModelContentField' };
      } & { __typename: 'SubsectionRecord' }
    >;
    links: Array<
      | ({
          id: string;
          title: string;
          name: string;
          streetAddress: string;
          zipCode: string;
          city: string;
          country: string;
        } & { __typename: 'AddressRecord' })
      | ({
          id: string;
          overlayText: string | null;
          landscape: {
            mimeType: string;
            width: number | null;
            height: number | null;
            video: {
              duration: number | null;
              framerate: number | null;
              mp4High: string | null;
              mp4Med: string | null;
              mp4Low: string | null;
              thumbJpg: string;
              thumbGif: string;
            } & { __typename: 'UploadVideoField' };
          } & { __typename: 'VideoFileField' };
          portrait: {
            mimeType: string;
            width: number | null;
            height: number | null;
            video: {
              duration: number | null;
              framerate: number | null;
              mp4High: string | null;
              mp4Med: string | null;
              mp4Low: string | null;
              thumbJpg: string;
              thumbGif: string;
            } & { __typename: 'UploadVideoField' };
          } & { __typename: 'VideoFileField' };
        } & { __typename: 'CoverVideoRecord' })
      | ({
          id: string;
          jobs: Array<
            {
              id: string;
              jobTitle: string;
              minLevel: string;
              maxLevel: string;
            } & { __typename: 'JobRecord' }
          >;
        } & { __typename: 'CurrentVacanciesModelRecord' })
      | ({
          id: string;
          title: string;
          images: Array<
            {
              id: string;
              responsiveImage: {
                src: string;
                alt: string | null;
                title: string | null;
                width: number;
                height: number;
                srcSet: string;
                sizes: string;
                bgColor: string | null;
                aspectRatio: number;
              } & { __typename: 'ResponsiveImage' };
            } & { __typename: 'ImageFileField' }
          >;
        } & { __typename: 'ImageGalleryRecord' })
      | { __typename: 'PageRecord' }
      | ({
          id: string;
          people: Array<
            {
              id: string;
              jobPosition: string;
              name: string;
              featuredImage: {
                id: string;
                responsiveImage: {
                  src: string;
                  alt: string | null;
                  title: string | null;
                  width: number;
                  height: number;
                  srcSet: string;
                  sizes: string;
                  bgColor: string | null;
                  aspectRatio: number;
                } & { __typename: 'ResponsiveImage' };
              } & { __typename: 'ImageFileField' };
            } & { __typename: 'StaffRecord' }
          >;
        } & { __typename: 'PeopleGalleryRecord' })
      | ({
          id: string;
          projects: Array<
            {
              id: string;
              name: string;
              pageUrl: string | null;
              steamUrl: string | null;
              humbleUrl: string | null;
              humbleButtonText: string | null;
              description: string;
              featuredImage: {
                id: string;
                responsiveImage: {
                  src: string;
                  alt: string | null;
                  title: string | null;
                  width: number;
                  height: number;
                  srcSet: string;
                  sizes: string;
                  bgColor: string | null;
                  aspectRatio: number;
                } & { __typename: 'ResponsiveImage' };
              } & { __typename: 'ImageFileField' };
            } & { __typename: 'ProjectRecord' }
          >;
        } & { __typename: 'ProjectGalleryRecord' })
    >;
  } & { __typename: 'PageSectionModelContentField' };
} & { __typename: 'PageSectionRecord' };

export type SubsectionFragment = {
  id: string;
  title: string | null;
  content: {
    value: unknown;
    links: Array<
      | ({
          id: string;
          title: string;
          name: string;
          streetAddress: string;
          zipCode: string;
          city: string;
          country: string;
        } & { __typename: 'AddressRecord' })
      | ({
          id: string;
          jobs: Array<
            {
              id: string;
              jobTitle: string;
              minLevel: string;
              maxLevel: string;
            } & { __typename: 'JobRecord' }
          >;
        } & { __typename: 'CurrentVacanciesModelRecord' })
    >;
  } & { __typename: 'SubsectionModelContentField' };
} & { __typename: 'SubsectionRecord' };

export type CurrentVacanciesFragment = {
  id: string;
  jobs: Array<
    { id: string; jobTitle: string; minLevel: string; maxLevel: string } & {
      __typename: 'JobRecord';
    }
  >;
} & { __typename: 'CurrentVacanciesModelRecord' };

export type SocialLinksCollectionFragment = {
  id: string;
  links: Array<
    {
      linkTitle: string | null;
      id: string;
      title: string;
      href: string;
      icon: {
        mimeType: string;
        url: string;
        width: number | null;
        height: number | null;
      } & { __typename: 'FileField' };
    } & { __typename: 'SocialLinkRecord' }
  >;
} & { __typename: 'SocialLinksCollectionRecord' };

export type SocialLinkFragment = {
  linkTitle: string | null;
  id: string;
  title: string;
  href: string;
  icon: {
    mimeType: string;
    url: string;
    width: number | null;
    height: number | null;
  } & { __typename: 'FileField' };
} & { __typename: 'SocialLinkRecord' };

export type IconFragment = {
  mimeType: string;
  url: string;
  width: number | null;
  height: number | null;
} & { __typename: 'FileField' };

export type ResponsiveImageFragment = {
  src: string;
  alt: string | null;
  title: string | null;
  width: number;
  height: number;
  srcSet: string;
  sizes: string;
  bgColor: string | null;
  aspectRatio: number;
} & { __typename: 'ResponsiveImage' };

export type VideoFragment = {
  mimeType: string;
  width: number | null;
  height: number | null;
  video: {
    duration: number | null;
    framerate: number | null;
    mp4High: string | null;
    mp4Med: string | null;
    mp4Low: string | null;
    thumbJpg: string;
    thumbGif: string;
  } & { __typename: 'UploadVideoField' };
} & { __typename: 'VideoFileField' };

export type CoverVideoFragment = {
  id: string;
  overlayText: string | null;
  landscape: {
    mimeType: string;
    width: number | null;
    height: number | null;
    video: {
      duration: number | null;
      framerate: number | null;
      mp4High: string | null;
      mp4Med: string | null;
      mp4Low: string | null;
      thumbJpg: string;
      thumbGif: string;
    } & { __typename: 'UploadVideoField' };
  } & { __typename: 'VideoFileField' };
  portrait: {
    mimeType: string;
    width: number | null;
    height: number | null;
    video: {
      duration: number | null;
      framerate: number | null;
      mp4High: string | null;
      mp4Med: string | null;
      mp4Low: string | null;
      thumbJpg: string;
      thumbGif: string;
    } & { __typename: 'UploadVideoField' };
  } & { __typename: 'VideoFileField' };
} & { __typename: 'CoverVideoRecord' };

export type AddressFragment = {
  id: string;
  title: string;
  name: string;
  streetAddress: string;
  zipCode: string;
  city: string;
  country: string;
} & { __typename: 'AddressRecord' };

export type ProjectFragment = {
  id: string;
  name: string;
  pageUrl: string | null;
  steamUrl: string | null;
  humbleUrl: string | null;
  humbleButtonText: string | null;
  description: string;
  featuredImage: {
    id: string;
    responsiveImage: {
      src: string;
      alt: string | null;
      title: string | null;
      width: number;
      height: number;
      srcSet: string;
      sizes: string;
      bgColor: string | null;
      aspectRatio: number;
    } & { __typename: 'ResponsiveImage' };
  } & { __typename: 'ImageFileField' };
} & { __typename: 'ProjectRecord' };

export type ProjectGalleryFragment = {
  id: string;
  projects: Array<
    {
      id: string;
      name: string;
      pageUrl: string | null;
      steamUrl: string | null;
      humbleUrl: string | null;
      humbleButtonText: string | null;
      description: string;
      featuredImage: {
        id: string;
        responsiveImage: {
          src: string;
          alt: string | null;
          title: string | null;
          width: number;
          height: number;
          srcSet: string;
          sizes: string;
          bgColor: string | null;
          aspectRatio: number;
        } & { __typename: 'ResponsiveImage' };
      } & { __typename: 'ImageFileField' };
    } & { __typename: 'ProjectRecord' }
  >;
} & { __typename: 'ProjectGalleryRecord' };

export type StaffFragment = {
  id: string;
  jobPosition: string;
  name: string;
  featuredImage: {
    id: string;
    responsiveImage: {
      src: string;
      alt: string | null;
      title: string | null;
      width: number;
      height: number;
      srcSet: string;
      sizes: string;
      bgColor: string | null;
      aspectRatio: number;
    } & { __typename: 'ResponsiveImage' };
  } & { __typename: 'ImageFileField' };
} & { __typename: 'StaffRecord' };

export type PeopleGalleryFragment = {
  id: string;
  people: Array<
    {
      id: string;
      jobPosition: string;
      name: string;
      featuredImage: {
        id: string;
        responsiveImage: {
          src: string;
          alt: string | null;
          title: string | null;
          width: number;
          height: number;
          srcSet: string;
          sizes: string;
          bgColor: string | null;
          aspectRatio: number;
        } & { __typename: 'ResponsiveImage' };
      } & { __typename: 'ImageFileField' };
    } & { __typename: 'StaffRecord' }
  >;
} & { __typename: 'PeopleGalleryRecord' };

export type ImageGalleryFragment = {
  id: string;
  title: string;
  images: Array<
    {
      id: string;
      responsiveImage: {
        src: string;
        alt: string | null;
        title: string | null;
        width: number;
        height: number;
        srcSet: string;
        sizes: string;
        bgColor: string | null;
        aspectRatio: number;
      } & { __typename: 'ResponsiveImage' };
    } & { __typename: 'ImageFileField' }
  >;
} & { __typename: 'ImageGalleryRecord' };

export type FooterFragment = {
  id: string;
  sections: Array<
    {
      id: string;
      content: {
        value: unknown;
        links: Array<
          | ({
              id: string;
              title: string;
              name: string;
              streetAddress: string;
              zipCode: string;
              city: string;
              country: string;
            } & { __typename: 'AddressRecord' })
          | ({
              id: string;
              urlSlug: string | null;
              name: string;
              metaTags:
                | ({
                    description: string | null;
                    title: string | null;
                    twitterCard: string | null;
                    image:
                      | ({
                          url: string;
                          title: string | null;
                          width: number | null;
                          height: number | null;
                        } & { __typename: 'FileField' })
                      | null;
                  } & { __typename: 'SeoField' })
                | null;
              _seoMetaTags: Array<
                {
                  content: string | null;
                  tag: string;
                  attributes: Record<string, string> | null;
                } & { __typename: 'Tag' }
              >;
            } & { __typename: 'PageRecord' })
          | ({
              id: string;
              links: Array<
                {
                  linkTitle: string | null;
                  id: string;
                  title: string;
                  href: string;
                  icon: {
                    mimeType: string;
                    url: string;
                    width: number | null;
                    height: number | null;
                  } & { __typename: 'FileField' };
                } & { __typename: 'SocialLinkRecord' }
              >;
            } & { __typename: 'SocialLinksCollectionRecord' })
        >;
      } & { __typename: 'FooterSectionModelContentField' };
    } & { __typename: 'FooterSectionRecord' }
  >;
} & { __typename: 'FooterRecord' };

export type FooterSectionFragment = {
  id: string;
  content: {
    value: unknown;
    links: Array<
      | ({
          id: string;
          title: string;
          name: string;
          streetAddress: string;
          zipCode: string;
          city: string;
          country: string;
        } & { __typename: 'AddressRecord' })
      | ({
          id: string;
          urlSlug: string | null;
          name: string;
          metaTags:
            | ({
                description: string | null;
                title: string | null;
                twitterCard: string | null;
                image:
                  | ({
                      url: string;
                      title: string | null;
                      width: number | null;
                      height: number | null;
                    } & { __typename: 'FileField' })
                  | null;
              } & { __typename: 'SeoField' })
            | null;
          _seoMetaTags: Array<
            {
              content: string | null;
              tag: string;
              attributes: Record<string, string> | null;
            } & { __typename: 'Tag' }
          >;
        } & { __typename: 'PageRecord' })
      | ({
          id: string;
          links: Array<
            {
              linkTitle: string | null;
              id: string;
              title: string;
              href: string;
              icon: {
                mimeType: string;
                url: string;
                width: number | null;
                height: number | null;
              } & { __typename: 'FileField' };
            } & { __typename: 'SocialLinkRecord' }
          >;
        } & { __typename: 'SocialLinksCollectionRecord' })
    >;
  } & { __typename: 'FooterSectionModelContentField' };
} & { __typename: 'FooterSectionRecord' };

export type HeaderFragment = {
  id: string;
  logo: {
    mimeType: string;
    url: string;
    width: number | null;
    height: number | null;
  } & { __typename: 'FileField' };
  navigationLinks: Array<
    {
      id: string;
      urlSlug: string | null;
      name: string;
      metaTags:
        | ({
            description: string | null;
            title: string | null;
            twitterCard: string | null;
            image:
              | ({
                  url: string;
                  title: string | null;
                  width: number | null;
                  height: number | null;
                } & { __typename: 'FileField' })
              | null;
          } & { __typename: 'SeoField' })
        | null;
      _seoMetaTags: Array<
        {
          content: string | null;
          tag: string;
          attributes: Record<string, string> | null;
        } & { __typename: 'Tag' }
      >;
    } & { __typename: 'PageRecord' }
  >;
  socialLinks: {
    id: string;
    links: Array<
      {
        linkTitle: string | null;
        id: string;
        title: string;
        href: string;
        icon: {
          mimeType: string;
          url: string;
          width: number | null;
          height: number | null;
        } & { __typename: 'FileField' };
      } & { __typename: 'SocialLinkRecord' }
    >;
  } & { __typename: 'SocialLinksCollectionRecord' };
} & { __typename: 'HeaderRecord' };

export type SiteMetaFragment = {
  locales: Array<SiteLocale>;
  globalSeo:
    | ({
        facebookPageUrl: string | null;
        twitterAccount: string | null;
        titleSuffix: string | null;
        siteName: string | null;
        fallbackSeo:
          | ({
              description: string | null;
              title: string | null;
              twitterCard: string | null;
            } & { __typename: 'SeoField' })
          | null;
      } & { __typename: 'GlobalSeoField' })
    | null;
  favicon: Array<
    {
      content: string | null;
      tag: string;
      attributes: Record<string, string> | null;
    } & { __typename: 'Tag' }
  >;
} & { __typename: 'Site' };

export type PageQueryVariables = Exact<{
  urlSlug: InputMaybe<Scalars['String']>;
}>;

export type PageQuery = {
  page:
    | ({
        name: string;
        pageTitle: string;
        urlSlug: string | null;
        id: string;
        header: {
          id: string;
          logo: {
            mimeType: string;
            url: string;
            width: number | null;
            height: number | null;
          } & { __typename: 'FileField' };
          navigationLinks: Array<
            {
              id: string;
              urlSlug: string | null;
              name: string;
              metaTags:
                | ({
                    description: string | null;
                    title: string | null;
                    twitterCard: string | null;
                    image:
                      | ({
                          url: string;
                          title: string | null;
                          width: number | null;
                          height: number | null;
                        } & { __typename: 'FileField' })
                      | null;
                  } & { __typename: 'SeoField' })
                | null;
              _seoMetaTags: Array<
                {
                  content: string | null;
                  tag: string;
                  attributes: Record<string, string> | null;
                } & { __typename: 'Tag' }
              >;
            } & { __typename: 'PageRecord' }
          >;
          socialLinks: {
            id: string;
            links: Array<
              {
                linkTitle: string | null;
                id: string;
                title: string;
                href: string;
                icon: {
                  mimeType: string;
                  url: string;
                  width: number | null;
                  height: number | null;
                } & { __typename: 'FileField' };
              } & { __typename: 'SocialLinkRecord' }
            >;
          } & { __typename: 'SocialLinksCollectionRecord' };
        } & { __typename: 'HeaderRecord' };
        footer: {
          id: string;
          sections: Array<
            {
              id: string;
              content: {
                value: unknown;
                links: Array<
                  | ({
                      id: string;
                      title: string;
                      name: string;
                      streetAddress: string;
                      zipCode: string;
                      city: string;
                      country: string;
                    } & { __typename: 'AddressRecord' })
                  | ({
                      id: string;
                      urlSlug: string | null;
                      name: string;
                      metaTags:
                        | ({
                            description: string | null;
                            title: string | null;
                            twitterCard: string | null;
                            image:
                              | ({
                                  url: string;
                                  title: string | null;
                                  width: number | null;
                                  height: number | null;
                                } & { __typename: 'FileField' })
                              | null;
                          } & { __typename: 'SeoField' })
                        | null;
                      _seoMetaTags: Array<
                        {
                          content: string | null;
                          tag: string;
                          attributes: Record<string, string> | null;
                        } & { __typename: 'Tag' }
                      >;
                    } & { __typename: 'PageRecord' })
                  | ({
                      id: string;
                      links: Array<
                        {
                          linkTitle: string | null;
                          id: string;
                          title: string;
                          href: string;
                          icon: {
                            mimeType: string;
                            url: string;
                            width: number | null;
                            height: number | null;
                          } & { __typename: 'FileField' };
                        } & { __typename: 'SocialLinkRecord' }
                      >;
                    } & { __typename: 'SocialLinksCollectionRecord' })
                >;
              } & { __typename: 'FooterSectionModelContentField' };
            } & { __typename: 'FooterSectionRecord' }
          >;
        } & { __typename: 'FooterRecord' };
        sections: Array<
          | ({ id: string; title: string | null; htmlContent: string } & {
              __typename: 'PageSectionHtmlRecord';
            })
          | ({
              id: string;
              title: string | null;
              content: {
                value: unknown;
                blocks: Array<
                  {
                    id: string;
                    title: string | null;
                    content: {
                      value: unknown;
                      links: Array<
                        | ({
                            id: string;
                            title: string;
                            name: string;
                            streetAddress: string;
                            zipCode: string;
                            city: string;
                            country: string;
                          } & { __typename: 'AddressRecord' })
                        | ({
                            id: string;
                            jobs: Array<
                              {
                                id: string;
                                jobTitle: string;
                                minLevel: string;
                                maxLevel: string;
                              } & { __typename: 'JobRecord' }
                            >;
                          } & { __typename: 'CurrentVacanciesModelRecord' })
                      >;
                    } & { __typename: 'SubsectionModelContentField' };
                  } & { __typename: 'SubsectionRecord' }
                >;
                links: Array<
                  | ({
                      id: string;
                      title: string;
                      name: string;
                      streetAddress: string;
                      zipCode: string;
                      city: string;
                      country: string;
                    } & { __typename: 'AddressRecord' })
                  | ({
                      id: string;
                      overlayText: string | null;
                      landscape: {
                        mimeType: string;
                        width: number | null;
                        height: number | null;
                        video: {
                          duration: number | null;
                          framerate: number | null;
                          mp4High: string | null;
                          mp4Med: string | null;
                          mp4Low: string | null;
                          thumbJpg: string;
                          thumbGif: string;
                        } & { __typename: 'UploadVideoField' };
                      } & { __typename: 'VideoFileField' };
                      portrait: {
                        mimeType: string;
                        width: number | null;
                        height: number | null;
                        video: {
                          duration: number | null;
                          framerate: number | null;
                          mp4High: string | null;
                          mp4Med: string | null;
                          mp4Low: string | null;
                          thumbJpg: string;
                          thumbGif: string;
                        } & { __typename: 'UploadVideoField' };
                      } & { __typename: 'VideoFileField' };
                    } & { __typename: 'CoverVideoRecord' })
                  | ({
                      id: string;
                      jobs: Array<
                        {
                          id: string;
                          jobTitle: string;
                          minLevel: string;
                          maxLevel: string;
                        } & { __typename: 'JobRecord' }
                      >;
                    } & { __typename: 'CurrentVacanciesModelRecord' })
                  | ({
                      id: string;
                      title: string;
                      images: Array<
                        {
                          id: string;
                          responsiveImage: {
                            src: string;
                            alt: string | null;
                            title: string | null;
                            width: number;
                            height: number;
                            srcSet: string;
                            sizes: string;
                            bgColor: string | null;
                            aspectRatio: number;
                          } & { __typename: 'ResponsiveImage' };
                        } & { __typename: 'ImageFileField' }
                      >;
                    } & { __typename: 'ImageGalleryRecord' })
                  | { __typename: 'PageRecord' }
                  | ({
                      id: string;
                      people: Array<
                        {
                          id: string;
                          jobPosition: string;
                          name: string;
                          featuredImage: {
                            id: string;
                            responsiveImage: {
                              src: string;
                              alt: string | null;
                              title: string | null;
                              width: number;
                              height: number;
                              srcSet: string;
                              sizes: string;
                              bgColor: string | null;
                              aspectRatio: number;
                            } & { __typename: 'ResponsiveImage' };
                          } & { __typename: 'ImageFileField' };
                        } & { __typename: 'StaffRecord' }
                      >;
                    } & { __typename: 'PeopleGalleryRecord' })
                  | ({
                      id: string;
                      projects: Array<
                        {
                          id: string;
                          name: string;
                          pageUrl: string | null;
                          steamUrl: string | null;
                          humbleUrl: string | null;
                          humbleButtonText: string | null;
                          description: string;
                          featuredImage: {
                            id: string;
                            responsiveImage: {
                              src: string;
                              alt: string | null;
                              title: string | null;
                              width: number;
                              height: number;
                              srcSet: string;
                              sizes: string;
                              bgColor: string | null;
                              aspectRatio: number;
                            } & { __typename: 'ResponsiveImage' };
                          } & { __typename: 'ImageFileField' };
                        } & { __typename: 'ProjectRecord' }
                      >;
                    } & { __typename: 'ProjectGalleryRecord' })
                >;
              } & { __typename: 'PageSectionModelContentField' };
            } & { __typename: 'PageSectionRecord' })
        >;
        sectionDivider:
          | ({
              mimeType: string;
              url: string;
              width: number | null;
              height: number | null;
            } & { __typename: 'FileField' })
          | null;
        metaTags:
          | ({
              description: string | null;
              title: string | null;
              twitterCard: string | null;
              image:
                | ({
                    url: string;
                    title: string | null;
                    width: number | null;
                    height: number | null;
                  } & { __typename: 'FileField' })
                | null;
            } & { __typename: 'SeoField' })
          | null;
        _seoMetaTags: Array<
          {
            content: string | null;
            tag: string;
            attributes: Record<string, string> | null;
          } & { __typename: 'Tag' }
        >;
      } & { __typename: 'PageRecord' })
    | null;
  _site: {
    locales: Array<SiteLocale>;
    globalSeo:
      | ({
          facebookPageUrl: string | null;
          twitterAccount: string | null;
          titleSuffix: string | null;
          siteName: string | null;
          fallbackSeo:
            | ({
                description: string | null;
                title: string | null;
                twitterCard: string | null;
              } & { __typename: 'SeoField' })
            | null;
        } & { __typename: 'GlobalSeoField' })
      | null;
    favicon: Array<
      {
        content: string | null;
        tag: string;
        attributes: Record<string, string> | null;
      } & { __typename: 'Tag' }
    >;
  } & { __typename: 'Site' };
} & { __typename: 'Query' };

export type PageLinksQueryVariables = Exact<{ [key: string]: never }>;

export type PageLinksQuery = {
  pages: Array<
    {
      id: string;
      urlSlug: string | null;
      name: string;
      metaTags:
        | ({
            description: string | null;
            title: string | null;
            twitterCard: string | null;
            image:
              | ({
                  url: string;
                  title: string | null;
                  width: number | null;
                  height: number | null;
                } & { __typename: 'FileField' })
              | null;
          } & { __typename: 'SeoField' })
        | null;
      _seoMetaTags: Array<
        {
          content: string | null;
          tag: string;
          attributes: Record<string, string> | null;
        } & { __typename: 'Tag' }
      >;
    } & { __typename: 'PageRecord' }
  >;
} & { __typename: 'Query' };

export type SocialLinksQueryVariables = Exact<{ [key: string]: never }>;

export type SocialLinksQuery = {
  socialLinksCollection:
    | ({
        id: string;
        links: Array<
          {
            linkTitle: string | null;
            id: string;
            title: string;
            href: string;
            icon: {
              mimeType: string;
              url: string;
              width: number | null;
              height: number | null;
            } & { __typename: 'FileField' };
          } & { __typename: 'SocialLinkRecord' }
        >;
      } & { __typename: 'SocialLinksCollectionRecord' })
    | null;
} & { __typename: 'Query' };

export const IconFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Icon' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mimeType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IconFragment, unknown>;
export const PageMetaTagsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageMetaTags' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageMetaTagsFragment, unknown>;
export const PageSeoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageSeo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageSeoFragment, unknown>;
export const PageLinkFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'urlSlug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PageMetaTags' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PageSeo' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageLinkFragment, unknown>;
export const SocialLinkFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SocialLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SocialLinkRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'linkTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'href' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'icon' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Icon' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SocialLinkFragment, unknown>;
export const SocialLinksCollectionFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SocialLinksCollection' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SocialLinksCollectionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SocialLink' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SocialLinksCollectionFragment, unknown>;
export const HeaderFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Header' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'logo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Icon' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'navigationLinks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PageLink' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'socialLinks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SocialLinksCollection' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeaderFragment, unknown>;
export const AddressFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Address' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AddressRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zipCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddressFragment, unknown>;
export const FooterSectionFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FooterSection' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FooterSectionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'links' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'AddressRecord' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'Address' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: {
                            kind: 'Name',
                            value: 'SocialLinksCollectionRecord',
                          },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'SocialLinksCollection',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'PageRecord' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'PageLink' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FooterSectionFragment, unknown>;
export const FooterFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Footer' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FooterRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sections' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'FooterSection' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FooterFragment, unknown>;
export const CurrentVacanciesFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CurrentVacancies' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CurrentVacanciesModelRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'jobs' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'jobTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'minLevel' } },
                { kind: 'Field', name: { kind: 'Name', value: 'maxLevel' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CurrentVacanciesFragment, unknown>;
export const SubsectionFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Subsection' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SubsectionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'links' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'AddressRecord' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'Address' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: {
                            kind: 'Name',
                            value: 'CurrentVacanciesModelRecord',
                          },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'CurrentVacancies' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SubsectionFragment, unknown>;
export const ResponsiveImageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ResponsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ResponsiveImageFragment, unknown>;
export const ProjectFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Project' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ProjectRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'steamUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'humbleUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'humbleButtonText' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'featuredImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responsiveImage' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'imgixParams' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'fm' },
                            value: { kind: 'EnumValue', value: 'webp' },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'fit' },
                            value: { kind: 'EnumValue', value: 'crop' },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'ar' },
                            value: {
                              kind: 'StringValue',
                              value: '1',
                              block: false,
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'dpi' },
                            value: {
                              kind: 'StringValue',
                              value: '72',
                              block: false,
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'w' },
                            value: {
                              kind: 'StringValue',
                              value: '800',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ResponsiveImage' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProjectFragment, unknown>;
export const ProjectGalleryFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProjectGallery' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ProjectGalleryRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projects' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Project' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProjectGalleryFragment, unknown>;
export const ImageGalleryFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageGallery' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageGalleryRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'images' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responsiveImage' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'imgixParams' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'fm' },
                            value: { kind: 'EnumValue', value: 'webp' },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'fit' },
                            value: { kind: 'EnumValue', value: 'crop' },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'ar' },
                            value: {
                              kind: 'StringValue',
                              value: '3:2',
                              block: false,
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'dpi' },
                            value: {
                              kind: 'StringValue',
                              value: '72',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ResponsiveImage' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageGalleryFragment, unknown>;
export const StaffFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Staff' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'StaffRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jobPosition' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'featuredImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responsiveImage' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'imgixParams' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'fm' },
                            value: { kind: 'EnumValue', value: 'webp' },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'fit' },
                            value: { kind: 'EnumValue', value: 'crop' },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'w' },
                            value: {
                              kind: 'StringValue',
                              value: '800',
                              block: false,
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'ar' },
                            value: {
                              kind: 'StringValue',
                              value: '3:4',
                              block: false,
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'dpi' },
                            value: {
                              kind: 'StringValue',
                              value: '72',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ResponsiveImage' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StaffFragment, unknown>;
export const PeopleGalleryFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PeopleGallery' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PeopleGalleryRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'people' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Staff' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PeopleGalleryFragment, unknown>;
export const VideoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoFileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mimeType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'duration' } },
                { kind: 'Field', name: { kind: 'Name', value: 'framerate' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'mp4High' },
                  name: { kind: 'Name', value: 'mp4Url' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'res' },
                      value: { kind: 'EnumValue', value: 'high' },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'mp4Med' },
                  name: { kind: 'Name', value: 'mp4Url' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'res' },
                      value: { kind: 'EnumValue', value: 'medium' },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'mp4Low' },
                  name: { kind: 'Name', value: 'mp4Url' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'res' },
                      value: { kind: 'EnumValue', value: 'low' },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'thumbJpg' },
                  name: { kind: 'Name', value: 'thumbnailUrl' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'format' },
                      value: { kind: 'EnumValue', value: 'jpg' },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'thumbGif' },
                  name: { kind: 'Name', value: 'thumbnailUrl' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'format' },
                      value: { kind: 'EnumValue', value: 'gif' },
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoFragment, unknown>;
export const CoverVideoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CoverVideo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CoverVideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'overlayText' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'landscape' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Video' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'portrait' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Video' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CoverVideoFragment, unknown>;
export const PageSectionFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageSection' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageSectionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'blocks' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'SubsectionRecord' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'Subsection' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'links' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'AddressRecord' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'Address' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'ProjectGalleryRecord' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ProjectGallery' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'ImageGalleryRecord' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageGallery' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'PeopleGalleryRecord' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'PeopleGallery' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'CoverVideoRecord' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'CoverVideo' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: {
                            kind: 'Name',
                            value: 'CurrentVacanciesModelRecord',
                          },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'CurrentVacancies' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageSectionFragment, unknown>;
export const HtmlSectionFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'HtmlSection' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageSectionHtmlRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'htmlContent' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HtmlSectionFragment, unknown>;
export const PageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Page' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pageTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'urlSlug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'header' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Header' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'footer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Footer' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sections' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageSectionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PageSection' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageSectionHtmlRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'HtmlSection' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sectionDivider' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Icon' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PageMetaTags' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PageSeo' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageFragment, unknown>;
export const SiteMetaFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SiteMeta' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Site' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'globalSeo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'facebookPageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'twitterAccount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'titleSuffix' } },
                { kind: 'Field', name: { kind: 'Name', value: 'siteName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fallbackSeo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'twitterCard' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'favicon' },
            name: { kind: 'Name', value: 'faviconMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
                { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'locales' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SiteMetaFragment, unknown>;
export const PageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Page' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'urlSlug' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'urlSlug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'urlSlug' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Page' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_site' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SiteMeta' },
                },
              ],
            },
          },
        ],
      },
    },
    ...PageFragmentDoc.definitions,
    ...HeaderFragmentDoc.definitions,
    ...IconFragmentDoc.definitions,
    ...PageLinkFragmentDoc.definitions,
    ...PageMetaTagsFragmentDoc.definitions,
    ...PageSeoFragmentDoc.definitions,
    ...SocialLinksCollectionFragmentDoc.definitions,
    ...SocialLinkFragmentDoc.definitions,
    ...FooterFragmentDoc.definitions,
    ...FooterSectionFragmentDoc.definitions,
    ...AddressFragmentDoc.definitions,
    ...PageSectionFragmentDoc.definitions,
    ...SubsectionFragmentDoc.definitions,
    ...CurrentVacanciesFragmentDoc.definitions,
    ...ProjectGalleryFragmentDoc.definitions,
    ...ProjectFragmentDoc.definitions,
    ...ResponsiveImageFragmentDoc.definitions,
    ...ImageGalleryFragmentDoc.definitions,
    ...PeopleGalleryFragmentDoc.definitions,
    ...StaffFragmentDoc.definitions,
    ...CoverVideoFragmentDoc.definitions,
    ...VideoFragmentDoc.definitions,
    ...HtmlSectionFragmentDoc.definitions,
    ...SiteMetaFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
export const PageLinksDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PageLinks' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'pages' },
            name: { kind: 'Name', value: 'allPages' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    ...PageLinkFragmentDoc.definitions,
    ...PageMetaTagsFragmentDoc.definitions,
    ...PageSeoFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<PageLinksQuery, PageLinksQueryVariables>;
export const SocialLinksDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SocialLinks' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'socialLinksCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SocialLinksCollection' },
                },
              ],
            },
          },
        ],
      },
    },
    ...SocialLinksCollectionFragmentDoc.definitions,
    ...SocialLinkFragmentDoc.definitions,
    ...IconFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<SocialLinksQuery, SocialLinksQueryVariables>;
