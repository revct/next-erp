import { Person } from "@prisma/client";
import { AgGridColumn, AgGridColumnProps, AgGridReact } from "ag-grid-react";
import { NextPage } from "next";
import Layout from "../components/Layout/components/Layout";
import useItems from "../data/useItems";
import usePersons from "../data/usePersons";

const Customer: NextPage = () => {
  const { data: items, mutate } = useItems();
  const { data: persons } = usePersons();

  console.log(persons);
  const handleCreate = async () => {
    await fetch("/api/items", {
      method: "post",
      body: JSON.stringify({}),
      headers: {
        "content-type": "application/json",
      },
    });
    mutate();
  };

  const handleUpdate = async (data: any) => {
    await fetch("/api/items", {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    mutate();
  };

  return (
    <Layout>
      <section className="mb-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded"
          onClick={() => handleCreate()}
        >
          新增
        </button>
      </section>
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <AgGridReact
          defaultColDef={{ flex: 1, filter: true, editable: true }}
          rowData={items.rows}
          onCellValueChanged={({ data }) => handleUpdate(data)}
        >
          {items.columns.map((item: any) => (
            <AgGridColumn
              headerName={item.name}
              field={item.key}
              key={item.key}
              {...(item.key === "supplierId" &&
                ({
                  cellEditor: "agSelectCellEditor",
                  cellEditorParams: {
                    values: persons.rows.map((item: Person) => item.id),
                  },
                  filterParams: {
                    valueFormatter: (params: any) =>
                      persons.rows.find(
                        (item: Person) => item.id === params.value,
                      )?.name,
                  },
                  valueFormatter: (params) =>
                    persons.rows.find(
                      (item: Person) => item.id === params.value,
                    )?.name,
                } as AgGridColumnProps))}
            ></AgGridColumn>
          ))}
        </AgGridReact>
      </div>
    </Layout>
  );
};

export default Customer;
