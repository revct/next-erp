import { NextPage } from "next";

import Admin from "~/components/Admin";
import ContactList from "../../components/Contact/ContactList";

const ContactPage: NextPage = () => {
  return (
    <Admin>
      <ContactList></ContactList>
    </Admin>
  );
};

export default ContactPage;
