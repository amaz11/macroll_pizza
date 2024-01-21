import prisma from "../db/db"

export async function POST(req: Request) {
    const order = await req.json();
    // console.log(order)
    // if (typeof order.length === 'undefined' || order.length === null) {
    //     return Response.json({ error: `Category can't be Empty.` })

    // }
    const orderCreate = await prisma.order.create({
        data: {
            inventoryCode: order.inventoryCode,
            totalPrice: +order.totalPrice,
            userId: order.userId,
            product: {
                createMany: {
                    data: order.product
                }
            }
        }
    })
    return Response.json({ data: orderCreate });
}