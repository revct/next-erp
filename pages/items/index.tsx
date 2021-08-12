import { NextPage } from "next";
import Layout from "@/components/Layout/components/Layout";
import { ItemColumns } from "@/pages/items/_components/ItemColumns";
import { useItems } from "@/data/items";
import Link from "next/link";
import Admin from "@/components/Admin";
import Table from "@/components/Table";

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
    <Admin>
      <section>
        <Link href="/items/create" passHref>
          <button color="primary">新增</button>
        </Link>
      </section>
      <Table columns={ItemColumns} rows={items.rows}></Table>
    </Admin>
  );
};

export default Customer;
