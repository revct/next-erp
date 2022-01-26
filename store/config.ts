import create from "zustand";

const useConfigStore = create((set) => ({
  appName: "ERP System",
}));

export default useConfigStore;
