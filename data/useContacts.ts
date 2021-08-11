import useSWR, { SWRConfiguration } from "swr";

const useContacts = (id?: unknown) => {
  let url = "/api/contacts";
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

export default useContacts;
