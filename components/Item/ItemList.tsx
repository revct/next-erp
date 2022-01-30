import { ItemColumns } from "~/components/Item/ItemColumns";
import Table from "~/components/DataGrid/Table";
import { useItems } from "~/data/items";
import Link from "next/link";

interface Props {}

const ItemList = (props: Props) => {
  const { data: items, mutate } = useItems();
  return (
    <div className="space-y-2">
      <section>
        <Link href="/items/create" passHref>
          <button className="btn">新增</button>
        </Link>
      </section>
      <Table columns={ItemColumns} rows={items.rows}></Table>
    </div>
  );
};

export default ItemList;
