import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
// import "../mocks";
import Progressbar from "~/components/Progressbar";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";

const MyApp = ({ Component, pageProps }: AppProps) => {
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
      <MantineProvider>
        <NotificationsProvider>
          <ModalsProvider>
            <Component {...pageProps} />
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
};
export default MyApp;
