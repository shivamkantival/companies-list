import { ApolloServer } from 'apollo-server';

import typeDefs from './schema/schema';
import resolvers from './schema/resolvers';
import dataFetchers from 'dataFetchers';
import GqlContext from 'typeDefs/gqlContext';

(async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { dataFetchers } as GqlContext,
  });
  const { url } = await server.listen(3000);
  console.log(`🚀 Server ready at ${url}`);
})();
