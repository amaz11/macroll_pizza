'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

interface User {
    id: string,
    role: string,
    address: string,
    email: string,
}
const Sidebar = () => {
    const session = useSession()
    const user = session.data?.user as User

    return (
        <div className='p-4 '>
            <ul className='flex flex-col justify-between items-start gap-4 font-semibold text-lg'>
                <li className='text-[#F43B00] cursor-pointer '>
                    <Link data-text="Home" className='hover:underline decoration-wavy underline-offset-8' href={'/'}>
                        Home
                    </Link></li>

                <li className='text-[#F43B00] cursor-pointer'>
                    <Link className='hover:underline decoration-wavy underline-offset-8' href={'/menu'}>
                        Menu
                    </Link></li>
                <li className='text-[#F43B00] cursor-pointer'>
                    <Link className='hover:underline decoration-wavy underline-offset-8' href={'/contact'}>
                        Contact
                    </Link></li>
                <li className='text-[#F43B00] cursor-pointer'>
                    <Link className='hover:underline decoration-wavy underline-offset-8' href={'/about'}>
                        About
                    </Link>
                </li>

                {session && session.status === "authenticated" && session.data?.user ? <Link className='text-[#F43B00] cursor-pointer md:hidden' href={`/profile/${user.id}`} >Profile</Link> : null}
                <div className='md:hidden'>
                    {session.status === "authenticated" ? <button className='text-[#F43B00] cursor-pointer ' onClick={() => signOut()}>Sign out</button> : <button className='text-[#F43B00] cursor-pointer' onClick={() => { signIn(); redirect('/') }}>Sing-in</button>}
                </div>
            </ul>
        </div>
    )
}

export default Sidebar