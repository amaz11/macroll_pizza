'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const AdminNab = () => {
    const path = usePathname()
    const session = useSession()

    return (
        <div className='flex justify-center items-center gap-8 text-white'>
            {session && session.status === "authenticated" && session.data?.user ? <Link className={`${path === `/profile/${session.data.user.id}` ? 'bg-[#F43B00]' : 'bg-gray-200 text-slate-800 '} cursor-pointer  rounded-full py-1 px-6`} href={`/profile/${session.data.user.id}`}>Profile</Link> : null}

            {
                session && session.status === "authenticated" && session.data.user && session.data.user.role === 'ADMIN' ? <><Link className={`${path === '/categories' ? 'bg-[#F43B00]' : 'bg-gray-200 text-slate-800'} cursor-pointer  rounded-full py-1 px-6`} href={'/categories'}>Category</Link>
                    <Link className={`${path === '/product' ? 'bg-[#F43B00]' : 'bg-gray-200 text-slate-800'}  cursor-pointer rounded-full py-1 px-6`} href={'/product'}>Product</Link> </> : null
            }

        </div>
    )
}

export default AdminNab