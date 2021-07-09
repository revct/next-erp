import { DataGrid } from "@material-ui/data-grid";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/components/Layout";
import { OrderColumns } from "../data/columns";

const Customer: NextPage = () => {
  const [table, setTable] = useState({
    rows: [],
  });

  useEffect(() => {
    const fetchTable = async () => {
      const res = await fetch("/api/orders");
      const json = await res.json();
      setTable(json);
      return res;
    };
    fetchTable();
  }, []);

  return (
    <Layout>
      <DataGrid columns={OrderColumns} rows={table.rows} />
    </Layout>
  );
};

export default Customer;
