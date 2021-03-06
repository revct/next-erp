import App from "~/components/App";
import userContacts from "~/data/useContacts";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import ContactForm from "../../components/Contact/ContactForm";

const ContactShowPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isValidating, mutate } = userContacts(id);

  const handleCreate = async (data = {}) => {
    await fetch("/api/contacts", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  const handleSave = async (data: any) => {
    if (data.id) {
      await handleUpdate(data);
    } else {
      await handleCreate(data);
    }
    router.back();
  };

  const handleUpdate = async (data: any) => {
    await fetch("/api/contacts", {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  return (
    <App>
      <ContactForm
        loading={isValidating}
        defaultValues={data}
        onSubmit={(data) => handleSave(data)}
      ></ContactForm>
    </App>
  );
};

export default ContactShowPage;
