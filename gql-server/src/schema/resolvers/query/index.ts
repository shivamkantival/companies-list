import { QueryResolvers } from 'generated/graphql';
import getFilteredCompaniesResolver from './getFilteredCompanies';

export default {
  getFilteredCompanies: getFilteredCompaniesResolver,
} as QueryResolvers;
