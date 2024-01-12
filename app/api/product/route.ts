import { NextRequest } from "next/server"
import prisma from "../db/db"

import { writeFile } from "fs/promises"

export async function POST(req: NextRequest) {
    try {

        const body = await req.formData()
        const name = body.get('name') as string
        const price = body.get('price') as string
        const description = body.get('description') as string
        const category = body.get('category') as string
        const image: File | null = body.get('image') as unknown as File

        // const categoryString: string | null = category !== null ? category.toString() : null;

        if (!name.length && !price.length && !image) {
            return Response.json({ error: `Name, price and image can't be Empty.` })

        }
        const categoryPerse = JSON.parse(category)
        const imageBytes = await image.arrayBuffer()
        const imageBuffer = Buffer.from(imageBytes)
        const imagePath = `./public/file/${Date.now()}${image.name}`
        await writeFile(imagePath, imageBuffer)
        const product = await prisma.product.create({
            data: {
                name: name,
                price: +price,
                description,
                image: imagePath.split('./public/')[1].toString(),
                category: { connect: categoryPerse },
            },
            include: {
                category: true
            }

        })

        return Response.json({ data: product }, { status: 201 })

    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }

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