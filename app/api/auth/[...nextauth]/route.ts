import NextAuth from "next-auth/next";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import GithubProvider from "next-auth/providers/github";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import { OPTIONS  } from "./options";
const handler = NextAuth(OPTIONS)
// const handler = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GithubProvider({
//       name: "github",
//       clientId: process.env.GITHUB_CLIENT_ID as string,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
//     }),
//   ],
//   pages: {
//     // signIn: "/auth/signin",
//     // signOut: "/auth/signout",
//     // error: "/auth/error", // Error code passed in query string as ?error=
//     // verifyRequest: "/auth/verify-request", // (used for check email message)
//     // newUser: "/auth/new-user",
//   },
//   debug: process.env.NODE_ENV === "development",
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET as string,
// });

export { handler as GET, handler as POST };
