import { NextPage } from "next";
import dynamic from "next/dynamic";

import App from "~/components/App";

const ContactList = dynamic(() => import("~/components/Contact/ContactList"), {
  ssr: false,
});

const ContactPage: NextPage = () => {
  return (
    <App>
      <ContactList></ContactList>
    </App>
  );
};

export default ContactPage;
