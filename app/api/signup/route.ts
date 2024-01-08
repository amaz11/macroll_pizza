import prisma from "../db/db"
import bycrypt from 'bcryptjs'

export async function POST(req: Request) {
    try {
        const body = await req.json()

        if (!body.email.length) {
            return Response.json({ error: `Email can't be Empty.` })

        }

        if (!body?.password.length || body.password.length < 6) {
            return Response.json({ error: 'Password must be at least 6 characters' })
        }

        const salt = await bycrypt.genSalt(10)
        const hashPass = await bycrypt.hash(body.password, salt)
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: hashPass,
                address: body.address
            }
        })
        return Response.json(user, { status: 201 })

    } catch (error) {
        return Response.json({ error: "Some thing is not right" })
    }

}