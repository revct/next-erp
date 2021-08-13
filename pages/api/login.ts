// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  switch (req.method) {
    case "POST":
      {
        const data = req.body;
        res.status(200).json(data);
      }
      break;

    default:
      res.status(200).json({ message: "没有定义的请求" });
  }
}
