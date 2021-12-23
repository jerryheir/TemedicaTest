import * as React from "react";
import Head from "next/head";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
import { BASE_URL } from "../config";

const client = new ApolloClient({
  uri: BASE_URL,
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
