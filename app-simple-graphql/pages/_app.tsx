// pages/_app.tsx

import { AppProps } from "next/app"; // AppProps をインポート
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const apiKey = process.env.NEXT_PUBLIC_API_KEY || "invalid-api-key";
const uri = process.env.NEXT_PUBLIC_API_URI || "invalid-api-uri";

const httpLink = new HttpLink({
  uri: uri,
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Apikey ${apiKey}`,
    },
  };
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function MyApp({ Component, pageProps }: AppProps) {
  // AppProps 型を適用
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
