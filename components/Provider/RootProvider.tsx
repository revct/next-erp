import { MantineProvider } from "@mantine/core";
import { createContext, Fragment, useState } from "react";
import ModalsProvider from "../Modal/ModalsProvider";

const Root = createContext({});

const RootProvider = ({ children }: any) => {
  const ctx = {};

  return (
    <Root.Provider value={ctx}>
      <ModalsProvider>
        <MantineProvider>{children}</MantineProvider>
      </ModalsProvider>
    </Root.Provider>
  );
};

export default RootProvider;
