import App from "~/components/App";
import { NextRouter, useRouter } from "next/dist/client/router";
import ItemForm from "~/components/Item/ItemForm";
import useSWR from "swr";

interface IProps {
  query: {
    id: string;
  };
}

const ItemShowPage = (props: IProps) => {
  const { query } = props;
  const { id } = query;
  const { data } = useSWR(`/api/items/${id}`);

  return (
    <App>
      <ItemForm defaultValues={data}></ItemForm>
    </App>
  );
};

export const getServerSideProps = async ({ query }: NextRouter) => {
  return {
    props: {
      query,
    },
  };
};

export default ItemShowPage;
