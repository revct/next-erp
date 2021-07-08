// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Person, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
type Table = {
  columns: Column[];
  rows: Person[];
};

type Column = {
  name: string;
  key: unknown;
};

const columns = [
  {
    key: "name",
    name: "客户姓名",
  },
  {
    key: "phone",
    name: "联系方式",
  },
  {
    key: "address",
    name: "地址",
  },
  {
    key: "remark",
    name: "备注",
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  switch (req.method) {
    case "GET":
      {
        const rows = await prisma.person.findMany();
        res.status(200).json({
          columns,
          rows,
        });
      }
      break;
    case "POST":
      {
        const data = req.body;
        const rows = await prisma.person.create({ data });

        res.status(200).json(rows);
      }
      break;
    default:
      res.status(200).json({ message: "没有定义的请求" });
  }
}
