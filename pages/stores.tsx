import { DataGrid } from "@material-ui/data-grid";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/components/Layout";

const Customer: NextPage = () => {
  const [table, setTable] = useState({
    rows: [],
    columns: [],
  });

  useEffect(() => {
    const fetchTable = async () => {
      const res = await fetch("/api/stores");
      const json = await res.json();
      setTable(json);
      return res;
    };
    fetchTable();
  }, []);

  return (
    <Layout>
      <DataGrid columns={table.columns} rows={table.rows} />
    </Layout>
  );
};

export default Customer;
