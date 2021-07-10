import { DataGrid } from "@material-ui/data-grid";
import { NextPage } from "next";
import Layout from "@/components/Layout/components/Layout";
import { PersonColumns } from "@/data/columns";
import usePersons from "@/data/usePersons";
import { Button } from "@material-ui/core";
import Link from "next/link";

const Customer: NextPage = () => {
  const { data, mutate } = usePersons();

  return (
    <Layout className="space-y-2">
      <div>
        <Link href="/persons/create" passHref>
          <Button color="primary" variant="contained" disableElevation>
            新增
          </Button>
        </Link>
      </div>
      <DataGrid autoHeight columns={PersonColumns} rows={data.rows}></DataGrid>
    </Layout>
  );
};

export default Customer;
