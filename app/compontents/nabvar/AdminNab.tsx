'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const AdminNab = () => {
    const path = usePathname()
    const session = useSession()
    console.log(session)

    return (
        <div className='flex justify-center items-center gap-8 text-white'>
            {session && session.status === "authenticated" && session.data?.user ? <Link className={`${path === `/profile/${session.data.user.sub}` ? 'bg-[#F43B00]' : 'bg-gray-200 text-slate-800 '} cursor-pointer  rounded-full py-1 px-6`} href={`/profile/${session.data.user.sub}`}>Profile</Link> : null}
            <Link className={`${path === '/categories' ? 'bg-[#F43B00]' : 'bg-gray-200 text-slate-800'} cursor-pointer  rounded-full py-1 px-6`} href={'/categories'}>Category</Link>
            <Link className={`${path === '/product' ? 'bg-[#F43B00]' : 'bg-gray-200 text-slate-800'}  cursor-pointer rounded-full py-1 px-6`} href={'/product'}>Product</Link>
        </div>
    )
}

export default AdminNab