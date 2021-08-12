import Admin from "@/components/Admin";
import Table from "@/components/Table";
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
    <Admin>
      <Table columns={table.columns} rows={table.rows} />
    </Admin>
  );
};

export default Customer;
