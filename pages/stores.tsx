import App from "~/components/App";
import Table from "~/components/DataGrid/Table";
import { NextPage } from "next";
import { useEffect, useState } from "react";

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
    <App>
      <Table columns={table.columns} rows={table.rows} />
    </App>
  );
};

export default Customer;
