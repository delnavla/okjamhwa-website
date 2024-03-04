import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";

export const authOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
    }),
  ],
  callbacks: {  
    async signIn(user) {
      const isAdmin = (user.user.email === process.env.ADMIN_EMAIL); 
      if (isAdmin) {
        return true; 
      } else {
        return false; 
      }
    },
    async session({ session, token, user }) {
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET
};
export default NextAuth(authOptions); 