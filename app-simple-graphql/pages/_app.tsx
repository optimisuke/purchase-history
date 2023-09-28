// pages/_app.tsx

import { AppProps } from "next/app"; // AppProps をインポート
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const apiKey = process.env.NEXT_PUBLIC_API_KEY || "invalid-api-key";
const uri = process.env.NEXT_PUBLIC_API_URI || "invalid-api-uri";

const client = new ApolloClient({
  uri: uri,
  headers: { Authorization: `apikey ${apiKey}` },
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
