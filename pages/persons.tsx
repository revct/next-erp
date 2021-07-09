import { DataGrid } from "@material-ui/data-grid";
import { NextPage } from "next";
import Layout from "../components/Layout/components/Layout";
import { PersonColumns } from "../data/columns";
import usePersons from "../data/usePersons";

const Customer: NextPage = () => {
  const { data, mutate } = usePersons();

  const handleCreate = async () => {
    await fetch("/api/persons", {
      method: "post",
      body: JSON.stringify({}),
      headers: {
        "content-type": "application/json",
      },
    });
    mutate();
  };

  const handleUpdate = async (data: any) => {
    await fetch("/api/persons", {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    mutate();
  };

  return (
    <Layout>
      <section className="mb-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded"
          onClick={() => handleCreate()}
        >
          新增
        </button>
      </section>
      <DataGrid columns={PersonColumns} rows={data.rows}></DataGrid>
    </Layout>
  );
};

export default Customer;
