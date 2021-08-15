import Admin from "@/components/Admin";
import ItemList from "@/components/Item/ItemList";
import { NextPage } from "next";

const Customer: NextPage = () => {
  return (
    <Admin>
      <ItemList></ItemList>
    </Admin>
  );
};

export default Customer;
