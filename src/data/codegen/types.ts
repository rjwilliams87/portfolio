export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  fileName: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['Int']['output']>;
  linkedFrom: Maybe<AssetLinkingCollections>;
  size: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  transform: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType: InputMaybe<Scalars['String']['input']>;
  contentType_contains: InputMaybe<Scalars['String']['input']>;
  contentType_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains: InputMaybe<Scalars['String']['input']>;
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName: InputMaybe<Scalars['String']['input']>;
  fileName_contains: InputMaybe<Scalars['String']['input']>;
  fileName_exists: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains: InputMaybe<Scalars['String']['input']>;
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height: InputMaybe<Scalars['Int']['input']>;
  height_exists: InputMaybe<Scalars['Boolean']['input']>;
  height_gt: InputMaybe<Scalars['Int']['input']>;
  height_gte: InputMaybe<Scalars['Int']['input']>;
  height_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt: InputMaybe<Scalars['Int']['input']>;
  height_lte: InputMaybe<Scalars['Int']['input']>;
  height_not: InputMaybe<Scalars['Int']['input']>;
  height_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size: InputMaybe<Scalars['Int']['input']>;
  size_exists: InputMaybe<Scalars['Boolean']['input']>;
  size_gt: InputMaybe<Scalars['Int']['input']>;
  size_gte: InputMaybe<Scalars['Int']['input']>;
  size_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt: InputMaybe<Scalars['Int']['input']>;
  size_lte: InputMaybe<Scalars['Int']['input']>;
  size_not: InputMaybe<Scalars['Int']['input']>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url: InputMaybe<Scalars['String']['input']>;
  url_contains: InputMaybe<Scalars['String']['input']>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not: InputMaybe<Scalars['String']['input']>;
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width: InputMaybe<Scalars['Int']['input']>;
  width_exists: InputMaybe<Scalars['Boolean']['input']>;
  width_gt: InputMaybe<Scalars['Int']['input']>;
  width_gte: InputMaybe<Scalars['Int']['input']>;
  width_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt: InputMaybe<Scalars['Int']['input']>;
  width_lte: InputMaybe<Scalars['Int']['input']>;
  width_not: InputMaybe<Scalars['Int']['input']>;
  width_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentProjectCollection: Maybe<ComponentProjectCollection>;
  entryCollection: Maybe<EntryCollection>;
  modulePageHeaderCollection: Maybe<ModulePageHeaderCollection>;
};


export type AssetLinkingCollectionsComponentProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsModulePageHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentCtaButton) */
export type ComponentCtaButton = Entry & {
  __typename?: 'ComponentCtaButton';
  contentfulMetadata: ContentfulMetadata;
  entryTitle: Maybe<Scalars['String']['output']>;
  link: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ComponentCtaButtonLinkingCollections>;
  sys: Sys;
  text: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentCtaButton) */
export type ComponentCtaButtonEntryTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentCtaButton) */
export type ComponentCtaButtonLinkArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentCtaButton) */
export type ComponentCtaButtonLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentCtaButton) */
export type ComponentCtaButtonTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ComponentCtaButtonCollection = {
  __typename?: 'ComponentCtaButtonCollection';
  items: Array<Maybe<ComponentCtaButton>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentCtaButtonFilter = {
  AND: InputMaybe<Array<InputMaybe<ComponentCtaButtonFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ComponentCtaButtonFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  entryTitle: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link: InputMaybe<Scalars['String']['input']>;
  link_contains: InputMaybe<Scalars['String']['input']>;
  link_exists: InputMaybe<Scalars['Boolean']['input']>;
  link_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not: InputMaybe<Scalars['String']['input']>;
  link_not_contains: InputMaybe<Scalars['String']['input']>;
  link_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  text: InputMaybe<Scalars['String']['input']>;
  text_contains: InputMaybe<Scalars['String']['input']>;
  text_exists: InputMaybe<Scalars['Boolean']['input']>;
  text_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not: InputMaybe<Scalars['String']['input']>;
  text_not_contains: InputMaybe<Scalars['String']['input']>;
  text_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCtaButtonLinkingCollections = {
  __typename?: 'ComponentCtaButtonLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type ComponentCtaButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentCtaButtonOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentNavItem) */
export type ComponentNavItem = Entry & {
  __typename?: 'ComponentNavItem';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<ComponentNavItemLinkingCollections>;
  slug: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentNavItem) */
export type ComponentNavItemLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentNavItem) */
export type ComponentNavItemSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentNavItem) */
export type ComponentNavItemTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ComponentNavItemCollection = {
  __typename?: 'ComponentNavItemCollection';
  items: Array<Maybe<ComponentNavItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentNavItemFilter = {
  AND: InputMaybe<Array<InputMaybe<ComponentNavItemFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ComponentNavItemFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentNavItemLinkingCollections = {
  __typename?: 'ComponentNavItemLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  moduleNavListCollection: Maybe<ModuleNavListCollection>;
};


export type ComponentNavItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentNavItemLinkingCollectionsModuleNavListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentNavItemLinkingCollectionsModuleNavListCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentNavItemLinkingCollectionsModuleNavListCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentNavItemOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentProject) */
export type ComponentProject = Entry & {
  __typename?: 'ComponentProject';
  completionYear: Maybe<Scalars['DateTime']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<ComponentProjectDescription>;
  image: Maybe<Asset>;
  linkedFrom: Maybe<ComponentProjectLinkingCollections>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  tools: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentProject) */
export type ComponentProjectCompletionYearArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentProject) */
export type ComponentProjectDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentProject) */
export type ComponentProjectImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentProject) */
export type ComponentProjectLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentProject) */
export type ComponentProjectTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentProject) */
export type ComponentProjectToolsArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ComponentProjectCollection = {
  __typename?: 'ComponentProjectCollection';
  items: Array<Maybe<ComponentProject>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentProjectDescription = {
  __typename?: 'ComponentProjectDescription';
  json: Scalars['JSON']['output'];
  links: ComponentProjectDescriptionLinks;
};

export type ComponentProjectDescriptionAssets = {
  __typename?: 'ComponentProjectDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentProjectDescriptionEntries = {
  __typename?: 'ComponentProjectDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentProjectDescriptionLinks = {
  __typename?: 'ComponentProjectDescriptionLinks';
  assets: ComponentProjectDescriptionAssets;
  entries: ComponentProjectDescriptionEntries;
  resources: ComponentProjectDescriptionResources;
};

export type ComponentProjectDescriptionResources = {
  __typename?: 'ComponentProjectDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type ComponentProjectFilter = {
  AND: InputMaybe<Array<InputMaybe<ComponentProjectFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ComponentProjectFilter>>>;
  completionYear: InputMaybe<Scalars['DateTime']['input']>;
  completionYear_exists: InputMaybe<Scalars['Boolean']['input']>;
  completionYear_gt: InputMaybe<Scalars['DateTime']['input']>;
  completionYear_gte: InputMaybe<Scalars['DateTime']['input']>;
  completionYear_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  completionYear_lt: InputMaybe<Scalars['DateTime']['input']>;
  completionYear_lte: InputMaybe<Scalars['DateTime']['input']>;
  completionYear_not: InputMaybe<Scalars['DateTime']['input']>;
  completionYear_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tools_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tools_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tools_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tools_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentProjectLinkingCollections = {
  __typename?: 'ComponentProjectLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  moduleProjectsCollection: Maybe<ModuleProjectsCollection>;
};


export type ComponentProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentProjectLinkingCollectionsModuleProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentProjectLinkingCollectionsModuleProjectsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentProjectLinkingCollectionsModuleProjectsCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentProjectOrder {
  CompletionYearAsc = 'completionYear_ASC',
  CompletionYearDesc = 'completionYear_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentService) */
export type ComponentService = Entry & {
  __typename?: 'ComponentService';
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<ComponentServiceDescription>;
  linkedFrom: Maybe<ComponentServiceLinkingCollections>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentService) */
export type ComponentServiceDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentService) */
export type ComponentServiceLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentService) */
export type ComponentServiceTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServiceCollection = {
  __typename?: 'ComponentServiceCollection';
  items: Array<Maybe<ComponentService>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentServiceDescription = {
  __typename?: 'ComponentServiceDescription';
  json: Scalars['JSON']['output'];
  links: ComponentServiceDescriptionLinks;
};

export type ComponentServiceDescriptionAssets = {
  __typename?: 'ComponentServiceDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentServiceDescriptionEntries = {
  __typename?: 'ComponentServiceDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentServiceDescriptionLinks = {
  __typename?: 'ComponentServiceDescriptionLinks';
  assets: ComponentServiceDescriptionAssets;
  entries: ComponentServiceDescriptionEntries;
  resources: ComponentServiceDescriptionResources;
};

export type ComponentServiceDescriptionResources = {
  __typename?: 'ComponentServiceDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type ComponentServiceFilter = {
  AND: InputMaybe<Array<InputMaybe<ComponentServiceFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ComponentServiceFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentServiceLinkingCollections = {
  __typename?: 'ComponentServiceLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  moduleServicesCollection: Maybe<ModuleServicesCollection>;
};


export type ComponentServiceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentServiceLinkingCollectionsModuleServicesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentServiceLinkingCollectionsModuleServicesCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentServiceLinkingCollectionsModuleServicesCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentServiceOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentWorkHistoryItem) */
export type ComponentWorkHistoryItem = Entry & {
  __typename?: 'ComponentWorkHistoryItem';
  companyName: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<ComponentWorkHistoryItemDescription>;
  endDate: Maybe<Scalars['DateTime']['output']>;
  linkedFrom: Maybe<ComponentWorkHistoryItemLinkingCollections>;
  skills: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  startDate: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentWorkHistoryItem) */
export type ComponentWorkHistoryItemCompanyNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentWorkHistoryItem) */
export type ComponentWorkHistoryItemDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentWorkHistoryItem) */
export type ComponentWorkHistoryItemEndDateArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentWorkHistoryItem) */
export type ComponentWorkHistoryItemLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentWorkHistoryItem) */
export type ComponentWorkHistoryItemSkillsArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentWorkHistoryItem) */
export type ComponentWorkHistoryItemStartDateArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/componentWorkHistoryItem) */
export type ComponentWorkHistoryItemTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWorkHistoryItemCollection = {
  __typename?: 'ComponentWorkHistoryItemCollection';
  items: Array<Maybe<ComponentWorkHistoryItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentWorkHistoryItemDescription = {
  __typename?: 'ComponentWorkHistoryItemDescription';
  json: Scalars['JSON']['output'];
  links: ComponentWorkHistoryItemDescriptionLinks;
};

export type ComponentWorkHistoryItemDescriptionAssets = {
  __typename?: 'ComponentWorkHistoryItemDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentWorkHistoryItemDescriptionEntries = {
  __typename?: 'ComponentWorkHistoryItemDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentWorkHistoryItemDescriptionLinks = {
  __typename?: 'ComponentWorkHistoryItemDescriptionLinks';
  assets: ComponentWorkHistoryItemDescriptionAssets;
  entries: ComponentWorkHistoryItemDescriptionEntries;
  resources: ComponentWorkHistoryItemDescriptionResources;
};

export type ComponentWorkHistoryItemDescriptionResources = {
  __typename?: 'ComponentWorkHistoryItemDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type ComponentWorkHistoryItemFilter = {
  AND: InputMaybe<Array<InputMaybe<ComponentWorkHistoryItemFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ComponentWorkHistoryItemFilter>>>;
  companyName: InputMaybe<Scalars['String']['input']>;
  companyName_contains: InputMaybe<Scalars['String']['input']>;
  companyName_exists: InputMaybe<Scalars['Boolean']['input']>;
  companyName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  companyName_not: InputMaybe<Scalars['String']['input']>;
  companyName_not_contains: InputMaybe<Scalars['String']['input']>;
  companyName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  endDate: InputMaybe<Scalars['DateTime']['input']>;
  endDate_exists: InputMaybe<Scalars['Boolean']['input']>;
  endDate_gt: InputMaybe<Scalars['DateTime']['input']>;
  endDate_gte: InputMaybe<Scalars['DateTime']['input']>;
  endDate_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endDate_lt: InputMaybe<Scalars['DateTime']['input']>;
  endDate_lte: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  skills_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_exists: InputMaybe<Scalars['Boolean']['input']>;
  startDate: InputMaybe<Scalars['DateTime']['input']>;
  startDate_exists: InputMaybe<Scalars['Boolean']['input']>;
  startDate_gt: InputMaybe<Scalars['DateTime']['input']>;
  startDate_gte: InputMaybe<Scalars['DateTime']['input']>;
  startDate_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startDate_lt: InputMaybe<Scalars['DateTime']['input']>;
  startDate_lte: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentWorkHistoryItemLinkingCollections = {
  __typename?: 'ComponentWorkHistoryItemLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  moduleWorkHistoryCollection: Maybe<ModuleWorkHistoryCollection>;
};


export type ComponentWorkHistoryItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentWorkHistoryItemLinkingCollectionsModuleWorkHistoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentWorkHistoryItemLinkingCollectionsModuleWorkHistoryCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentWorkHistoryItemLinkingCollectionsModuleWorkHistoryCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentWorkHistoryItemOrder {
  CompanyNameAsc = 'companyName_ASC',
  CompanyNameDesc = 'companyName_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleAboutMe) */
export type ModuleAboutMe = Entry & {
  __typename?: 'ModuleAboutMe';
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<ModuleAboutMeDescription>;
  email: Maybe<Scalars['String']['output']>;
  entryTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ModuleAboutMeLinkingCollections>;
  phone: Maybe<Scalars['String']['output']>;
  roles: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleAboutMe) */
export type ModuleAboutMeDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleAboutMe) */
export type ModuleAboutMeEmailArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleAboutMe) */
export type ModuleAboutMeEntryTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleAboutMe) */
export type ModuleAboutMeLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleAboutMe) */
export type ModuleAboutMePhoneArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleAboutMe) */
export type ModuleAboutMeRolesArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ModuleAboutMeCollection = {
  __typename?: 'ModuleAboutMeCollection';
  items: Array<Maybe<ModuleAboutMe>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ModuleAboutMeDescription = {
  __typename?: 'ModuleAboutMeDescription';
  json: Scalars['JSON']['output'];
  links: ModuleAboutMeDescriptionLinks;
};

export type ModuleAboutMeDescriptionAssets = {
  __typename?: 'ModuleAboutMeDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ModuleAboutMeDescriptionEntries = {
  __typename?: 'ModuleAboutMeDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ModuleAboutMeDescriptionLinks = {
  __typename?: 'ModuleAboutMeDescriptionLinks';
  assets: ModuleAboutMeDescriptionAssets;
  entries: ModuleAboutMeDescriptionEntries;
  resources: ModuleAboutMeDescriptionResources;
};

export type ModuleAboutMeDescriptionResources = {
  __typename?: 'ModuleAboutMeDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type ModuleAboutMeFilter = {
  AND: InputMaybe<Array<InputMaybe<ModuleAboutMeFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ModuleAboutMeFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  email_contains: InputMaybe<Scalars['String']['input']>;
  email_exists: InputMaybe<Scalars['Boolean']['input']>;
  email_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not: InputMaybe<Scalars['String']['input']>;
  email_not_contains: InputMaybe<Scalars['String']['input']>;
  email_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone: InputMaybe<Scalars['String']['input']>;
  phone_contains: InputMaybe<Scalars['String']['input']>;
  phone_exists: InputMaybe<Scalars['Boolean']['input']>;
  phone_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone_not: InputMaybe<Scalars['String']['input']>;
  phone_not_contains: InputMaybe<Scalars['String']['input']>;
  phone_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  roles_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  roles_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  roles_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  roles_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type ModuleAboutMeLinkingCollections = {
  __typename?: 'ModuleAboutMeLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  pageCollection: Maybe<PageCollection>;
};


export type ModuleAboutMeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ModuleAboutMeLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModuleAboutMeLinkingCollectionsPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ModuleAboutMeLinkingCollectionsPageCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ModuleAboutMeOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleNavList) */
export type ModuleNavList = Entry & {
  __typename?: 'ModuleNavList';
  componentsCollection: Maybe<ModuleNavListComponentsCollection>;
  contentfulMetadata: ContentfulMetadata;
  entryTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ModuleNavListLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleNavList) */
export type ModuleNavListComponentsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModuleNavListComponentsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentNavItemFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleNavList) */
export type ModuleNavListEntryTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleNavList) */
export type ModuleNavListLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ModuleNavListCollection = {
  __typename?: 'ModuleNavListCollection';
  items: Array<Maybe<ModuleNavList>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ModuleNavListComponentsCollection = {
  __typename?: 'ModuleNavListComponentsCollection';
  items: Array<Maybe<ComponentNavItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ModuleNavListComponentsCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ModuleNavListFilter = {
  AND: InputMaybe<Array<InputMaybe<ModuleNavListFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ModuleNavListFilter>>>;
  components: InputMaybe<CfComponentNavItemNestedFilter>;
  componentsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  entryTitle: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type ModuleNavListLinkingCollections = {
  __typename?: 'ModuleNavListLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type ModuleNavListLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ModuleNavListOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/modulePageHeader) */
export type ModulePageHeader = Entry & {
  __typename?: 'ModulePageHeader';
  contentfulMetadata: ContentfulMetadata;
  entryTitle: Maybe<Scalars['String']['output']>;
  image: Maybe<Asset>;
  layout: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ModulePageHeaderLinkingCollections>;
  size: Maybe<Scalars['String']['output']>;
  sys: Sys;
  text: Maybe<ModulePageHeaderText>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/modulePageHeader) */
export type ModulePageHeaderEntryTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/modulePageHeader) */
export type ModulePageHeaderImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/modulePageHeader) */
export type ModulePageHeaderLayoutArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/modulePageHeader) */
export type ModulePageHeaderLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/modulePageHeader) */
export type ModulePageHeaderSizeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/modulePageHeader) */
export type ModulePageHeaderTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ModulePageHeaderCollection = {
  __typename?: 'ModulePageHeaderCollection';
  items: Array<Maybe<ModulePageHeader>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ModulePageHeaderFilter = {
  AND: InputMaybe<Array<InputMaybe<ModulePageHeaderFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ModulePageHeaderFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  entryTitle: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  layout: InputMaybe<Scalars['String']['input']>;
  layout_contains: InputMaybe<Scalars['String']['input']>;
  layout_exists: InputMaybe<Scalars['Boolean']['input']>;
  layout_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout_not: InputMaybe<Scalars['String']['input']>;
  layout_not_contains: InputMaybe<Scalars['String']['input']>;
  layout_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size: InputMaybe<Scalars['String']['input']>;
  size_contains: InputMaybe<Scalars['String']['input']>;
  size_exists: InputMaybe<Scalars['Boolean']['input']>;
  size_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size_not: InputMaybe<Scalars['String']['input']>;
  size_not_contains: InputMaybe<Scalars['String']['input']>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  text_contains: InputMaybe<Scalars['String']['input']>;
  text_exists: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains: InputMaybe<Scalars['String']['input']>;
};

export type ModulePageHeaderLinkingCollections = {
  __typename?: 'ModulePageHeaderLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  pageCollection: Maybe<PageCollection>;
};


export type ModulePageHeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ModulePageHeaderLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModulePageHeaderLinkingCollectionsPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ModulePageHeaderLinkingCollectionsPageCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ModulePageHeaderOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ModulePageHeaderText = {
  __typename?: 'ModulePageHeaderText';
  json: Scalars['JSON']['output'];
  links: ModulePageHeaderTextLinks;
};

export type ModulePageHeaderTextAssets = {
  __typename?: 'ModulePageHeaderTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ModulePageHeaderTextEntries = {
  __typename?: 'ModulePageHeaderTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ModulePageHeaderTextLinks = {
  __typename?: 'ModulePageHeaderTextLinks';
  assets: ModulePageHeaderTextAssets;
  entries: ModulePageHeaderTextEntries;
  resources: ModulePageHeaderTextResources;
};

export type ModulePageHeaderTextResources = {
  __typename?: 'ModulePageHeaderTextResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleProjects) */
export type ModuleProjects = Entry & {
  __typename?: 'ModuleProjects';
  componentsCollection: Maybe<ModuleProjectsComponentsCollection>;
  contentfulMetadata: ContentfulMetadata;
  entryTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ModuleProjectsLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleProjects) */
export type ModuleProjectsComponentsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModuleProjectsComponentsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentProjectFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleProjects) */
export type ModuleProjectsEntryTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleProjects) */
export type ModuleProjectsLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ModuleProjectsCollection = {
  __typename?: 'ModuleProjectsCollection';
  items: Array<Maybe<ModuleProjects>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ModuleProjectsComponentsCollection = {
  __typename?: 'ModuleProjectsComponentsCollection';
  items: Array<Maybe<ComponentProject>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ModuleProjectsComponentsCollectionOrder {
  CompletionYearAsc = 'completionYear_ASC',
  CompletionYearDesc = 'completionYear_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ModuleProjectsFilter = {
  AND: InputMaybe<Array<InputMaybe<ModuleProjectsFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ModuleProjectsFilter>>>;
  components: InputMaybe<CfComponentProjectNestedFilter>;
  componentsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  entryTitle: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type ModuleProjectsLinkingCollections = {
  __typename?: 'ModuleProjectsLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  pageCollection: Maybe<PageCollection>;
};


export type ModuleProjectsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ModuleProjectsLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModuleProjectsLinkingCollectionsPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ModuleProjectsLinkingCollectionsPageCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ModuleProjectsOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleServices) */
export type ModuleServices = Entry & {
  __typename?: 'ModuleServices';
  componentsCollection: Maybe<ModuleServicesComponentsCollection>;
  contentfulMetadata: ContentfulMetadata;
  entryTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ModuleServicesLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleServices) */
export type ModuleServicesComponentsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModuleServicesComponentsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentServiceFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleServices) */
export type ModuleServicesEntryTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleServices) */
export type ModuleServicesLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ModuleServicesCollection = {
  __typename?: 'ModuleServicesCollection';
  items: Array<Maybe<ModuleServices>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ModuleServicesComponentsCollection = {
  __typename?: 'ModuleServicesComponentsCollection';
  items: Array<Maybe<ComponentService>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ModuleServicesComponentsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ModuleServicesFilter = {
  AND: InputMaybe<Array<InputMaybe<ModuleServicesFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ModuleServicesFilter>>>;
  components: InputMaybe<CfComponentServiceNestedFilter>;
  componentsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  entryTitle: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type ModuleServicesLinkingCollections = {
  __typename?: 'ModuleServicesLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  pageCollection: Maybe<PageCollection>;
};


export type ModuleServicesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ModuleServicesLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModuleServicesLinkingCollectionsPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ModuleServicesLinkingCollectionsPageCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ModuleServicesOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleWorkHistory) */
export type ModuleWorkHistory = Entry & {
  __typename?: 'ModuleWorkHistory';
  componentsCollection: Maybe<ModuleWorkHistoryComponentsCollection>;
  contentfulMetadata: ContentfulMetadata;
  entryTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ModuleWorkHistoryLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleWorkHistory) */
export type ModuleWorkHistoryComponentsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModuleWorkHistoryComponentsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentWorkHistoryItemFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleWorkHistory) */
export type ModuleWorkHistoryEntryTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/moduleWorkHistory) */
export type ModuleWorkHistoryLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ModuleWorkHistoryCollection = {
  __typename?: 'ModuleWorkHistoryCollection';
  items: Array<Maybe<ModuleWorkHistory>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ModuleWorkHistoryComponentsCollection = {
  __typename?: 'ModuleWorkHistoryComponentsCollection';
  items: Array<Maybe<ComponentWorkHistoryItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ModuleWorkHistoryComponentsCollectionOrder {
  CompanyNameAsc = 'companyName_ASC',
  CompanyNameDesc = 'companyName_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ModuleWorkHistoryFilter = {
  AND: InputMaybe<Array<InputMaybe<ModuleWorkHistoryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ModuleWorkHistoryFilter>>>;
  components: InputMaybe<CfComponentWorkHistoryItemNestedFilter>;
  componentsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  entryTitle: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type ModuleWorkHistoryLinkingCollections = {
  __typename?: 'ModuleWorkHistoryLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  pageCollection: Maybe<PageCollection>;
};


export type ModuleWorkHistoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ModuleWorkHistoryLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModuleWorkHistoryLinkingCollectionsPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ModuleWorkHistoryLinkingCollectionsPageCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ModuleWorkHistoryOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  contentfulMetadata: ContentfulMetadata;
  entryTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<PageLinkingCollections>;
  modulesCollection: Maybe<PageModulesCollection>;
  slug: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/page) */
export type PageEntryTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/page) */
export type PageModulesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PageModulesFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/v0ty7qkcy8s7/content_types/page) */
export type PageSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageFilter = {
  AND: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  entryTitle: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  modules: InputMaybe<CfmodulesMultiTypeNestedFilter>;
  modulesCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageModulesCollection = {
  __typename?: 'PageModulesCollection';
  items: Array<Maybe<PageModulesItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageModulesFilter = {
  AND: InputMaybe<Array<InputMaybe<PageModulesFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PageModulesFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  entryTitle: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type PageModulesItem = ModuleAboutMe | ModulePageHeader | ModuleProjects | ModuleServices | ModuleWorkHistory;

export enum PageOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node: Maybe<_Node>;
  asset: Maybe<Asset>;
  assetCollection: Maybe<AssetCollection>;
  componentCtaButton: Maybe<ComponentCtaButton>;
  componentCtaButtonCollection: Maybe<ComponentCtaButtonCollection>;
  componentNavItem: Maybe<ComponentNavItem>;
  componentNavItemCollection: Maybe<ComponentNavItemCollection>;
  componentProject: Maybe<ComponentProject>;
  componentProjectCollection: Maybe<ComponentProjectCollection>;
  componentService: Maybe<ComponentService>;
  componentServiceCollection: Maybe<ComponentServiceCollection>;
  componentWorkHistoryItem: Maybe<ComponentWorkHistoryItem>;
  componentWorkHistoryItemCollection: Maybe<ComponentWorkHistoryItemCollection>;
  entryCollection: Maybe<EntryCollection>;
  moduleAboutMe: Maybe<ModuleAboutMe>;
  moduleAboutMeCollection: Maybe<ModuleAboutMeCollection>;
  moduleNavList: Maybe<ModuleNavList>;
  moduleNavListCollection: Maybe<ModuleNavListCollection>;
  modulePageHeader: Maybe<ModulePageHeader>;
  modulePageHeaderCollection: Maybe<ModulePageHeaderCollection>;
  moduleProjects: Maybe<ModuleProjects>;
  moduleProjectsCollection: Maybe<ModuleProjectsCollection>;
  moduleServices: Maybe<ModuleServices>;
  moduleServicesCollection: Maybe<ModuleServicesCollection>;
  moduleWorkHistory: Maybe<ModuleWorkHistory>;
  moduleWorkHistoryCollection: Maybe<ModuleWorkHistoryCollection>;
  page: Maybe<Page>;
  pageCollection: Maybe<PageCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<AssetFilter>;
};


export type QueryComponentCtaButtonArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentCtaButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentCtaButtonOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentCtaButtonFilter>;
};


export type QueryComponentNavItemArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentNavItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentNavItemOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentNavItemFilter>;
};


export type QueryComponentProjectArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentProjectOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentProjectFilter>;
};


export type QueryComponentServiceArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentServiceOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentServiceFilter>;
};


export type QueryComponentWorkHistoryItemArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentWorkHistoryItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ComponentWorkHistoryItemOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ComponentWorkHistoryItemFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<EntryFilter>;
};


export type QueryModuleAboutMeArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryModuleAboutMeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModuleAboutMeOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ModuleAboutMeFilter>;
};


export type QueryModuleNavListArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryModuleNavListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModuleNavListOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ModuleNavListFilter>;
};


export type QueryModulePageHeaderArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryModulePageHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModulePageHeaderOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ModulePageHeaderFilter>;
};


export type QueryModuleProjectsArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryModuleProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModuleProjectsOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ModuleProjectsFilter>;
};


export type QueryModuleServicesArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryModuleServicesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModuleServicesOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ModuleServicesFilter>;
};


export type QueryModuleWorkHistoryArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryModuleWorkHistoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ModuleWorkHistoryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ModuleWorkHistoryFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PageFilter>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  type: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  publishedVersion: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id: InputMaybe<Scalars['String']['input']>;
  id_contains: InputMaybe<Scalars['String']['input']>;
  id_exists: InputMaybe<Scalars['Boolean']['input']>;
  id_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not: InputMaybe<Scalars['String']['input']>;
  id_not_contains: InputMaybe<Scalars['String']['input']>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfComponentNavItemNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfComponentNavItemNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfComponentNavItemNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentProjectNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfComponentProjectNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfComponentProjectNestedFilter>>>;
  completionYear: InputMaybe<Scalars['DateTime']['input']>;
  completionYear_exists: InputMaybe<Scalars['Boolean']['input']>;
  completionYear_gt: InputMaybe<Scalars['DateTime']['input']>;
  completionYear_gte: InputMaybe<Scalars['DateTime']['input']>;
  completionYear_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  completionYear_lt: InputMaybe<Scalars['DateTime']['input']>;
  completionYear_lte: InputMaybe<Scalars['DateTime']['input']>;
  completionYear_not: InputMaybe<Scalars['DateTime']['input']>;
  completionYear_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tools_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tools_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tools_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tools_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfComponentServiceNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfComponentServiceNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfComponentServiceNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentWorkHistoryItemNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfComponentWorkHistoryItemNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfComponentWorkHistoryItemNestedFilter>>>;
  companyName: InputMaybe<Scalars['String']['input']>;
  companyName_contains: InputMaybe<Scalars['String']['input']>;
  companyName_exists: InputMaybe<Scalars['Boolean']['input']>;
  companyName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  companyName_not: InputMaybe<Scalars['String']['input']>;
  companyName_not_contains: InputMaybe<Scalars['String']['input']>;
  companyName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  endDate: InputMaybe<Scalars['DateTime']['input']>;
  endDate_exists: InputMaybe<Scalars['Boolean']['input']>;
  endDate_gt: InputMaybe<Scalars['DateTime']['input']>;
  endDate_gte: InputMaybe<Scalars['DateTime']['input']>;
  endDate_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endDate_lt: InputMaybe<Scalars['DateTime']['input']>;
  endDate_lte: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  skills_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_exists: InputMaybe<Scalars['Boolean']['input']>;
  startDate: InputMaybe<Scalars['DateTime']['input']>;
  startDate_exists: InputMaybe<Scalars['Boolean']['input']>;
  startDate_gt: InputMaybe<Scalars['DateTime']['input']>;
  startDate_gte: InputMaybe<Scalars['DateTime']['input']>;
  startDate_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startDate_lt: InputMaybe<Scalars['DateTime']['input']>;
  startDate_lte: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfmodulesMultiTypeNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfmodulesMultiTypeNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfmodulesMultiTypeNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  entryTitle: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};
