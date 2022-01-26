import { Column } from "react-table";

export const OrderColumns: Column<any>[] = [
  {
    accessor: "status",
    Header: "订单状态",
  },
  {
    accessor: "deliveredAt",
    Header: "交付日期",
  },
  {
    accessor: "customerId",
    Header: "客户信息",
  },
  {
    accessor: "itemId",
    Header: "产品信息",
  },
];
