import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Only import prisma if DATABASE_URL is available (runtime)
let prisma: any = null;
if (typeof process.env.DATABASE_URL !== "undefined" && process.env.DATABASE_URL?.startsWith("postgresql://")) {
  try {
    // Use dynamic import to avoid build-time errors
    const module = await import("@/lib/prisma");
    prisma = module.prisma;
  } catch (e) {
    console.warn("Prisma client not available");
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // If prisma is not available, allow login (for local dev without DB)
        if (!prisma) {
          console.warn("Prisma client not available, using fallback auth");
          // Return a mock user for development
          return {
            id: "fallback-user-id",
            name: credentials.email,
            email: credentials.email,
            image: null,
          };
        }

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email.toLowerCase() },
          });

          if (!user?.password) return null;

          const validPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!validPassword) return null;

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.avatarUrl,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.sub = user.id;
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        (session.user as typeof session.user & { id: string }).id = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
