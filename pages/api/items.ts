// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Person, PrismaClient } from "@prisma/client";
import { omit } from "lodash";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

const columns = [
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
  {
    key: "supplierId",
    name: "供应商",
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  switch (req.method) {
    case "GET":
      {
        const rows = await prisma.item.findMany({
          include: {
            supplier: true,
          },
        });
        res.status(200).json({
          columns,
          rows,
        });
      }
      break;
    case "POST":
      {
        const data = req.body;
        data.supplierId = Number(data.supplierId);
        const rows = await prisma.item.create({ data });

        res.status(200).json(rows);
      }
      break;
    case "PUT":
      {
        const data = omit(req.body, ["supplier"]);
        data.supplierId = Number(data.supplierId);
        const rows = await prisma.item.update({
          data,
          where: { id: data.id },
        });

        res.status(200).json(rows);
      }
      break;
    default:
      res.status(200).json({ message: "没有定义的请求" });
  }
}
