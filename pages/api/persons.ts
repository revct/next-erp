// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { omit } from "lodash";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  switch (req.method) {
    case "GET":
      {
        const rows = await prisma.person.findMany();
        res.status(200).json({
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
    case "PUT":
      {
        const data = omit(req.body, []);
        const rows = await prisma.person.update({
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
