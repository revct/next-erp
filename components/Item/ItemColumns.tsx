/* eslint-disable react/display-name */
import { Column } from "react-table";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const ItemColumns: Column<any>[] = [
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
            <Icon icon="ant-design:edit-filled"></Icon>
          </button>
        </Link>
      </div>
    ),
  },
];
