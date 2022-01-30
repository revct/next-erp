import { useEffect, useMemo, useState } from "react";
import Table from "./Table";
import Pagination from "./Pagination";

interface DataGridProps {
  columns: any;
  request: (params: any) => Promise<any>;
}

const DataGrid = (props: DataGridProps) => {
  const [offset, setOffset] = useState(0);
  const page = useMemo(() => offset + 1, [offset]);
  const [data, setData] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  const [limit] = useState(1);
  const total = useMemo(() => Math.ceil(count / limit), [limit, count]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async (params: any) => {
      try {
        setLoading(true);
        const { data = [], count } = await props.request(params);
        setData(data);
        setCount(count);
      } finally {
        setLoading(false);
      }
    };
    getData({ limit, offset });
  }, [limit, offset, props]);

  return (
    <>
      <Table columns={props.columns} rows={data}></Table>
      <Pagination
        disabled={loading}
        total={total}
        page={page}
        onChange={(page) => setOffset(page - 1)}
      ></Pagination>
    </>
  );
};
export default DataGrid;
