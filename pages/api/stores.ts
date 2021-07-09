// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Customer from "../persons";

type Table = {
  rows: Row[];
};

type Row = {
  T: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Table>,
) {
  res.status(200).json({
    rows: [],
  });
}
