// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  switch (req.method) {
    case "GET":
      {
        const { id } = req.query;
        if (!id) return;
        const data = await prisma.item.findUnique({
          where: { id: Number(id) },
        });
        res.status(200).json(data);
      }
      break;
    default:
      res.status(200).json({ message: "没有定义的请求" });
  }
}
