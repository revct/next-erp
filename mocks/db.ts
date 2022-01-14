import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
  // Create a "user" model,
  user: {
    // ...with these properties and value getters.
    id: primaryKey(() => Math.random().toString(36).substring(2, 9)),
    firstName: () => "John",
    lastName: () => "Maverick",
  },

  contacts: {
    id: primaryKey(() => Math.random().toString(36).substring(2, 9)),
    name: () => "John",
  },
});

db.contacts.create();
