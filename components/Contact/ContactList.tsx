import { ContactColumns } from "~/components/Contact/ContactColumns";
import Table from "~/components/Table";
import fetcher from "~/utils/fetcher";
import { Button } from "@mantine/core";
import useSWR from "swr";
import ContactForm from "./ContactForm";
import useModals from "../Modal/useModals";

const ContactList = () => {
  const { data } = useSWR("/api/contacts", fetcher);
  const columns = ContactColumns;
  const modals = useModals();
  const handleOpenModal = () => {
    const createModal = modals.openModal({
      title: "新建联系人",
      children: (
        <>
          <ContactForm></ContactForm>
        </>
      ),
      size: 600,
    });
  };
  return (
    <div className="space-y-2">
      <section>
        <Button className="btn" onClick={() => handleOpenModal()}>
          新增
        </Button>
      </section>
      <Table columns={columns} rows={data?.rows || []}></Table>
    </div>
  );
};

export default ContactList;
