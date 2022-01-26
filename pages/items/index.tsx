import App from "~/components/App";
import ItemList from "~/components/Item/ItemList";
import { NextPage } from "next";

const ItemPage: NextPage = () => {
  return (
    <App>
      <ItemList></ItemList>
    </App>
  );
};

export default ItemPage;
