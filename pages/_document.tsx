import { createGetInitialProps } from "@mantine/next";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static getInitialProps = createGetInitialProps();

  render() {
    return (
      <Html data-theme="dark">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
