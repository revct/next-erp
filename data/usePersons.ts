import useSWR from "swr";

const usePersons = () => {
  const {
    data = {
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
