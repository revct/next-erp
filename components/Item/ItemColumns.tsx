/* eslint-disable react/display-name */
import { Item } from "@prisma/client";
import { Column } from "react-table";
import Link from "next/link";
import { IconButton } from "@chakra-ui/button";

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
          <IconButton
            icon={
              <span
                className="iconify"
                data-icon="ant-design:edit-filled"
              ></span>
            }
            aria-label="Edit"
          >
            编辑
          </IconButton>
        </Link>
      </div>
    ),
  },
];
