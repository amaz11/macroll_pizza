import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "../../db/db"
import brcrypt from 'bcryptjs'

interface User {
    id: string;
    email: string,
    password?: string;
    adddress: string
    createdAt: Date;
    updatedAt: Date;
}

const handler = NextAuth({
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
                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    }
                })
                const passOk = user && brcrypt.compare(password, user.password)
                if (passOk) {
                    return {
                        id: user.id.toString(),
                        email: user.email,
                        address: user.address,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt,
                    }
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    pages: {
        signIn: '/app/auth/signin'
    }
})

export { handler as GET, handler as POST }