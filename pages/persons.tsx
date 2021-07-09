import { Button } from "@material-ui/core";
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
        <Button
          onClick={() => handleCreate()}
          variant="contained"
          color="primary"
          disableElevation
        >
          新增
        </Button>
      </section>
      <DataGrid columns={PersonColumns} rows={data.rows}></DataGrid>
    </Layout>
  );
};

export default Customer;
