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

  useEffect(() => {
    const getData = async (params: any) => {
      const { data = [], count } = await props.request(params);
      setData(data);
      setCount(count);
    };
    getData({ limit, offset });
  }, [limit, offset, props]);

  return (
    <>
      <Table columns={props.columns} rows={data}></Table>
      <Pagination
        total={total}
        page={page}
        onChange={(page) => setOffset(page - 1)}
      ></Pagination>
    </>
  );
};
export default DataGrid;
