import { NextPage } from "next";
import dynamic from "next/dynamic";
import useSWR from "swr";

import App from "~/components/App";
import { ContactColumns } from "~/components/Contact/ContactColumns";
import ContactForm from "~/components/Contact/ContactForm";
import useModals from "~/components/Modal/useModals";
import Table from "~/components/Table";
import fetcher from "~/utils/fetcher";

const ContactPage: NextPage = () => {
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
    <App>
      <section>
        <button className="btn" onClick={() => handleOpenModal()}>
          新增
        </button>
      </section>
      <Table columns={columns} rows={data?.rows || []}></Table>
    </App>
  );
};

export default ContactPage;
