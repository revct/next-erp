/* eslint-disable react/display-name */
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Column } from "react-table";
import DeleteConfirm from "../Confirm/DeleteConfirm";

export const ContactColumns: Column<any>[] = [
  {
    accessor: "name",
    Header: "名称",
    Cell: ({ row: { original } }) => (
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10 bg-green-500 rounded-full"></div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            {original?.name}
          </div>
          <div className="text-sm text-gray-500">{original?.phone}</div>
        </div>
      </div>
    ),
  },
  {
    accessor: "company",
    Header: "所属公司",
  },
  {
    accessor: "address",
    width: 200,
    Header: "地址",
  },
  {
    accessor: "remarks",
    Header: "备注",
  },
  {
    accessor: "id",
    Header: "操作",
    Cell: ({ value }) => (
      <div className="space-x-2">
        <Link href={`/contacts/${value}`} passHref>
          <button className="btn btn-square">
            <Icon icon="ant-design:edit-filled"></Icon>
          </button>
        </Link>
        <DeleteConfirm
          onConfirm={() =>
            fetch(`/api/contacts/${value}`, {
              method: "delete",
              headers: { "Content-Type": "application/json" },
            })
          }
        >
          <button className="btn btn-square">
            <Icon icon="ant-design:delete-filled"></Icon>
          </button>
        </DeleteConfirm>
      </div>
    ),
  },
];
