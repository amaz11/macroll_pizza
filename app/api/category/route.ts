import prisma from "../db/db"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        console.log(body)
        if (!body.category.length) {
            return Response.json({ error: `Category can't be Empty.` })

        }
        const category = await prisma.categories.create({
            data: {
                category: body.category
            }
        })
        return Response.json(category, { status: 201 })

    } catch (error) {
        return Response.json({ error: "Some thing is not right" }, { status: 500 })
    }

}

export async function GET() {
    try {
        const categories = await prisma.categories.findMany()

        return Response.json({ data: categories }, { status: 200 })
    } catch (error) {
        return Response.json({ error: "Some thing is not right" }, { status: 500 })
    }
}