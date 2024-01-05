'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/home-3-logo.png'
import { mooli } from '@/app/layout'
import Link from 'next/link'
import { FiShoppingCart } from "react-icons/fi"
import { signIn, signOut, useSession } from 'next-auth/react'




const Nabvar = () => {
    const session = useSession()
    return (
        <div className={`${mooli.className} flex justify-between items-center p-8`}>
            <div className=''>
                <ul className='flex justify-between items-center gap-4 font-semibold text-lg'>
                    <li className='text-[#F43B00] cursor-pointer'><Link href={'/auth/signup'}>
                        Home
                    </Link></li>
                    <li className='text-[#F43B00] cursor-pointer'><Link href={'/menu'}>
                        Menu
                    </Link></li>
                    <li className='text-[#F43B00] cursor-pointer'><Link href={'/contact'}>
                        Contact
                    </Link></li>
                    <li className='text-[#F43B00] cursor-pointer'><Link href={'/about'}>
                        About
                    </Link></li>
                </ul>
            </div>
            <div><Image src={logo} alt='logo' width={150} height={150} style={{
                // backgroundColor: "#F43B00",
                mixBlendMode: "multiply",
                filter: "invert(54%) sepia(100%) saturate(7075%) hue-rotate(19deg) brightness(108%) contrast(110%)"
            }} /></div>

            <div className='flex gap-4 items-center'>
                <div className='relative'>
                    <FiShoppingCart size={24} className={`text-[#F43B00]`} />
                    <span className='absolute -top-[18px] -right-2 font-semibold text-lg text-[#F43B00]'>0</span>
                </div>
                <div>
                    {session && session.status === "authenticated" && session.data?.user ? <Link href={`/profile/${session.data.user.sub}`} >Profile</Link> : null}
                </div>
                <div>
                    {session.status === "authenticated" ? <button onClick={() => signOut()}>Sign out</button> : <button onClick={() => signIn()}>Sing-in</button>}
                </div>
            </div>
        </div>
    )
}

export default Nabvar