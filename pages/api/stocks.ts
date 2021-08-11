// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";
import { pick } from "lodash";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  switch (req.method) {
    case "GET":
      {
        const rows = await prisma.stock.findMany();
        res.status(200).json({
          rows,
        });
      }
      break;
    case "POST":
      {
        const data = pick(req.body, ["id"]);
        const rows = await prisma.stock.create({
          data,
        });

        res.status(200).json(rows);
      }
      break;
    case "PUT":
      {
        const data = pick(req.body, ["id"]);
        const rows = await prisma.stock.update({
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
