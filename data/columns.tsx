/* eslint-disable react/display-name */
import { Button } from "@material-ui/core";
import Link from "next/link";
import { GridColDef, GridColumnProp } from "@material-ui/data-grid";

export const PersonColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "名称",
    flex: 1,
    renderCell: ({ row }) => (
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10 bg-green-500 rounded-full"></div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">{row.name}</div>
          <div className="text-sm text-gray-500">{row.phone}</div>
        </div>
      </div>
    ),
  },
  {
    field: "company",
    headerName: "所属公司",
    flex: 1,
  },
  {
    field: "address",
    headerName: "地址",
    flex: 1,
    editable: true,
  },
  {
    field: "remarks",
    headerName: "备注",
    flex: 1,
  },
  {
    field: "id",
    headerName: "操作",
    width: 120,
    sortable: false,
    filterable: false,
    renderCell: ({ value }) => (
      <Link href={`/contacts/${value}`} passHref>
        <Button>编辑</Button>
      </Link>
    ),
  },
];

export const ItemColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "品名",
    flex: 1,
  },
  {
    field: "code",
    headerName: "料号",
    flex: 1,
  },
  {
    field: "specs",
    headerName: "规格",
    flex: 1,
  },
  {
    field: "supplierId",
    headerName: "供应商",
    flex: 1,
  },
  {
    field: "supplier.phone",
    headerName: "供应商电话",
    editable: false,
    flex: 1,
  },
];

export const StockColumns: GridColDef[] = [
  {
    field: "item",
    headerName: "品名",
    flex: 1,
  },
  {
    field: "code",
    headerName: "料号",
    flex: 1,
  },
  {
    field: "number",
    headerName: "数量",
    flex: 1,
  },
  {
    field: "store",
    headerName: "储位",
    flex: 1,
  },
];

export const OrderColumns: GridColDef[] = [
  {
    field: "status",
    headerName: "订单状态",
    flex: 1,
  },
  {
    field: "date",
    headerName: "交付日期",
    flex: 1,
  },
  {
    field: "customer",
    headerName: "客户信息",
    flex: 1,
  },
  {
    field: "item",
    headerName: "产品信息",
    flex: 1,
  },
];
