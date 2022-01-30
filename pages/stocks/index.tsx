import App from "~/components/App";
import { NextPage } from "next";
import { StockColumns } from "~/components/Stock/StockColumns";
import useStocks from "~/data/useStocks";
import Table from "~/components/DataGrid/Table";

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

  return (
    <App>
      <section className="mb-4">
        <button className="btn" onClick={() => handleCreate()}>
          新增
        </button>
      </section>
      <Table columns={StockColumns} rows={stocks.rows}></Table>
    </App>
  );
};

export default Customer;
