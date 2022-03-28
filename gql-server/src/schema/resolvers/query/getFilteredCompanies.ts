import { QueryResolvers } from 'generated/graphql';
import GqlContext from 'typeDefs/gqlContext';
import { last, head } from 'lodash';

const getFilteredCompaniesResolver: QueryResolvers<GqlContext>['getFilteredCompanies'] =
  (_, { filters, first, after }, { dataFetchers }) => {
    const { companies, hasMore, hasPrevious } =
      dataFetchers.companies.fetchCompaniesListForFilters(filters, {
        first,
        after,
      });

    return {
      pageInfo: {
        hasNextPage: hasMore,
        hasPreviousPage: hasPrevious,
        endCursor: last(companies)?.id ?? '',
        startCursor: head(companies)?.id ?? '',
      },
      edges: companies.map(node => ({ cursor: node.id, node })),
    };
  };

export default getFilteredCompaniesResolver;
