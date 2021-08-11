import Admin from "@/components/Admin";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { NextPage } from "next";
import { StockColumns } from "../data/columns";
import useStocks from "../data/useStocks";

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
        <Button
          onClick={() => handleCreate()}
          variant="contained"
          color="primary"
          disableElevation
        >
          新增
        </Button>
      </section>
      <DataGrid columns={StockColumns} rows={stocks.rows}></DataGrid>
    </Admin>
  );
};

export default Customer;
