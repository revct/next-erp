import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
// import "../mocks";
import Progressbar from "~/components/Progressbar";
import { NotificationsProvider } from "@mantine/notifications";
import RootProvider from "~/components/Provider/RootProvider";

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
      <RootProvider>
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </RootProvider>
    </>
  );
};
export default MyApp;
