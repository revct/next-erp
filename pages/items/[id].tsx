import Layout from "@/components/Layout/components/Layout";
import usePersons from "@/data/usePersons";
import { useRouter } from "next/dist/client/router";
import FormCard from "./_components/ItemFormCard";

const PersonDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isValidating, mutate } = usePersons(id);

  const handleCreate = async (data = {}) => {
    await fetch("/api/persons", {
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
    await fetch("/api/persons", {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  return (
    <Layout>
      <div className="container mx-auto justify-center items-center">
        <FormCard
          defaultValues={data}
          onSubmit={(data) => handleSave(data)}
        ></FormCard>
      </div>
    </Layout>
  );
};

export default PersonDetailPage;
