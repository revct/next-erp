import { useCombobox } from "downshift";
import { useState } from "react";

const Autocomplete = () => {
  const [items, setItems] = useState([]);
  const { getInputProps } = useCombobox({
    items,
  });
  return (
    <div>
      <input {...getInputProps()} />
    </div>
  );
};

export default Autocomplete;
