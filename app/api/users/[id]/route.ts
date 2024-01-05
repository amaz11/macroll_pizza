import prisma from "../../db/db";
export async function GET(req: Request,) {
    const id = req.url.split('users/')[1]
    try {
        const userId: number | undefined = typeof id === 'string' ? parseInt(id) : undefined;
        if (userId === null) {
            return Response.json({ error: 'Invalid ID provided' }, { status: 403 });
        }
        const user = await prisma?.user.findUnique({ where: { id: userId }, select: { id: true, email: true, address: true } })

        if (!user) {
            return Response.json({ error: 'User not found' }, { status: 404 });
        }
        return Response.json({ success: true, data: user, }, { status: 200 });
    } catch (error) {
        return Response.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}