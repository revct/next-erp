/* eslint-disable react/display-name */
import { Item } from "@prisma/client";
import { Column } from "react-table";
import Link from "next/link";

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
  {
    accessor: "id",
    Header: "编辑",
    Cell: ({ value }) => (
      <div className="space-x-2">
        <Link href={`/items/${value}`} passHref>
          <a className="text-indigo-600 hover:text-indigo-900 text-sm">编辑</a>
        </Link>
      </div>
    ),
  },
];
