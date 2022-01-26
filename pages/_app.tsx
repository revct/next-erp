import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import "../mocks";
import Progressbar from "@/components/Progressbar";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

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
        <MantineProvider>
          <ModalsProvider>
            <Component {...pageProps} />
          </ModalsProvider>
        </MantineProvider>
      </SessionProvider>
    </>
  );
}
export default MyApp;
