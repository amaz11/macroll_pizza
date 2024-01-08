import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "../../db/db"
import brcrypt from 'bcryptjs'



const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined, req) {
                const email = credentials?.email
                const password = credentials?.password
                if (!email || !password) {
                    return null;
                }
                const userfind = await prisma.user.findUnique({
                    where: {
                        email,
                    }
                })
                const passOk = userfind && brcrypt.compare(password, userfind.password)
                if (passOk && userfind) {
                    const user = {
                        id: userfind.id.toString(),
                        email: userfind.email,
                        address: userfind.address,
                        role: userfind.role,
                        createdAt: userfind.createdAt,
                        updatedAt: userfind.updatedAt,
                    }
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            return {
                ...token, ...user
            }
        },
        async session({ session, token, }) {
            session.user = token
            return session
        },
    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/'
    }
})

export { handler as GET, handler as POST }