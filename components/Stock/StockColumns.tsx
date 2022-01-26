import { Column } from "react-table";

export const StockColumns: Column<any>[] = [
  {
    accessor: "id",
    Header: "品名",
  },
  {
    accessor: "itemId",
    Header: "料号",
  },
  {
    accessor: "number",
    Header: "数量",
  },
  {
    accessor: "location",
    Header: "储位",
  },
];
