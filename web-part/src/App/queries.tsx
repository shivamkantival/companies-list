import { gql } from '@apollo/client';

export const GetFilteredCompanies = gql`
  query GetFilteredCompanies(
    $filters: GetFilteredCompaniesInputFilters!
    $first: Int!
    $after: String
  ) {
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
