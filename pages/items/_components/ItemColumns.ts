import { Item } from ".prisma/client";
import { Column } from "react-table";

export const ItemColumns: Column<Item>[] = [
  {
    accessor: "name",
    Header: "品名",
  },
  {
    accessor: "code",
    Header: "料号",
  },
  {
    accessor: "specs",
    Header: "规格",
  },
];
