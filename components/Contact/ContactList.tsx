import { ContactColumns } from "@/components/Contact/ContactColumns";
import userContacts from "@/data/useContacts";
import { Button } from "@chakra-ui/react";
import Table from "@/components/Table";
import Link from "next/link";

const ContactList = () => {
  const { data, mutate } = userContacts();
  const columns = ContactColumns;

  return (
    <div className="space-y-2">
      <section>
        <Link href="/contacts/create" passHref>
          <Button colorScheme="green">新增</Button>
        </Link>
      </section>
      <Table columns={columns} rows={data.rows}></Table>
    </div>
  );
};

export default ContactList;
