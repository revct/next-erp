import {
  GridAlignment,
  GridColDef,
  GridRowsProp,
} from "@material-ui/data-grid";
import { get } from "lodash";
import { FunctionComponent, ReactNode } from "react";

interface TableProps {
  columns: ColumnsProp[];
  rows: GridRowsProp;
}

type ColumnsProp = Pick<
  GridColDef,
  "align" | "field" | "headerName" | "flex"
> & {
  renderCell?: (params: CellParams) => ReactNode;
};

type CellParams = {
  field: string;
  value: string | number | boolean | Date | null | undefined | object;
  row: any;
};

const Table: FunctionComponent<TableProps> = (props) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {props.columns.map((item) => (
                    <th
                      key={item.field}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {item.headerName || item.field}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {props.rows.map((row) => (
                  <tr key={row.id}>
                    {props.columns.map((column) => {
                      const value = get(row, column.field);
                      return (
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                          key={column.field}
                        >
                          {column.renderCell ? (
                            column.renderCell({
                              field: column.field,
                              value,
                              row,
                            })
                          ) : (
                            <span>{value}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
