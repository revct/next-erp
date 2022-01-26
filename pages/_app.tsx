import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import "../mocks";
import Progressbar from "@/components/Progressbar";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>ERP系统</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Progressbar></Progressbar>

      <SessionProvider session={session}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "light",
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </SessionProvider>
    </>
  );
}
export default MyApp;
