import prisma from "../../db/db";

export async function DELETE(req: Request) {
    try {
        const id = req.url.split('category/')[1]
        if (id === null) {
            return Response.json({ error: 'Invalid ID provided' }, { status: 403 });
        }
        const category = await prisma.categories.findUnique({
            where: {
                id: +id,
            }
        })

        if (!category) {
            return Response.json({ error: 'No category Here' }, { status: 204 });
        }
        await prisma.categories.delete({ where: { id: +id } })
        return Response.json({ message: 'Delete successfully' }, { status: 203 })

    } catch (error) {
        return Response.json({ error: "Some thing is not right" }, { status: 500 })
    }
}


export async function PUT(req: Request) {
    try {
        const id = req.url.split('category/')[1]
        const body = await req.json()
        if (id === null) {
            return Response.json({ error: 'Invalid ID provided' }, { status: 403 });
        }
        const category = await prisma.categories.findUnique({
            where: {
                id: +id,
            }
        })

        if (!category) {
            return Response.json({ error: 'No category Here' }, { status: 204 });
        }
        await prisma.categories.update({
            where: { id: +id },
            data: {
                category: body.category
            }
        })
        return Response.json({ message: 'Update successfully' }, { status: 203 })

    } catch (error) {
        return Response.json({ error: "Some thing is not right" }, { status: 500 })
    }
}