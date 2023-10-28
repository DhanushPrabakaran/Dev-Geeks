
import type { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const OPTIONS: AuthOptions = {

  providers: [
    GitHubProvider({
      name:"github",
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ],
  session:{
    strategy:"jwt",
  },
  secret: process.env.NEXTAUTH_URL as string,
  adapter: PrismaAdapter(prisma)
};