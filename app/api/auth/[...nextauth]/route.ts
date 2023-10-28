import { Session } from "next-auth"
import NextAuth from "next-auth/next"
// import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import bcrypt from "bcrypt"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      name: "github",
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    // GoogleProvider({
    //   name: "google",
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    // CredentialsProvider({
    //   name: "credentials",
    //   credentials: {
    //     email: { label: "email", type: "email" },
    //     password: { label: "password", type: "password" },
    //   }
    // //   async authorize(credentials) {
    // //     if (!credentials?.email || !credentials?.password)
    // //       throw new Error("Invalid credentials")

    // //     try {
    // //       const user = await prisma.user.findFirst({
    // //         where: { email: credentials.email },
    // //       })
    // //       if (!user)
    // //         throw new Error("Invalid credentials")

    // //     //   const isValid = await bcrypt.compare(
    // //     //     credentials.password,
    // //     //     user
    // //     //   )
    // //     //   if (!isValid) throw new Error("Invalid credentials")
    // //       return user
    // //     } catch (e: any) {
    // //       throw new Error("Invalid credentials")
    // //     }
    // //   },
    // }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
})

export { handler as GET, handler as POST }