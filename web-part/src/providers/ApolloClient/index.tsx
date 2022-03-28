import {
  ApolloClient,
  ApolloProvider as BaseApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import React, { FC } from 'react';
import { relayStylePagination } from '@apollo/client/utilities';

const link = new HttpLink({
  uri: 'http://localhost:3000',
});

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getFilteredCompanies: relayStylePagination(['filters']),
      },
    },
  },
});

const client = new ApolloClient({
  link,
  cache,
});

const ApolloProvider: FC<{}> = ({ children }) => (
  <BaseApolloProvider client={client}>{children}</BaseApolloProvider>
);

export default ApolloProvider;
