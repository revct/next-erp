import { Prisma } from "@prisma/client";
import { omit } from "lodash-es";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

type CRUDParams = {
  model: Prisma.ModelName;
};

const CRUD = (params: CRUDParams) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    switch (method) {
      case "GET":
        {
          const rows = await prisma.item.findMany();
          res.status(200).json({
            rows,
          });
        }
        break;
      case "POST":
        {
          const data = req.body;
          const rows = await prisma.contact.create({ data });
          res.status(200).json(rows);
        }
        break;
      case "PUT":
        {
          const data = omit(req.body, []);
          const rows = await prisma.contact.update({
            data: omit(data, "id"),
            where: { id: data.id },
          });

          res.status(200).json(rows);
        }
        break;
      default:
        res.status(200).json({ message: "没有定义的请求" });
    }
  };
};

export default CRUD;
