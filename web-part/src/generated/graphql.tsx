import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CompanyNode = Node & {
  __typename?: 'CompanyNode';
  id: Scalars['String'];
  name: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  specialities: Array<Scalars['String']>;
  city: Scalars['String'];
};

export type FilteredCompaniesConnection = {
  __typename?: 'FilteredCompaniesConnection';
  pageInfo: PageInfo;
  edges: Array<FilteredCompaniesResponseEdge>;
};

export type FilteredCompaniesResponseEdge = {
  __typename?: 'FilteredCompaniesResponseEdge';
  cursor: Scalars['String'];
  node: CompanyNode;
};

export type GetFilteredCompaniesInputFilters = {
  searchText: Scalars['String'];
  specialities: Array<Scalars['String']>;
};

export type Node = {
  id: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  startCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  getFilteredCompanies: FilteredCompaniesConnection;
};


export type QueryGetFilteredCompaniesArgs = {
  filters: GetFilteredCompaniesInputFilters;
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};

export type GetFilteredCompaniesQueryVariables = Exact<{
  filters: GetFilteredCompaniesInputFilters;
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
}>;


export type GetFilteredCompaniesQuery = (
  { __typename?: 'Query' }
  & { getFilteredCompanies: (
    { __typename?: 'FilteredCompaniesConnection' }
    & { edges: Array<(
      { __typename?: 'FilteredCompaniesResponseEdge' }
      & Pick<FilteredCompaniesResponseEdge, 'cursor'>
      & { node: (
        { __typename?: 'CompanyNode' }
        & Pick<CompanyNode, 'city' | 'id' | 'specialities' | 'name' | 'logo'>
      ) }
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
    ) }
  ) }
);


export const GetFilteredCompaniesDocument = gql`
    query GetFilteredCompanies($filters: GetFilteredCompaniesInputFilters!, $first: Int!, $after: String) {
  getFilteredCompanies(first: $first, after: $after, filters: $filters) {
    edges {
      cursor
      node {
        city
        id
        specialities
        name
        logo
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;

/**
 * __useGetFilteredCompaniesQuery__
 *
 * To run a query within a React component, call `useGetFilteredCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilteredCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilteredCompaniesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetFilteredCompaniesQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetFilteredCompaniesQuery, GetFilteredCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetFilteredCompaniesQuery, GetFilteredCompaniesQueryVariables>(GetFilteredCompaniesDocument, options);
      }
export function useGetFilteredCompaniesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFilteredCompaniesQuery, GetFilteredCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetFilteredCompaniesQuery, GetFilteredCompaniesQueryVariables>(GetFilteredCompaniesDocument, options);
        }
export type GetFilteredCompaniesQueryHookResult = ReturnType<typeof useGetFilteredCompaniesQuery>;
export type GetFilteredCompaniesLazyQueryHookResult = ReturnType<typeof useGetFilteredCompaniesLazyQuery>;
export type GetFilteredCompaniesQueryResult = Apollo.QueryResult<GetFilteredCompaniesQuery, GetFilteredCompaniesQueryVariables>;