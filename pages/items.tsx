import { NextPage } from "next";
import Layout from "../components/Layout/components/Layout";
import { ItemColumns } from "../data/columns";
import useItems from "../data/useItems";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

const Customer: NextPage = () => {
  const { data: items, mutate } = useItems();

  const handleCreate = async () => {
    await fetch("/api/items", {
      method: "post",
      body: JSON.stringify({}),
      headers: {
        "content-type": "application/json",
      },
    });
    mutate();
  };

  const handleUpdate = async (data: any) => {
    await fetch("/api/items", {
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
      <DataGrid columns={ItemColumns} rows={items.rows}></DataGrid>
    </Layout>
  );
};

export default Customer;
