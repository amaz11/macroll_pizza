import { writeFile, unlink } from "fs/promises";
import prisma from "../../db/db";

export async function DELETE(req: Request) {
    try {
        const id = req.url.split('product/')[1]
        if (id === null) {
            return Response.json({ error: 'Invalid ID provided' }, { status: 403 });
        }
        const product = await prisma.product.findUnique({
            where: {
                id: +id,
            }
        })

        if (!product) {
            return Response.json({ error: 'No product Here' }, { status: 204 });
        }

        unlink(`./public/${product.image}`)
        await prisma.product.delete({ where: { id: +id } })
        return Response.json({ message: 'Delete successfully' }, { status: 203 })

    } catch (error) {
        return Response.json({ error: "Some thing is not right" }, { status: 500 })
    }
}


export async function PUT(req: Request) {
    try {
        const id = req.url.split('product/')[1]
        const body = await req.formData()
        const name = body.get('name') as string
        const price = body.get('price') as string
        const description = body.get('description') as string
        const category = body.get('category') as string
        const image: File | string | null = body.get('image') as unknown as File
        if (id === null) {
            return Response.json({ error: 'Invalid ID provided' }, { status: 403 });
        }
        const product = await prisma.product.findUnique({
            where: {
                id: +id,
            },
            include: {
                category: true
            }
        })

        if (!product) {
            return Response.json({ error: 'No product Here' }, { status: 204 });
        }

        const categoryPerse = JSON.parse(category)
        const categoryEqualsByID = (arr1: { id: number }[], arr2: { id: number, category: string }[]) => {
            if (arr1.length !== arr2.length) {
                return false;
            }
            const idSet1 = new Set(arr1.map(item => item.id));
            const idSet2 = new Set(arr2.map(item => item.id));

            return compareSets(idSet1, idSet2);
        }

        const compareSets = (set1: any, set2: any) => {
            if (set1.size !== set2.size) {
                return false;
            }

            for (const item of set1) {
                if (!set2.has(item)) {
                    return false;
                }
            }

            return true;
        }
        const filtterArrConnect = categoryPerse.filter((a: { id: number }) => !product?.category.some((b) => b.id === a.id)) // uncommmen from arr2
        const filtterArrDisConnect = product?.category.filter(a => !categoryPerse.some((b: { id: number }) => b.id === a.id)) // uncommmen from arr1


        if (typeof image === 'string') {
            if (categoryEqualsByID(categoryPerse, product.category)) {
                await prisma.product.update({
                    where: { id: +id },
                    data: {
                        name: name,
                        price: +price,
                        description,
                    }
                })
                return Response.json({ message: 'Update successfully' }, { status: 200 })

            }
            await prisma.product.update({
                where: { id: +id },
                data: {
                    name: name,
                    price: +price,
                    description,
                    category: {
                        connect: filtterArrConnect,
                        disconnect: filtterArrDisConnect
                    }
                }
            })
            return Response.json({ message: 'Update successfully' }, { status: 200 })

        }

        unlink(`./public/${product.image}`)
        const imageBytes = await image.arrayBuffer()
        const imageBuffer = Buffer.from(imageBytes)
        const imagePath = `./public/file/${Date.now()}${image.name}`
        await writeFile(imagePath, imageBuffer)
        if (categoryEqualsByID(categoryPerse, product.category)) {
            await prisma.product.update({
                where: { id: +id },
                data: {
                    name: name,
                    price: +price,
                    description,
                    image: imagePath.split('./public/')[1].toString(),
                }
            })
            return Response.json({ message: 'Update successfully' }, { status: 200 })

        }
        await prisma.product.update({
            where: { id: +id },
            data: {
                name: name,
                price: +price,
                description,
                image: imagePath.split('./public/')[1].toString(),
                category: {
                    connect: filtterArrConnect,
                    disconnect: filtterArrDisConnect
                }
            }
        })
        return Response.json({ message: 'Update successfully' }, { status: 200 })


    } catch (error) {
        return Response.json({ error: "Some thing is not right" }, { status: 500 })
    }
}