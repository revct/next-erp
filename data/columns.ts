import { GridColDef, GridColumnProp } from "@material-ui/data-grid";
import { Person } from "@prisma/client";

export const PersonColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "客户姓名",
    flex: 1,
  },
  {
    field: "phone",
    headerName: "联系方式",
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
