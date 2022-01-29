import { NextPage } from "next";
import { useEffect, useState } from "react";

import App from "~/components/App";
import { ContactColumns } from "~/components/Contact/ContactColumns";
import ContactForm from "~/components/Contact/ContactForm";
import DataGrid from "~/components/DataGrid";
import useModals from "~/components/Modal/useModals";
import { supabase } from "~/utils/supabase-client";

const ContactPage: NextPage = () => {
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
    <App className="space-y-2">
      <section>
        <button className="btn" onClick={() => handleOpenModal()}>
          新增
        </button>
      </section>
      <DataGrid
        columns={columns}
        request={async ({ offset = 0, limit = 10 }) => {
          return supabase
            .from("contacts")
            .select("phone, name, remarks", { count: "exact" })
            .range(offset * limit, (offset + 1) * limit)
            .limit(limit);
        }}
      ></DataGrid>
    </App>
  );
};

export default ContactPage;
