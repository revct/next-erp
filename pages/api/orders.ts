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
        key: "number",
        name: "订单号",
      },
      {
        key: "date",
        name: "日期",
      },
      {
        key: "customer",
        name: "客户",
      },
      {
        key: "item",
        name: "产品",
      },
      {
        key: "store",
        name: "仓库",
      },
    ],
    rows: [],
  });
}
