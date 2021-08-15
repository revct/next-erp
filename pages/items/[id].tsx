import Admin from "@/components/Admin";
import { useRouter } from "next/dist/client/router";
import ItemForm from "@/components/Item/ItemForm";
import useSWR from "swr";

const ItemShowPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, mutate } = useSWR(`/api/items/${id}`);

  const handleCreate = async (data = {}) => {
    await fetch("/api/contacts", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  const handleSave = async (data: any) => {
    if (data.id) {
      await handleUpdate(data);
    } else {
      await handleCreate(data);
    }
    router.back();
  };

  const handleUpdate = async (data: any) => {
    await fetch("/api/contacts", {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  return (
    <Admin>
      <ItemForm
        defaultValues={data}
        onSubmit={(data) => handleSave(data)}
      ></ItemForm>
    </Admin>
  );
};

export default ItemShowPage;
