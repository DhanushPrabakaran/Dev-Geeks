
import type { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const OPTIONS: AuthOptions = {

  providers: [
    GitHubProvider({
      name:"github",
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    })
  ],
  session:{
    strategy:"jwt",
  },
  secret: process.env.NEXTAUTH_URL as string,
  adapter: PrismaAdapter(prisma)
};