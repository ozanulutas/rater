import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import { Env } from "constants/Env";

const client = new ApolloClient({
  uri: Env.GRAPHQL_URL,
  cache: new InMemoryCache(),
});

function ApolloClientProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloClientProvider;
