import { gql } from 'apollo-server';

export default gql`
  interface Node {
    id: String!
  }

  type PageInfo {
    endCursor: String!
    startCursor: String!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }

  type CompanyNode implements Node {
    id: String!
    name: String!
    logo: String
    specialities: [String!]!
    city: String!
  }

  type FilteredCompaniesResponseEdge {
    cursor: String!
    node: CompanyNode!
  }

  type FilteredCompaniesConnection {
    pageInfo: PageInfo!
    edges: [FilteredCompaniesResponseEdge!]!
  }

  input GetFilteredCompaniesInputFilters {
    searchText: String!
    specialities: [String!]!
  }

  type Query {
    getFilteredCompanies(
      filters: GetFilteredCompaniesInputFilters!
      first: Int!
      after: String
    ): FilteredCompaniesConnection!
  }
`;
