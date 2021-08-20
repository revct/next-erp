import { ContactColumns } from "@/components/Contact/ContactColumns";
import userContacts from "@/data/useContacts";
import Table from "@/components/Table";
import Link from "next/link";

const ContactList = () => {
  const { data, mutate } = userContacts();
  const columns = ContactColumns;

  return (
    <div className="space-y-2">
      <section>
        <Link href="/contacts/create" passHref>
          <button className="btn">新增</button>
        </Link>
      </section>
      <Table columns={columns} rows={data.rows}></Table>
    </div>
  );
};

export default ContactList;
