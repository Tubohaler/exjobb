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
  address: InputMaybe<StringFilter>;
  city: InputMaybe<StringFilter>;
  country: InputMaybe<StringFilter>;
  id: InputMaybe<ItemIdFilter>;
  name: InputMaybe<StringFilter>;
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
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
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
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ItemId'];
  name: Scalars['String'];
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

export interface CodetestModelContentField {
  __typename: 'CodetestModelContentField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface CodetestModelFilter {
  OR: InputMaybe<Array<InputMaybe<CodetestModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  content: InputMaybe<StructuredTextFilter>;
  id: InputMaybe<ItemIdFilter>;
}

export enum CodetestModelOrderBy {
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
}

/** Record of type CodeTest (codetest) */
export interface CodetestRecord extends RecordInterface {
  __typename: 'CodetestRecord';
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
  content: Maybe<CodetestModelContentField>;
  id: Scalars['ItemId'];
}

/** Record of type CodeTest (codetest) */
export interface CodetestRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
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

/** Record of type Contact Info (contact_info) */
export interface ContactInfoRecord extends RecordInterface {
  __typename: 'ContactInfoRecord';
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
  billingAddress: AddressRecord;
  id: Scalars['ItemId'];
  internshipEmail: Scalars['String'];
  jobEmail: Scalars['String'];
  pressEmail: Scalars['String'];
  pressMaterialUrl: Scalars['String'];
  primaryEmail: Scalars['String'];
  studioAddress: AddressRecord;
}

/** Record of type Contact Info (contact_info) */
export interface ContactInfoRecord_SeoMetaTagsArgs {
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
  punch?: InputMaybe<Scalars['Float']>;
  quality?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
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
  punch?: InputMaybe<Scalars['Float']>;
  quality?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
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
  punch?: InputMaybe<Scalars['Float']>;
  quality?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
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
  id: InputMaybe<ItemIdFilter>;
  metaTags: InputMaybe<SeoFilter>;
  name: InputMaybe<StringFilter>;
  pageTitle: InputMaybe<StringFilter>;
  parent: InputMaybe<ParentFilter>;
  position: InputMaybe<PositionFilter>;
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

/** Record of type Page (page) */
export interface PageRecord extends RecordInterface {
  __typename: 'PageRecord';
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
  id: Scalars['ItemId'];
  metaTags: Maybe<SeoField>;
  name: Scalars['String'];
  pageTitle: Scalars['String'];
  parent: Maybe<PageRecord>;
  position: Maybe<Scalars['IntType']>;
  sections: Array<SectionRecord>;
  urlSlug: Maybe<Scalars['String']>;
}

/** Record of type Page (page) */
export interface PageRecord_SeoMetaTagsArgs {
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
  _allCodetestsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allImageGalleriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProjectsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSocialLinksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStaffsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: Maybe<CollectionMetadata>;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a specific record */
  address: Maybe<AddressRecord>;
  /** Returns a collection of records */
  allAddresses: Array<AddressRecord>;
  /** Returns a collection of records */
  allCodetests: Array<CodetestRecord>;
  /** Returns a collection of records */
  allImageGalleries: Array<ImageGalleryRecord>;
  /** Returns a collection of records */
  allPages: Array<PageRecord>;
  /** Returns a collection of records */
  allProjects: Array<ProjectRecord>;
  /** Returns a collection of records */
  allSocialLinks: Array<SocialLinkRecord>;
  /** Returns a collection of records */
  allStaffs: Array<StaffRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a specific record */
  codetest: Maybe<CodetestRecord>;
  /** Returns the single instance record */
  contactInfo: Maybe<ContactInfoRecord>;
  /** Returns a specific record */
  imageGallery: Maybe<ImageGalleryRecord>;
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
  staff: Maybe<StaffRecord>;
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
export interface Query_AllCodetestsMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<CodetestModelFilter>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface Query_AllImageGalleriesMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ImageGalleryModelFilter>;
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
export interface QueryAllCodetestsArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<CodetestModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CodetestModelOrderBy>>>;
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
export interface QueryAllStaffsArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<StaffModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StaffModelOrderBy>>>;
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
export interface QueryCodetestArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<CodetestModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CodetestModelOrderBy>>>;
}

/** The query root for this schema */
export interface QueryContactInfoArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

/** The query root for this schema */
export interface QueryImageGalleryArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ImageGalleryModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ImageGalleryModelOrderBy>>>;
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
export interface QueryStaffArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<StaffModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StaffModelOrderBy>>>;
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

/** Block of type Responsive Video (responsive_video) */
export interface ResponsiveVideoRecord extends RecordInterface {
  __typename: 'ResponsiveVideoRecord';
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
  portrait: VideoFileField;
}

/** Block of type Responsive Video (responsive_video) */
export interface ResponsiveVideoRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

export interface SectionModelContentField {
  __typename: 'SectionModelContentField';
  blocks: Array<ResponsiveVideoRecord>;
  links: Array<SectionModelContentLinksField>;
  value: Scalars['JsonField'];
}

export type SectionModelContentLinksField =
  | AddressRecord
  | ImageGalleryRecord
  | PeopleGalleryRecord
  | ProjectGalleryRecord
  | StaffRecord;

/** Block of type Page Section (section) */
export interface SectionRecord extends RecordInterface {
  __typename: 'SectionRecord';
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
  content: SectionModelContentField;
  id: Scalars['ItemId'];
  title: Scalars['String'];
}

/** Block of type Page Section (section) */
export interface SectionRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
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
  featuredImage: Maybe<ImageFileField>;
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

/** Specifies how to filter Structured Text fields */
export interface StructuredTextFilter {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

export interface Tag {
  __typename: 'Tag';
  attributes: Maybe<Scalars['MetaTagAttributes']>;
  content: Maybe<Scalars['String']>;
  tag: Scalars['String'];
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
  punch?: InputMaybe<Scalars['Float']>;
  quality?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
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

export type AddressFragment = {
  __typename: 'AddressRecord';
  id: string;
  name: string;
  title: string;
  zipCode: string;
  country: string;
  city: string;
  address: string;
};

export type GlobalSeoFragment = {
  __typename: 'GlobalSeoField';
  facebookPageUrl: string | null;
  twitterAccount: string | null;
  titleSuffix: string | null;
  siteName: string | null;
  fallbackSeo: {
    __typename: 'SeoField';
    description: string | null;
    title: string | null;
    twitterCard: string | null;
    image: {
      __typename: 'FileField';
      url: string;
      title: string | null;
      height: number | null;
      width: number | null;
    } | null;
  } | null;
};

export type IconFragment = {
  __typename: 'FileField';
  mimeType: string;
  url: string;
  width: number | null;
  height: number | null;
};

export type ImageGalleryFragment = {
  __typename: 'ImageGalleryRecord';
  id: string;
  title: string;
  images: Array<{
    __typename: 'ImageFileField';
    id: string;
    responsiveImage: {
      __typename: 'ResponsiveImage';
      src: string;
      alt: string | null;
      title: string | null;
      width: number;
      height: number;
      srcSet: string;
      sizes: string;
      bgColor: string | null;
      aspectRatio: number;
    };
  }>;
};

export type PageLinksFragment = {
  __typename: 'Query';
  pageLinks: Array<{
    __typename: 'PageRecord';
    id: string;
    urlSlug: string | null;
    name: string;
    position: number | null;
  }>;
};

export type PageFragment = {
  __typename: 'PageRecord';
  name: string;
  pageTitle: string;
  urlSlug: string | null;
  id: string;
  metaTags: {
    __typename: 'SeoField';
    description: string | null;
    title: string | null;
    twitterCard: string | null;
    image: {
      __typename: 'FileField';
      url: string;
      title: string | null;
      width: number | null;
      height: number | null;
    } | null;
  } | null;
  _seoMetaTags: Array<{
    __typename: 'Tag';
    content: string | null;
    tag: string;
    attributes: Record<string, string> | null;
  }>;
  sections: Array<{
    __typename: 'SectionRecord';
    id: string;
    title: string;
    content: {
      __typename: 'SectionModelContentField';
      value: unknown;
      links: Array<
        | {
            __typename: 'AddressRecord';
            id: string;
            name: string;
            title: string;
            zipCode: string;
            country: string;
            city: string;
            address: string;
          }
        | {
            __typename: 'ImageGalleryRecord';
            id: string;
            title: string;
            images: Array<{
              __typename: 'ImageFileField';
              id: string;
              responsiveImage: {
                __typename: 'ResponsiveImage';
                src: string;
                alt: string | null;
                title: string | null;
                width: number;
                height: number;
                srcSet: string;
                sizes: string;
                bgColor: string | null;
                aspectRatio: number;
              };
            }>;
          }
        | {
            __typename: 'PeopleGalleryRecord';
            id: string;
            people: Array<{
              __typename: 'StaffRecord';
              id: string;
              jobPosition: string;
              name: string;
              featuredImage: {
                __typename: 'ImageFileField';
                id: string;
                responsiveImage: {
                  __typename: 'ResponsiveImage';
                  src: string;
                  alt: string | null;
                  title: string | null;
                  width: number;
                  height: number;
                  srcSet: string;
                  sizes: string;
                  bgColor: string | null;
                  aspectRatio: number;
                };
              } | null;
            }>;
          }
        | {
            __typename: 'ProjectGalleryRecord';
            id: string;
            projects: Array<{
              __typename: 'ProjectRecord';
              id: string;
              name: string;
              pageUrl: string | null;
              steamUrl: string | null;
              humbleUrl: string | null;
              humbleButtonText: string | null;
              featuredImage: {
                __typename: 'ImageFileField';
                id: string;
                responsiveImage: {
                  __typename: 'ResponsiveImage';
                  src: string;
                  alt: string | null;
                  title: string | null;
                  width: number;
                  height: number;
                  srcSet: string;
                  sizes: string;
                  bgColor: string | null;
                  aspectRatio: number;
                };
              };
            }>;
          }
        | { __typename: 'StaffRecord' }
      >;
      blocks: Array<{
        __typename: 'ResponsiveVideoRecord';
        id: string;
        landscape: {
          __typename: 'VideoFileField';
          mimeType: string;
          width: number | null;
          height: number | null;
          video: {
            __typename: 'UploadVideoField';
            duration: number | null;
            framerate: number | null;
            mp4High: string | null;
            mp4Med: string | null;
            mp4Low: string | null;
            thumbJpg: string;
            thumbGif: string;
          };
        };
        portrait: {
          __typename: 'VideoFileField';
          mimeType: string;
          width: number | null;
          height: number | null;
          video: {
            __typename: 'UploadVideoField';
            duration: number | null;
            framerate: number | null;
            mp4High: string | null;
            mp4Med: string | null;
            mp4Low: string | null;
            thumbJpg: string;
            thumbGif: string;
          };
        };
      }>;
    };
  }>;
};

export type PeopleGalleryFragment = {
  __typename: 'PeopleGalleryRecord';
  id: string;
  people: Array<{
    __typename: 'StaffRecord';
    id: string;
    jobPosition: string;
    name: string;
    featuredImage: {
      __typename: 'ImageFileField';
      id: string;
      responsiveImage: {
        __typename: 'ResponsiveImage';
        src: string;
        alt: string | null;
        title: string | null;
        width: number;
        height: number;
        srcSet: string;
        sizes: string;
        bgColor: string | null;
        aspectRatio: number;
      };
    } | null;
  }>;
};

export type ProjectGalleryFragment = {
  __typename: 'ProjectGalleryRecord';
  id: string;
  projects: Array<{
    __typename: 'ProjectRecord';
    id: string;
    name: string;
    pageUrl: string | null;
    steamUrl: string | null;
    humbleUrl: string | null;
    humbleButtonText: string | null;
    featuredImage: {
      __typename: 'ImageFileField';
      id: string;
      responsiveImage: {
        __typename: 'ResponsiveImage';
        src: string;
        alt: string | null;
        title: string | null;
        width: number;
        height: number;
        srcSet: string;
        sizes: string;
        bgColor: string | null;
        aspectRatio: number;
      };
    };
  }>;
};

export type ProjectFragment = {
  __typename: 'ProjectRecord';
  id: string;
  name: string;
  pageUrl: string | null;
  steamUrl: string | null;
  humbleUrl: string | null;
  humbleButtonText: string | null;
  featuredImage: {
    __typename: 'ImageFileField';
    id: string;
    responsiveImage: {
      __typename: 'ResponsiveImage';
      src: string;
      alt: string | null;
      title: string | null;
      width: number;
      height: number;
      srcSet: string;
      sizes: string;
      bgColor: string | null;
      aspectRatio: number;
    };
  };
};

export type ResponsiveImageFragment = {
  __typename: 'ImageFileField';
  id: string;
  responsiveImage: {
    __typename: 'ResponsiveImage';
    src: string;
    alt: string | null;
    title: string | null;
    width: number;
    height: number;
    srcSet: string;
    sizes: string;
    bgColor: string | null;
    aspectRatio: number;
  };
};

export type ResponsiveVideoFragment = {
  __typename: 'ResponsiveVideoRecord';
  id: string;
  landscape: {
    __typename: 'VideoFileField';
    mimeType: string;
    width: number | null;
    height: number | null;
    video: {
      __typename: 'UploadVideoField';
      duration: number | null;
      framerate: number | null;
      mp4High: string | null;
      mp4Med: string | null;
      mp4Low: string | null;
      thumbJpg: string;
      thumbGif: string;
    };
  };
  portrait: {
    __typename: 'VideoFileField';
    mimeType: string;
    width: number | null;
    height: number | null;
    video: {
      __typename: 'UploadVideoField';
      duration: number | null;
      framerate: number | null;
      mp4High: string | null;
      mp4Med: string | null;
      mp4Low: string | null;
      thumbJpg: string;
      thumbGif: string;
    };
  };
};

export type SectionFragment = {
  __typename: 'SectionRecord';
  id: string;
  title: string;
  content: {
    __typename: 'SectionModelContentField';
    value: unknown;
    links: Array<
      | {
          __typename: 'AddressRecord';
          id: string;
          name: string;
          title: string;
          zipCode: string;
          country: string;
          city: string;
          address: string;
        }
      | {
          __typename: 'ImageGalleryRecord';
          id: string;
          title: string;
          images: Array<{
            __typename: 'ImageFileField';
            id: string;
            responsiveImage: {
              __typename: 'ResponsiveImage';
              src: string;
              alt: string | null;
              title: string | null;
              width: number;
              height: number;
              srcSet: string;
              sizes: string;
              bgColor: string | null;
              aspectRatio: number;
            };
          }>;
        }
      | {
          __typename: 'PeopleGalleryRecord';
          id: string;
          people: Array<{
            __typename: 'StaffRecord';
            id: string;
            jobPosition: string;
            name: string;
            featuredImage: {
              __typename: 'ImageFileField';
              id: string;
              responsiveImage: {
                __typename: 'ResponsiveImage';
                src: string;
                alt: string | null;
                title: string | null;
                width: number;
                height: number;
                srcSet: string;
                sizes: string;
                bgColor: string | null;
                aspectRatio: number;
              };
            } | null;
          }>;
        }
      | {
          __typename: 'ProjectGalleryRecord';
          id: string;
          projects: Array<{
            __typename: 'ProjectRecord';
            id: string;
            name: string;
            pageUrl: string | null;
            steamUrl: string | null;
            humbleUrl: string | null;
            humbleButtonText: string | null;
            featuredImage: {
              __typename: 'ImageFileField';
              id: string;
              responsiveImage: {
                __typename: 'ResponsiveImage';
                src: string;
                alt: string | null;
                title: string | null;
                width: number;
                height: number;
                srcSet: string;
                sizes: string;
                bgColor: string | null;
                aspectRatio: number;
              };
            };
          }>;
        }
      | { __typename: 'StaffRecord' }
    >;
    blocks: Array<{
      __typename: 'ResponsiveVideoRecord';
      id: string;
      landscape: {
        __typename: 'VideoFileField';
        mimeType: string;
        width: number | null;
        height: number | null;
        video: {
          __typename: 'UploadVideoField';
          duration: number | null;
          framerate: number | null;
          mp4High: string | null;
          mp4Med: string | null;
          mp4Low: string | null;
          thumbJpg: string;
          thumbGif: string;
        };
      };
      portrait: {
        __typename: 'VideoFileField';
        mimeType: string;
        width: number | null;
        height: number | null;
        video: {
          __typename: 'UploadVideoField';
          duration: number | null;
          framerate: number | null;
          mp4High: string | null;
          mp4Med: string | null;
          mp4Low: string | null;
          thumbJpg: string;
          thumbGif: string;
        };
      };
    }>;
  };
};

export type SocialLinkFragment = {
  __typename: 'SocialLinkRecord';
  linkTitle: string | null;
  id: string;
  title: string;
  href: string;
  icon: {
    __typename: 'FileField';
    mimeType: string;
    url: string;
    width: number | null;
    height: number | null;
  };
};

export type StaffFragment = {
  __typename: 'StaffRecord';
  id: string;
  jobPosition: string;
  name: string;
  featuredImage: {
    __typename: 'ImageFileField';
    id: string;
    responsiveImage: {
      __typename: 'ResponsiveImage';
      src: string;
      alt: string | null;
      title: string | null;
      width: number;
      height: number;
      srcSet: string;
      sizes: string;
      bgColor: string | null;
      aspectRatio: number;
    };
  } | null;
};

export type VideoFragment = {
  __typename: 'VideoFileField';
  mimeType: string;
  width: number | null;
  height: number | null;
  video: {
    __typename: 'UploadVideoField';
    duration: number | null;
    framerate: number | null;
    mp4High: string | null;
    mp4Med: string | null;
    mp4Low: string | null;
    thumbJpg: string;
    thumbGif: string;
  };
};

export type PageQueryVariables = Exact<{
  name: InputMaybe<Scalars['String']>;
}>;

export type PageQuery = {
  __typename: 'Query';
  page: {
    __typename: 'PageRecord';
    name: string;
    pageTitle: string;
    urlSlug: string | null;
    id: string;
    metaTags: {
      __typename: 'SeoField';
      description: string | null;
      title: string | null;
      twitterCard: string | null;
      image: {
        __typename: 'FileField';
        url: string;
        title: string | null;
        width: number | null;
        height: number | null;
      } | null;
    } | null;
    _seoMetaTags: Array<{
      __typename: 'Tag';
      content: string | null;
      tag: string;
      attributes: Record<string, string> | null;
    }>;
    sections: Array<{
      __typename: 'SectionRecord';
      id: string;
      title: string;
      content: {
        __typename: 'SectionModelContentField';
        value: unknown;
        links: Array<
          | {
              __typename: 'AddressRecord';
              id: string;
              name: string;
              title: string;
              zipCode: string;
              country: string;
              city: string;
              address: string;
            }
          | {
              __typename: 'ImageGalleryRecord';
              id: string;
              title: string;
              images: Array<{
                __typename: 'ImageFileField';
                id: string;
                responsiveImage: {
                  __typename: 'ResponsiveImage';
                  src: string;
                  alt: string | null;
                  title: string | null;
                  width: number;
                  height: number;
                  srcSet: string;
                  sizes: string;
                  bgColor: string | null;
                  aspectRatio: number;
                };
              }>;
            }
          | {
              __typename: 'PeopleGalleryRecord';
              id: string;
              people: Array<{
                __typename: 'StaffRecord';
                id: string;
                jobPosition: string;
                name: string;
                featuredImage: {
                  __typename: 'ImageFileField';
                  id: string;
                  responsiveImage: {
                    __typename: 'ResponsiveImage';
                    src: string;
                    alt: string | null;
                    title: string | null;
                    width: number;
                    height: number;
                    srcSet: string;
                    sizes: string;
                    bgColor: string | null;
                    aspectRatio: number;
                  };
                } | null;
              }>;
            }
          | {
              __typename: 'ProjectGalleryRecord';
              id: string;
              projects: Array<{
                __typename: 'ProjectRecord';
                id: string;
                name: string;
                pageUrl: string | null;
                steamUrl: string | null;
                humbleUrl: string | null;
                humbleButtonText: string | null;
                featuredImage: {
                  __typename: 'ImageFileField';
                  id: string;
                  responsiveImage: {
                    __typename: 'ResponsiveImage';
                    src: string;
                    alt: string | null;
                    title: string | null;
                    width: number;
                    height: number;
                    srcSet: string;
                    sizes: string;
                    bgColor: string | null;
                    aspectRatio: number;
                  };
                };
              }>;
            }
          | { __typename: 'StaffRecord' }
        >;
        blocks: Array<{
          __typename: 'ResponsiveVideoRecord';
          id: string;
          landscape: {
            __typename: 'VideoFileField';
            mimeType: string;
            width: number | null;
            height: number | null;
            video: {
              __typename: 'UploadVideoField';
              duration: number | null;
              framerate: number | null;
              mp4High: string | null;
              mp4Med: string | null;
              mp4Low: string | null;
              thumbJpg: string;
              thumbGif: string;
            };
          };
          portrait: {
            __typename: 'VideoFileField';
            mimeType: string;
            width: number | null;
            height: number | null;
            video: {
              __typename: 'UploadVideoField';
              duration: number | null;
              framerate: number | null;
              mp4High: string | null;
              mp4Med: string | null;
              mp4Low: string | null;
              thumbJpg: string;
              thumbGif: string;
            };
          };
        }>;
      };
    }>;
  } | null;
  site: {
    __typename: 'Site';
    favicon: { __typename: 'FileField'; url: string; mimeType: string } | null;
    globalSeo: {
      __typename: 'GlobalSeoField';
      facebookPageUrl: string | null;
      twitterAccount: string | null;
      titleSuffix: string | null;
      siteName: string | null;
      fallbackSeo: {
        __typename: 'SeoField';
        description: string | null;
        title: string | null;
        twitterCard: string | null;
        image: {
          __typename: 'FileField';
          url: string;
          title: string | null;
          height: number | null;
          width: number | null;
        } | null;
      } | null;
    } | null;
  };
  socialLinks: Array<{
    __typename: 'SocialLinkRecord';
    linkTitle: string | null;
    id: string;
    title: string;
    href: string;
    icon: {
      __typename: 'FileField';
      mimeType: string;
      url: string;
      width: number | null;
      height: number | null;
    };
  }>;
  pageLinks: Array<{
    __typename: 'PageRecord';
    id: string;
    urlSlug: string | null;
    name: string;
    position: number | null;
  }>;
};

export const GlobalSeoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GlobalSeo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GlobalSeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'facebookPageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterAccount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'titleSuffix' } },
          { kind: 'Field', name: { kind: 'Name', value: 'siteName' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fallbackSeo' },
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
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'height' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'width' } },
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
} as unknown as DocumentNode<GlobalSeoFragment, unknown>;
export const PageLinksFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageLinks' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Query' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'pageLinks' },
            name: { kind: 'Name', value: 'allPages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'EnumValue', value: 'position_ASC' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'urlSlug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'position' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageLinksFragment, unknown>;
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
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zipCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'country' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'address' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddressFragment, unknown>;
export const ResponsiveImageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ResponsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageFileField' },
      },
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
                name: { kind: 'Name', value: 'sizes' },
                value: {
                  kind: 'StringValue',
                  value: '(max-width: 512px) 100vw, 512px',
                  block: false,
                },
              },
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
                  ],
                },
              },
            ],
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
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'featuredImage' },
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
export const ResponsiveVideoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ResponsiveVideo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveVideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
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
} as unknown as DocumentNode<ResponsiveVideoFragment, unknown>;
export const SectionFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Section' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SectionRecord' },
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
                    ],
                  },
                },
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
                          name: {
                            kind: 'Name',
                            value: 'ResponsiveVideoRecord',
                          },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ResponsiveVideo' },
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
} as unknown as DocumentNode<SectionFragment, unknown>;
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
            name: { kind: 'Name', value: 'metaTags' },
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
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'height' },
                      },
                    ],
                  },
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
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
                { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
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
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Section' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageFragment, unknown>;
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
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
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
                      name: { kind: 'Name', value: 'name' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'name' },
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
            alias: { kind: 'Name', value: 'site' },
            name: { kind: 'Name', value: '_site' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'favicon' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'mimeType' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'globalSeo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'GlobalSeo' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'socialLinks' },
            name: { kind: 'Name', value: 'allSocialLinks' },
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
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'PageLinks' },
          },
        ],
      },
    },
    ...PageFragmentDoc.definitions,
    ...SectionFragmentDoc.definitions,
    ...AddressFragmentDoc.definitions,
    ...ProjectGalleryFragmentDoc.definitions,
    ...ProjectFragmentDoc.definitions,
    ...ResponsiveImageFragmentDoc.definitions,
    ...ImageGalleryFragmentDoc.definitions,
    ...PeopleGalleryFragmentDoc.definitions,
    ...StaffFragmentDoc.definitions,
    ...ResponsiveVideoFragmentDoc.definitions,
    ...VideoFragmentDoc.definitions,
    ...GlobalSeoFragmentDoc.definitions,
    ...SocialLinkFragmentDoc.definitions,
    ...IconFragmentDoc.definitions,
    ...PageLinksFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<PageQuery, PageQueryVariables>;

export type PageName = 'home' | 'about' | 'contact' | 'career';

export interface SvgIconFragment extends IconFragment {
  mimeType: 'image/svg+xml';
  inlineHTML?: string;
}

export interface StaticPageData extends PageQuery {
  allSocialLinks: Array<
    Omit<SocialLinkFragment, 'icon'> & {
      icon: SvgIconFragment;
    }
  >;
}

export type StaticPageProps = { data: StaticPageData };