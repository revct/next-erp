import { Provider } from "next-auth/client";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>ERP系统</title>
      </Head>
      <Component {...pageProps} />
      <Script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></Script>
    </Provider>
  );
}
export default MyApp;
