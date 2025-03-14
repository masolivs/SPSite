import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { User } from "next-auth"; 

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }: { user: User }) { 
      if (user?.email !== "contato@silvapradoadv.com.br") {
        return false; 
      }
      return true; 
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
