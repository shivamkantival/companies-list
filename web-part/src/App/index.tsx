import React, { FC, useCallback } from 'react';
import useStyles from './styles';
import useFiltersState from './hooks/useFiltersState';
import { useGetFilteredCompaniesQuery } from 'generated/graphql';
import Filters from './components/Filters';
import { Button, Spin } from 'antd';
import CompaniesList from './components/CompaniesList';

const ITEMS_PER_PAGE = 20;

const App: FC<{}> = () => {
  const classes = useStyles();
  const { filters, setSearchText, setSpecialities } = useFiltersState();
  const { fetchMore, error, loading, data } = useGetFilteredCompaniesQuery({
    variables: { filters, first: ITEMS_PER_PAGE },
  });

  const canLoadMore = data && data.getFilteredCompanies.pageInfo.hasNextPage;

  const fetchNextPage = useCallback<() => void>(() => {
    if (canLoadMore) {
      fetchMore({
        variables: { after: data?.getFilteredCompanies.pageInfo.endCursor },
      });
    }
  }, [canLoadMore, data?.getFilteredCompanies.pageInfo.endCursor, fetchMore]);

  return (
    <div className={classes.appContainer}>
      <Filters
        filters={filters}
        setSearchText={setSearchText}
        setSpecialities={setSpecialities}
      />
      <section className={classes.appContentContainer}>
        {loading ? (
          <Spin />
        ) : error ? (
          'Something went wrong, please try again'
        ) : (
          data && (
            <>
              <CompaniesList companies={data} />
              {canLoadMore && (
                <Button type="primary" onClick={fetchNextPage} shape="round">
                  Fetch more
                </Button>
              )}
            </>
          )
        )}
      </section>
    </div>
  );
};

export default App;
