import { NextPage } from "next";

import App from "~/components/App";
import ContactList from "../../components/Contact/ContactList";

const ContactPage: NextPage = () => {
  return (
    <App>
      <ContactList></ContactList>
    </App>
  );
};

export default ContactPage;
