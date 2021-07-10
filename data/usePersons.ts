import useSWR, { SWRConfiguration } from "swr";

const usePersons = (id?: unknown) => {
  let url = "/api/persons";
  let config: SWRConfiguration = {};
  if (id) {
    url = `${url}/${id}`;
    config.revalidateOnMount = false;
  }
  const { data = { rows: [] }, mutate, error, isValidating } = useSWR(url);

  return {
    data,
    mutate,
    error,
    isValidating,
  };
};

export default usePersons;
