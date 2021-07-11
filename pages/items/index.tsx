import { NextPage } from "next";
import Layout from "@/components/Layout/components/Layout";
import { ItemColumns } from "@/data/columns";
import { useItems } from "@/data/items";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import Link from "next/link";

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
    <Layout className="space-y-2">
      <section>
        <Link href="/items/create" passHref>
          <Button variant="contained" color="primary" disableElevation>
            新增
          </Button>
        </Link>
      </section>
      <DataGrid autoHeight columns={ItemColumns} rows={items.rows}></DataGrid>
    </Layout>
  );
};

export default Customer;
