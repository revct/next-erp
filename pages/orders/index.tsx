import App from "~/components/App";
import Table from "~/components/DataGrid/Table";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { OrderColumns } from "../../components/Order/OrderColumns";

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
    <App>
      <Table columns={OrderColumns} rows={table.rows} />
    </App>
  );
};

export default Customer;
