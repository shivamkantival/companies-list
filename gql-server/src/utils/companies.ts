import {
  CompanyNode,
  GetFilteredCompaniesInputFilters,
} from 'generated/graphql';
import { intersection, isEmpty } from 'lodash';

interface FilterCompanies {
  (
    companies: ReadonlyArray<CompanyNode>,
    filters: GetFilteredCompaniesInputFilters
  ): ReadonlyArray<CompanyNode>;
}

const filterCompaniesWithSearchText: FilterCompanies = (companies, filters) =>
  filters.searchText
    ? companies.filter(company =>
        company.name.toUpperCase().includes(filters.searchText.toUpperCase())
      )
    : companies;

const filterCompaniesWithSpecialities: FilterCompanies = (
  companies,
  { specialities }
) =>
  isEmpty(specialities)
    ? companies
    : companies.filter(
        company =>
          intersection(company.specialities, specialities).length ===
          specialities.length
      );

const COMPANIES_FILTER_PROCESSORS: ReadonlyArray<FilterCompanies> = [
  filterCompaniesWithSearchText,
  filterCompaniesWithSpecialities,
];

export const filterCompaniesList: FilterCompanies = (companies, filters) =>
  COMPANIES_FILTER_PROCESSORS.reduce(
    (acc, processor) => processor(acc, filters),
    companies
  );
