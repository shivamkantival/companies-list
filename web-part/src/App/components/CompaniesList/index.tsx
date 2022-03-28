import { FC } from 'react';
import { GetFilteredCompaniesQuery } from 'generated/graphql';
import useStyles from './styles';
import CompanyCard from './components/CompanyCard';

const CompaniesList: FC<{ companies: GetFilteredCompaniesQuery }> = ({
  companies,
}) => {
  const classes = useStyles();
  const companiesListData = companies.getFilteredCompanies.edges;
  const hasDataToShow = companiesListData.length > 0;

  return (
    <div className={classes.listContainer}>
      {hasDataToShow ? (
        companiesListData.map(edge => (
          <CompanyCard data={edge} key={edge.cursor} />
        ))
      ) : (
        <span className={classes.emptyText}>
          No results found for provided filters
        </span>
      )}
    </div>
  );
};

export default CompaniesList;
