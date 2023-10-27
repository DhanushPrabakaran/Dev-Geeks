import NextAuth, { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const OPTIONS: AuthOptions = {
    providers: [
      GitHubProvider({
        name: "GitHub",
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!
      })
    ],
    // pages: {
    //     signIn: "/signin",
    //     signOut: "/signout"
    //   }
    
  };


const handler = NextAuth(OPTIONS);
export { handler as GET, handler as POST };