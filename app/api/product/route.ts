import { NextRequest } from "next/server"
import prisma from "../db/db"

interface Arr {
    id: number
}[]

export async function POST(req: NextRequest) {
    // try {

    const body = await req.formData()
    const name = body.get('name')
    const price = body.get('price')
    const category = body.get('category') as string

    // const categoryString: string | null = category !== null ? category.toString() : null;

    // if (!body.name.length || !body.price.toString().length) {
    //     return Response.json({ error: `Name and price can't be Empty.` })

    // }
    // const product = await prisma.product.create({
    //     data: {
    //         ...body,
    //         category: { set: body.category }
    //     },
    //     include: {
    //         category: true
    //     }

    // })
    const categoryPerse = JSON.parse(category)

    console.log(categoryPerse)
    return Response.json({ status: 201 })

    // } catch (error) {
    //     return Response.json({ error: "Some thing is not right" }, { status: 500 })
    // }

}

export async function GET() {
    try {
        const product = await prisma.product.findMany({
            include: {
                category: true
            }
        })

        return Response.json({ data: product }, { status: 200 })
    } catch (error) {
        return Response.json({ error: "Some thing is not right" }, { status: 500 })
    }
}