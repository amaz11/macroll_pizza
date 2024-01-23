import prisma from "../db/db"
import Stripe from "stripe";


const calculateOrderTotalAmount = (items: any) => {
    const totalPrice = items.reduce((acc: number, item: any) => {
        return (+acc) + ((+item.price) * item.quantity!)
    }, 0)
    return totalPrice
}

export const stripe = new Stripe(process.env.STRIPE_SECTRET_KEY as string)
export async function POST(req: Request) {
    try {
        const order = await req.json();
        const Product = await prisma.product.findMany({
            where: {
                id: { in: order.cart.map((item: any) => item.id) }
            }
        })
        const ProductwithQuantity = order.cart.map((item: any) => {
            const product: any = Product.find((itemProduct: any) => item.id === itemProduct.id)
            return { ...item, price: product.price }
        }
        )

        const totalPrice = calculateOrderTotalAmount(ProductwithQuantity)
        const charge = await stripe.paymentIntents.create({
            amount: totalPrice * 100,
            currency: 'usd',
            automatic_payment_methods: { enabled: true },
        })
        console.log(" matha 1");
        const orderCreate = await prisma.order.create({
            data: {
                inventoryCode: order.token.id,
                totalPrice: totalPrice,
                userId: +order.userId,
                product: {
                    createMany: {
                        data: order.cart.map((item: any) => { return { productId: item.productId, quantity: item.quantity } })
                    }
                }
            }
        })
        console.log(" matha 2");
        return Response.json({ data: totalPrice, charge, orderCreate });
    } catch (error) {
        return Response.json({ error });

    }

}