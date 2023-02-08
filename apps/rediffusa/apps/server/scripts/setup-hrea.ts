import connect from "@vf-ui/graphql-client-holochain";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { graphql } from "./gql";

const metadataClient = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

/**
 * Sets up the hREA environmet for the prototype to function appropriately.
 */
const main = async () => {
  const hreaClient = await connect();

  const letsTry = graphql(`
    query Query {
      formats {
        description
        name
      }
    }
  `);

  const { data } = await metadataClient.query({ query: letsTry });
};

main();
