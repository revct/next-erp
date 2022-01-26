/* eslint-disable react/display-name */
import { Icon } from "@iconify/react";
import { ActionIcon } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { Column } from "react-table";
import ContactForm from "./ContactForm";

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
    accessor: "phone",
    width: 200,
    Header: "联系电话",
  },
  {
    accessor: "remarks",
    Header: "备注",
  },
  {
    accessor: "action",
    width: 100,
    Header: "操作",
    Cell: ({ value }) => {
      const modals = useModals();

      const handleEditModal = () => {
        const editModal = modals.openModal({
          title: "编辑联系人",
          children: (
            <ContactForm
              onSubmit={(val) => {
                console.log(val);
                modals.closeModal(editModal);
              }}
            ></ContactForm>
          ),
        });
      };
      return (
        <div className="flex space-x-2">
          <ActionIcon onClick={handleEditModal}>
            <Icon icon="ant-design:edit-filled"></Icon>
          </ActionIcon>

          <ActionIcon>
            <Icon icon="ant-design:delete-filled"></Icon>
          </ActionIcon>
        </div>
      );
    },
  },
];
