import { useContext } from "react";
import { modalsContext } from "./context";

const useModals = () => {
  const ctx = useContext(modalsContext);
  if (!ctx) {
    throw new Error(
      "useModals hook was called outside of context, wrap your app with ModalsProvider component",
    );
  }
  return ctx;
};

export default useModals;
