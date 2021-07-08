// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Customer from "../persons";

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
        key: "name",
        name: "名字",
      },
      {
        key: "code",
        name: "编号",
      },
      {
        key: "address",
        name: "地址",
      },
    ],
    rows: [],
  });
}
