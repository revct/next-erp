import { NextPage } from "next";
import Layout from "../components/Layout/components/Layout";
import { ItemColumns } from "../data/columns";
import useItems from "../data/useItems";
import usePersons from "../data/usePersons";
import { Autocomplete, Button, TextField } from "@material-ui/core";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { DataGrid } from "@material-ui/data-grid";

const DoublingEditor = forwardRef((props, ref) => {
  const [value, setValue] = useState(parseInt(props.value));

  const { data: persons } = usePersons();
  const options = persons?.rows.map((item: any) => item?.name);
  const refInput = useRef(null);

  useEffect(() => {
    // focus on the input
    setTimeout(() => refInput.current.focus());
  }, []);

  /* Component Editor Lifecycle methods */
  useImperativeHandle(ref, () => {
    return {
      // the final value to send to the grid, on completion of editing
      getValue() {
        // this simple editor doubles any value entered into the input
        return 1;
      },

      // Gets called once before editing starts, to give editor a chance to
      // cancel the editing before it even starts.
      isCancelBeforeStart() {
        return false;
      },

      // Gets called once when editing is finished (eg if Enter is pressed).
      // If you return true, then the result of the edit will be ignored.
      isCancelAfterEnd() {
        // our editor will reject any value greater than 1000
        return value > 1000;
      },
    };
  });

  return (
    <Autocomplete
      options={options}
      ref={refInput}
      value={value}
      size="small"
      style={{ width: "100%" }}
      onSelect={(val) => console.log(val)}
      renderInput={(params) => <TextField {...params} />}
    />
  );
});

DoublingEditor.displayName = "DoublingEditor";

const Customer: NextPage = () => {
  const { data: items, mutate } = useItems();

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
        <Button
          onClick={() => handleCreate()}
          variant="contained"
          color="primary"
          disableElevation
        >
          新增
        </Button>
      </section>
      <DataGrid columns={ItemColumns} rows={items.rows}></DataGrid>
    </Layout>
  );
};

export default Customer;
