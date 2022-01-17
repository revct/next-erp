import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import type { AppProps } from "next/app";
import "../mocks";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>ERP系统</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
export default MyApp;
