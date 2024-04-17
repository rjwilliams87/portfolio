import * as Types from './types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type AllBlogPostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllBlogPostsQuery = { __typename?: 'Query', moduleBlogPostCollection: { __typename?: 'ModuleBlogPostCollection', items: Array<{ __typename: 'ModuleBlogPost', title: string | null, publishedDate: any | null, readTime: string | null, linkedFrom: { __typename?: 'ModuleBlogPostLinkingCollections', pageCollection: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug: string | null } | null> } | null } | null, headerImage: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null } | null } | null> } | null };

export type ModuleAboutMeFragment = { __typename: 'ModuleAboutMe', email: string | null, roles: Array<string | null> | null, phone: string | null, description: { __typename?: 'ModuleAboutMeDescription', json: any, links: { __typename?: 'ModuleAboutMeDescriptionLinks', assets: { __typename?: 'ModuleAboutMeDescriptionAssets', block: Array<{ __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type ModuleBlogPostFragment = { __typename: 'ModuleBlogPost', title: string | null, publishedDate: any | null, readTime: string | null, body: { __typename?: 'ModuleBlogPostBody', json: any, links: { __typename?: 'ModuleBlogPostBodyLinks', assets: { __typename?: 'ModuleBlogPostBodyAssets', block: Array<{ __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, headerImage: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null } | null };

export type ModuleContactMeFragment = { __typename: 'ModuleContactMe', showContactButton: boolean | null, text: { __typename?: 'ModuleContactMeText', json: any } | null };

export type ModulePageHeaderFragment = { __typename: 'ModulePageHeader', size: string | null, layout: string | null, text: { __typename?: 'ModulePageHeaderText', json: any } | null, image: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null } | null };

export type ModuleProjectsFragment = { __typename?: 'ModuleProjects', componentsCollection: { __typename?: 'ModuleProjectsComponentsCollection', items: Array<{ __typename: 'ComponentProject', title: string | null, completionYear: any | null, tools: Array<string | null> | null, description: { __typename?: 'ComponentProjectDescription', json: any } | null, image: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null } | null } | null> } | null };

export type ModuleServicesFragment = { __typename?: 'ModuleServices', componentsCollection: { __typename?: 'ModuleServicesComponentsCollection', items: Array<{ __typename: 'ComponentService', title: string | null, description: { __typename?: 'ComponentServiceDescription', json: any } | null } | null> } | null };

export type ModuleWorkHistoryFragment = { __typename?: 'ModuleWorkHistory', componentsCollection: { __typename?: 'ModuleWorkHistoryComponentsCollection', items: Array<{ __typename: 'ComponentWorkHistoryItem', companyName: string | null, skills: Array<string | null> | null, startDate: any | null, endDate: any | null, title: string | null, description: { __typename?: 'ComponentWorkHistoryItemDescription', json: any } | null } | null> } | null };

export type AllPagesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllPagesQuery = { __typename?: 'Query', pageCollection: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type LandingPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type LandingPageQuery = { __typename?: 'Query', pageCollection: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug: string | null, sys: { __typename?: 'Sys', id: string }, modulesCollection: { __typename?: 'PageModulesCollection', items: Array<{ __typename: 'ModuleAboutMe', email: string | null, roles: Array<string | null> | null, phone: string | null, description: { __typename?: 'ModuleAboutMeDescription', json: any, links: { __typename?: 'ModuleAboutMeDescriptionLinks', assets: { __typename?: 'ModuleAboutMeDescriptionAssets', block: Array<{ __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | { __typename: 'ModuleBlogPost', title: string | null, publishedDate: any | null, readTime: string | null, body: { __typename?: 'ModuleBlogPostBody', json: any, links: { __typename?: 'ModuleBlogPostBodyLinks', assets: { __typename?: 'ModuleBlogPostBodyAssets', block: Array<{ __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, headerImage: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null } | null } | { __typename: 'ModuleContactMe', showContactButton: boolean | null, text: { __typename?: 'ModuleContactMeText', json: any } | null } | { __typename: 'ModulePageHeader', size: string | null, layout: string | null, text: { __typename?: 'ModulePageHeaderText', json: any } | null, image: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null } | null } | { __typename: 'ModuleProjects', componentsCollection: { __typename?: 'ModuleProjectsComponentsCollection', items: Array<{ __typename: 'ComponentProject', title: string | null, completionYear: any | null, tools: Array<string | null> | null, description: { __typename?: 'ComponentProjectDescription', json: any } | null, image: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null } | null } | null> } | null } | { __typename: 'ModuleServices', componentsCollection: { __typename?: 'ModuleServicesComponentsCollection', items: Array<{ __typename: 'ComponentService', title: string | null, description: { __typename?: 'ComponentServiceDescription', json: any } | null } | null> } | null } | { __typename: 'ModuleWorkHistory', componentsCollection: { __typename?: 'ModuleWorkHistoryComponentsCollection', items: Array<{ __typename: 'ComponentWorkHistoryItem', companyName: string | null, skills: Array<string | null> | null, startDate: any | null, endDate: any | null, title: string | null, description: { __typename?: 'ComponentWorkHistoryItemDescription', json: any } | null } | null> } | null } | null> } | null } | null> } | null };

export type PageBySlugQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
}>;


export type PageBySlugQuery = { __typename?: 'Query', pageCollection: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug: string | null, sys: { __typename?: 'Sys', id: string }, modulesCollection: { __typename?: 'PageModulesCollection', items: Array<{ __typename: 'ModuleAboutMe', email: string | null, roles: Array<string | null> | null, phone: string | null, description: { __typename?: 'ModuleAboutMeDescription', json: any, links: { __typename?: 'ModuleAboutMeDescriptionLinks', assets: { __typename?: 'ModuleAboutMeDescriptionAssets', block: Array<{ __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | { __typename: 'ModuleBlogPost', title: string | null, publishedDate: any | null, readTime: string | null, body: { __typename?: 'ModuleBlogPostBody', json: any, links: { __typename?: 'ModuleBlogPostBodyLinks', assets: { __typename?: 'ModuleBlogPostBodyAssets', block: Array<{ __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, headerImage: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null } | null } | { __typename: 'ModuleContactMe', showContactButton: boolean | null, text: { __typename?: 'ModuleContactMeText', json: any } | null } | { __typename: 'ModulePageHeader', size: string | null, layout: string | null, text: { __typename?: 'ModulePageHeaderText', json: any } | null, image: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null } | null } | { __typename: 'ModuleProjects', componentsCollection: { __typename?: 'ModuleProjectsComponentsCollection', items: Array<{ __typename: 'ComponentProject', title: string | null, completionYear: any | null, tools: Array<string | null> | null, description: { __typename?: 'ComponentProjectDescription', json: any } | null, image: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null } | null } | null> } | null } | { __typename: 'ModuleServices', componentsCollection: { __typename?: 'ModuleServicesComponentsCollection', items: Array<{ __typename: 'ComponentService', title: string | null, description: { __typename?: 'ComponentServiceDescription', json: any } | null } | null> } | null } | { __typename: 'ModuleWorkHistory', componentsCollection: { __typename?: 'ModuleWorkHistoryComponentsCollection', items: Array<{ __typename: 'ComponentWorkHistoryItem', companyName: string | null, skills: Array<string | null> | null, startDate: any | null, endDate: any | null, title: string | null, description: { __typename?: 'ComponentWorkHistoryItemDescription', json: any } | null } | null> } | null } | null> } | null } | null> } | null };

export type PageByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;


export type PageByIdQuery = { __typename?: 'Query', page: { __typename?: 'Page', slug: string | null, sys: { __typename?: 'Sys', id: string }, modulesCollection: { __typename?: 'PageModulesCollection', items: Array<{ __typename: 'ModuleAboutMe', email: string | null, roles: Array<string | null> | null, phone: string | null, description: { __typename?: 'ModuleAboutMeDescription', json: any, links: { __typename?: 'ModuleAboutMeDescriptionLinks', assets: { __typename?: 'ModuleAboutMeDescriptionAssets', block: Array<{ __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | { __typename: 'ModuleBlogPost', title: string | null, publishedDate: any | null, readTime: string | null, body: { __typename?: 'ModuleBlogPostBody', json: any, links: { __typename?: 'ModuleBlogPostBodyLinks', assets: { __typename?: 'ModuleBlogPostBodyAssets', block: Array<{ __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, headerImage: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null } | null } | { __typename: 'ModuleContactMe', showContactButton: boolean | null, text: { __typename?: 'ModuleContactMeText', json: any } | null } | { __typename: 'ModulePageHeader', size: string | null, layout: string | null, text: { __typename?: 'ModulePageHeaderText', json: any } | null, image: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null } | null } | { __typename: 'ModuleProjects', componentsCollection: { __typename?: 'ModuleProjectsComponentsCollection', items: Array<{ __typename: 'ComponentProject', title: string | null, completionYear: any | null, tools: Array<string | null> | null, description: { __typename?: 'ComponentProjectDescription', json: any } | null, image: { __typename?: 'Asset', title: string | null, description: string | null, contentType: string | null, url: string | null, width: number | null, height: number | null } | null } | null> } | null } | { __typename: 'ModuleServices', componentsCollection: { __typename?: 'ModuleServicesComponentsCollection', items: Array<{ __typename: 'ComponentService', title: string | null, description: { __typename?: 'ComponentServiceDescription', json: any } | null } | null> } | null } | { __typename: 'ModuleWorkHistory', componentsCollection: { __typename?: 'ModuleWorkHistoryComponentsCollection', items: Array<{ __typename: 'ComponentWorkHistoryItem', companyName: string | null, skills: Array<string | null> | null, startDate: any | null, endDate: any | null, title: string | null, description: { __typename?: 'ComponentWorkHistoryItemDescription', json: any } | null } | null> } | null } | null> } | null } | null };

export const ModuleAboutMeFragmentDoc = gql`
    fragment ModuleAboutMe on ModuleAboutMe {
  description {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          title
          description
          contentType
          url
          width
          height
        }
      }
    }
  }
  email
  roles
  phone
  __typename
}
    `;
export const ModuleBlogPostFragmentDoc = gql`
    fragment ModuleBlogPost on ModuleBlogPost {
  title
  publishedDate
  body {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          title
          description
          contentType
          url
          width
          height
        }
      }
    }
  }
  readTime
  headerImage {
    title
    description
    contentType
    url
    width
    height
  }
  __typename
}
    `;
export const ModuleContactMeFragmentDoc = gql`
    fragment ModuleContactMe on ModuleContactMe {
  showContactButton
  text {
    json
  }
  __typename
}
    `;
export const ModulePageHeaderFragmentDoc = gql`
    fragment ModulePageHeader on ModulePageHeader {
  text {
    json
  }
  image {
    title
    description
    contentType
    url
    width
    height
  }
  size
  layout
  __typename
}
    `;
export const ModuleProjectsFragmentDoc = gql`
    fragment ModuleProjects on ModuleProjects {
  componentsCollection {
    items {
      title
      description {
        json
      }
      image {
        title
        description
        contentType
        url
        width
        height
      }
      completionYear
      tools
      __typename
    }
  }
}
    `;
export const ModuleServicesFragmentDoc = gql`
    fragment ModuleServices on ModuleServices {
  componentsCollection {
    items {
      title
      description {
        json
      }
      __typename
    }
  }
}
    `;
export const ModuleWorkHistoryFragmentDoc = gql`
    fragment ModuleWorkHistory on ModuleWorkHistory {
  componentsCollection {
    items {
      companyName
      description {
        json
      }
      skills
      startDate
      endDate
      title
      __typename
    }
  }
}
    `;
export const AllBlogPostsDocument = gql`
    query AllBlogPosts {
  moduleBlogPostCollection {
    items {
      linkedFrom {
        pageCollection(limit: 1) {
          items {
            slug
          }
        }
      }
      title
      publishedDate
      readTime
      headerImage {
        title
        description
        contentType
        url
        width
        height
      }
      __typename
    }
  }
}
    `;
export const AllPagesDocument = gql`
    query AllPages {
  pageCollection {
    items {
      sys {
        id
      }
      slug
    }
  }
}
    `;
export const LandingPageDocument = gql`
    query LandingPage {
  pageCollection(where: {slug: "/"}, limit: 1) {
    items {
      slug
      sys {
        id
      }
      modulesCollection(limit: 10) {
        items {
          __typename
          ... on ModuleAboutMe {
            ...ModuleAboutMe
          }
          ... on ModuleBlogPost {
            ...ModuleBlogPost
          }
          ... on ModuleContactMe {
            ...ModuleContactMe
          }
          ... on ModulePageHeader {
            ...ModulePageHeader
          }
          ... on ModuleProjects {
            ...ModuleProjects
          }
          ... on ModuleServices {
            ...ModuleServices
          }
          ... on ModuleWorkHistory {
            ...ModuleWorkHistory
          }
        }
      }
    }
  }
}
    ${ModuleAboutMeFragmentDoc}
${ModuleBlogPostFragmentDoc}
${ModuleContactMeFragmentDoc}
${ModulePageHeaderFragmentDoc}
${ModuleProjectsFragmentDoc}
${ModuleServicesFragmentDoc}
${ModuleWorkHistoryFragmentDoc}`;
export const PageBySlugDocument = gql`
    query PageBySlug($slug: String!) {
  pageCollection(where: {slug: $slug}, limit: 1) {
    items {
      slug
      sys {
        id
      }
      modulesCollection(limit: 10) {
        items {
          __typename
          ... on ModuleAboutMe {
            ...ModuleAboutMe
          }
          ... on ModuleBlogPost {
            ...ModuleBlogPost
          }
          ... on ModuleContactMe {
            ...ModuleContactMe
          }
          ... on ModulePageHeader {
            ...ModulePageHeader
          }
          ... on ModuleProjects {
            ...ModuleProjects
          }
          ... on ModuleServices {
            ...ModuleServices
          }
          ... on ModuleWorkHistory {
            ...ModuleWorkHistory
          }
        }
      }
    }
  }
}
    ${ModuleAboutMeFragmentDoc}
${ModuleBlogPostFragmentDoc}
${ModuleContactMeFragmentDoc}
${ModulePageHeaderFragmentDoc}
${ModuleProjectsFragmentDoc}
${ModuleServicesFragmentDoc}
${ModuleWorkHistoryFragmentDoc}`;
export const PageByIdDocument = gql`
    query PageByID($id: String!) {
  page(id: $id) {
    slug
    sys {
      id
    }
    modulesCollection(limit: 10) {
      items {
        __typename
        ... on ModuleAboutMe {
          ...ModuleAboutMe
        }
        ... on ModuleBlogPost {
          ...ModuleBlogPost
        }
        ... on ModuleContactMe {
          ...ModuleContactMe
        }
        ... on ModulePageHeader {
          ...ModulePageHeader
        }
        ... on ModuleProjects {
          ...ModuleProjects
        }
        ... on ModuleServices {
          ...ModuleServices
        }
        ... on ModuleWorkHistory {
          ...ModuleWorkHistory
        }
      }
    }
  }
}
    ${ModuleAboutMeFragmentDoc}
${ModuleBlogPostFragmentDoc}
${ModuleContactMeFragmentDoc}
${ModulePageHeaderFragmentDoc}
${ModuleProjectsFragmentDoc}
${ModuleServicesFragmentDoc}
${ModuleWorkHistoryFragmentDoc}`;