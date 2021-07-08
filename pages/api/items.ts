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
        name: "品名",
      },
      {
        key: "code",
        name: "料号",
      },
      {
        key: "specs",
        name: "规格",
      },
    ],
    rows: [],
  });
}
