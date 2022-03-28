import {
  CompanyNode,
  GetFilteredCompaniesInputFilters,
  Maybe,
} from 'generated/graphql';
import ALL_COMPANIES from './MOCK_DATA.json';
import { filterCompaniesList } from 'utils/companies';
import { flow, isNil, isUndefined } from 'lodash';

export default {
  fetchCompaniesListForFilters: (
    filters: GetFilteredCompaniesInputFilters,
    { first, after }: { first: number; after?: Maybe<string> }
  ): {
    hasMore: boolean;
    companies: ReadonlyArray<CompanyNode>;
    hasPrevious: boolean;
  } => {
    const allFilteredCompanies = filterCompaniesList(
      ALL_COMPANIES as ReadonlyArray<CompanyNode>,
      filters
    );

    const startIndex = isNil(after)
      ? 0
      : allFilteredCompanies.findIndex(company => company.id === after) + 1;

    return {
      hasMore: allFilteredCompanies.length > startIndex + first + 1,
      companies: allFilteredCompanies.slice(startIndex, startIndex + first),
      hasPrevious: allFilteredCompanies.slice(0, startIndex).length > 1,
    };
  },
};
