import { rest } from "msw";
import { db } from "./db";

export const handlers = [
  rest.get("/api/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "John Doe",
        },
      ]),
    );
  }),
  rest.get("/api/contacts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        rows: db.contacts.findMany({}),
        total: db.contacts.count(),
      }),
    );
  }),
  rest.post("/api/contacts", (req, res, ctx) => {
    const data: any = req.body;
    const contact = db.contacts.create(data);
    return res(ctx.status(201), ctx.json(contact));
  }),
];
