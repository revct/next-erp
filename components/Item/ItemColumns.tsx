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
    Header: "操作",
    Cell: ({ value }) => (
      <div className="space-x-2">
        <Link href={`/items/${value}`} passHref>
          <button className="btn btn-square">
            <span className="iconify" data-icon="ant-design:edit-filled"></span>
          </button>
        </Link>
      </div>
    ),
  },
];
