import Downshift from "downshift";
import React from "react";

interface Props {}

const items = [
  { value: "apple" },
  { value: "pear" },
  { value: "orange" },
  { value: "grape" },
  { value: "banana" },
];

const SupplierInput = (props: Props) => {
  return (
    <Downshift
      onChange={(selection) => {}}
      itemToString={(item) => (item ? item.value : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div>
          <input {...getInputProps()} className="input input-bordered" />
          <ul {...getMenuProps()}>
            {isOpen
              ? items
                  .filter(
                    (item) => !inputValue || item.value.includes(inputValue),
                  )
                  .map((item, index) => (
                    <li
                      key={item.value}
                      {...getItemProps({
                        index,
                        item,
                        key: item.value,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? "lightgray" : "white",
                          fontWeight: selectedItem === item ? "bold" : "normal",
                        },
                      })}
                    >
                      {item.value}
                    </li>
                  ))
              : null}
          </ul>
        </div>
      )}
    </Downshift>
  );
};

export default SupplierInput;
