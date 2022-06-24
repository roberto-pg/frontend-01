import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4sqkanb2e3801zcd5ecai6u/master",
  cache: new InMemoryCache(),
});
