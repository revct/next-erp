import useSWR from "swr";

const useItems = () => {
  const {
    data = {
      columns: [],
      rows: [],
    },
    mutate,
    error,
  } = useSWR("/api/items");

  return {
    data,
    mutate,
    error,
  };
};

export default useItems;
