import { ContactColumns } from "@/pages/contacts/_src/ContactColumns";
import userContacts from "@/data/useContacts";
import { useTable } from "react-table";
import Table from "@/components/Table";

const ContactList = () => {
  const { data, mutate } = userContacts();
  const columns = ContactColumns;

  return <Table columns={columns} rows={data.rows}></Table>;
};

export default ContactList;
