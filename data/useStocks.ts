import useSWR from "swr";

const useStocks = () => {
  const {
    data = {
      columns: [],
      rows: [],
    },
    mutate,
    error,
  } = useSWR("/api/stocks");

  return {
    data,
    mutate,
    error,
  };
};

export default useStocks;
