import { DataGrid } from "@material-ui/data-grid";
import { NextPage } from "next";
import { PersonColumns } from "@/data/columns";
import usePersons from "@/data/usePersons";
import { Button } from "@material-ui/core";
import Link from "next/link";
import Admin from "@/components/Admin";

const Customer: NextPage = () => {
  const { data, mutate } = usePersons();

  return (
    <Admin>
      <div className=" space-y-2">
        <Link href="/persons/create" passHref>
          <Button color="primary" variant="contained" disableElevation>
            新增
          </Button>
        </Link>
        <DataGrid
          autoHeight
          columns={PersonColumns}
          rows={data.rows}
        ></DataGrid>
      </div>
    </Admin>
  );
};

export default Customer;
