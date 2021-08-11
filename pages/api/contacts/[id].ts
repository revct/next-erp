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
        const { id } = req.query;

        const data = await prisma.contact.findUnique({
          where: {
            id: Number(id),
          },
        });
        res.status(200).json(data);
      }
      break;
    default:
      res.status(200).json({ message: "没有定义的请求" });
  }
}
