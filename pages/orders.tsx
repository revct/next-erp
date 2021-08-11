import Admin from "@/components/Admin";
import { DataGrid } from "@material-ui/data-grid";
import { NextPage } from "next";
import { useEffect, useState } from "react";
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
    <Admin>
      <DataGrid columns={OrderColumns} rows={table.rows} />
    </Admin>
  );
};

export default Customer;
