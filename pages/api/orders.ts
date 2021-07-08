// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Table = {
  columns: Column[];
  rows: Row[];
};

type Column = {
  name: string;
  key: unknown;
};

type Row = {
  T: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Table>,
) {
  res.status(200).json({
    columns: [
      {
        key: "status",
        name: "订单状态",
      },
      {
        key: "date",
        name: "交付日期",
      },
      {
        key: "customer",
        name: "客户信息",
      },
      {
        key: "item",
        name: "产品信息",
      },
    ],
    rows: [],
  });
}
