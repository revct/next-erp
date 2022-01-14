import useSWR from "swr";

export const createItem = async (data: Prisma.ItemCreateInput) => {
  return fetch("/api/items", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

export const updateItem = async (data: Prisma.ItemCreateInput) => {
  return fetch("/api/items", {
    method: "put",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

export const deleteItem = async (id: string | number) => {
  return fetch(`/api/items/${id}`, {
    method: "delete",
  });
};

export const useItems = () => {
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
