/* eslint-disable react/display-name */
import { Icon } from "@iconify/react";
import { useModals } from "@mantine/modals";
import { Column } from "react-table";
import ContactForm from "./ContactForm";

export const ContactColumns: Column<any>[] = [
  {
    accessor: "name",
    Header: "名称",
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
                modals.closeModal(editModal);
              }}
            ></ContactForm>
          ),
        });
      };
      return (
        <div className="flex space-x-2">
          <button className="btn btn-square btn-xs" onClick={handleEditModal}>
            <Icon icon="ant-design:edit-filled"></Icon>
          </button>

          <button className="btn btn-square btn-xs">
            <Icon icon="ant-design:delete-filled"></Icon>
          </button>
        </div>
      );
    },
  },
];
