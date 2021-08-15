import { ItemColumns } from "@/components/Item/ItemColumns";
import Table from "@/components/Table";
import { useItems } from "@/data/items";
import { Button } from "@chakra-ui/button";
import Link from "next/link";

interface Props {}

const ItemList = (props: Props) => {
  const { data: items, mutate } = useItems();
  return (
    <div className="space-y-2">
      <section>
        <Link href="/items/create" passHref>
          <Button colorScheme="blue">新增</Button>
        </Link>
      </section>
      <Table columns={ItemColumns} rows={items.rows}></Table>
    </div>
  );
};

export default ItemList;
