// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient, Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { omit } from "lodash-es";
const prisma = new PrismaClient();

const findContactOne = async (id: number) => {
  const data = await prisma.contact.findUnique({
    where: {
      id: Number(id),
    },
  });
  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  switch (req.method) {
    case "GET":
      {
        const { id } = req.query;
        const data = await findContactOne(Number(id));
        res.status(200).json(data);
      }
      break;
    default:
      res.status(200).json({ message: "没有定义的请求" });
  }
}
