import { useTable } from "react-table";
import Empty from "../Empty";

interface TableProps {
  columns: any;
  rows: any;
  loading?: boolean;
}

const Table = (props: TableProps) => {
  const tableInstance = useTable({
    columns: props.columns,
    data: props.rows,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div className="relative">
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
                <tr {...row.getRowProps()} key={row.getRowProps().key}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td
                          {...cell.getCellProps()}
                          key={cell.getCellProps().key}
                        >
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
      {!rows.length && <Empty></Empty>}
    </div>
  );
};

export default Table;
