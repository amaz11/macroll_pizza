'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface User {
    id: string,
    role: string,
    address: string,
    email: string,
}
const AdminNab = () => {
    const path = usePathname()
    const session = useSession()
    const user = session.data?.user as User
    return (
        <div className='flex justify-center items-center flex-wrap gap-8 text-white'>
            {session && session.status === "authenticated" && session.data?.user ? <Link className={`${path === `/profile/${user.id}` ? 'bg-[#F43B00]' : 'bg-gray-200 text-slate-800 '} cursor-pointer  rounded-full py-1 px-6`} href={`/profile/${user.id}`}>Profile</Link> : null}

            {
                session && session.status === "authenticated" && session.data.user && user.role === 'ADMIN' ? <><Link className={`${path === '/categories' ? 'bg-[#F43B00]' : 'bg-gray-200 text-slate-800'} cursor-pointer  rounded-full py-1 px-6`} href={'/categories'}>Category</Link>
                    <Link className={`${path === '/product' ? 'bg-[#F43B00]' : 'bg-gray-200 text-slate-800'}  cursor-pointer rounded-full py-1 px-6`} href={'/product'}>Product</Link> </> : null
            }

        </div>
    )
}

export default AdminNab