import useSWR from "swr";

const usePersons = () => {
  const {
    data = {
      columns: [],
      rows: [],
    },
    mutate,
    error,
  } = useSWR("/api/persons");

  return {
    data,
    mutate,
    error,
  };
};

export default usePersons;
