import Admin from "@/components/Admin";
import { NextPage } from "next";
import { StockColumns } from "./_src/StockColumns";
import useStocks from "../../data/useStocks";
import Table from "@/components/Table";

const Customer: NextPage = () => {
  const { data: stocks, mutate } = useStocks();

  const handleCreate = async () => {
    await fetch("/api/stocks", {
      method: "post",
      body: JSON.stringify({}),
      headers: {
        "content-type": "application/json",
      },
    });
    mutate();
  };

  const handleUpdate = async (data: any) => {
    await fetch("/api/stocks", {
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
      <section className="mb-4">
        <button onClick={() => handleCreate()}>新增</button>
      </section>
      <Table columns={StockColumns} rows={stocks.rows}></Table>
    </Admin>
  );
};

export default Customer;
