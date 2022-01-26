/* eslint-disable react/jsx-key */
import { Icon } from "@iconify/react";
import { Pagination } from "@mantine/core";
import { FunctionComponent } from "react";
import { usePagination, useTable } from "react-table";

interface TableProps {
  columns: any;
  rows: any;
}

const Table: FunctionComponent<TableProps> = (props) => {
  const tableInstance = useTable(
    {
      columns: props.columns,
      data: props.rows,
    },
    usePagination,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    canPreviousPage,
    canNextPage,
    page,
    pageCount,
    state: { pageIndex, pageSize },
  } = tableInstance;
  return (
    <div className="space-y-2">
      <table className="table w-full" {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              // eslint-disable-next-line react/jsx-key
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    // eslint-disable-next-line react/jsx-key
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <Pagination
        total={pageCount}
        page={pageIndex + 1}
        position="center"
      ></Pagination>
    </div>
  );
};

export default Table;
