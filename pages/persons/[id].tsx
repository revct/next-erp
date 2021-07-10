import Layout from "@/components/Layout/components/Layout";
import usePersons from "@/data/usePersons";
import { Person, Prisma } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import PersonalInfoCard from "./_components/PersonFormCard";

const PersonDetailPage: NextPage = () => {
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
      <div className="container mx-auto flex justify-center items-center">
        <PersonalInfoCard
          loading={isValidating}
          defaultValues={data}
          onSubmit={(data) => handleSave(data)}
        ></PersonalInfoCard>
      </div>
    </Layout>
  );
};

export default PersonDetailPage;