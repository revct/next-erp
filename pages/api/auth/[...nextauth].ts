import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch(`${req.headers.origin}/api/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        // const user = await res.json();
        const user = { id: 1, name: "何老板", email: "admin@example.com" };
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});
