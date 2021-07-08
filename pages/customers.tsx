import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/components/Layout";

const DataGrid = dynamic(() => import("react-data-grid"), { ssr: false });

const Customer: NextPage = () => {
  const [table, setTable] = useState({
    rows: [],
    columns: [],
  });

  useEffect(() => {
    const fetchTable = async () => {
      const res = await fetch("/api/customers");
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
