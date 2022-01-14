import { ContactColumns } from "@/components/Contact/ContactColumns";
import Table from "@/components/Table";
import fetcher from "@/utils/fetcher";
import Link from "next/link";
import useSWR from "swr";

const ContactList = () => {
  const { data } = useSWR("/api/contacts", fetcher);
  console.log(data);
  const columns = ContactColumns;

  return (
    <div className="space-y-2">
      <section>
        <Link href="/contacts/create" passHref>
          <button className="btn">新增</button>
        </Link>
      </section>
      <Table columns={columns} rows={data?.rows || []}></Table>
    </div>
  );
};

export default ContactList;
