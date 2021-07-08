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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Table>,
) {
  const persons = await prisma.person.findMany();
  res.status(200).json({
    columns: [
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
    ],
    rows: persons,
  });
}
