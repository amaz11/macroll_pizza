'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/home-3-logo.png'
import { mooli } from '@/app/layout'
import Link from 'next/link'
import { FiShoppingCart } from "react-icons/fi"
import { FaBars } from "react-icons/fa";
import { signIn, signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'


interface User {
    id: string,
    role: string,
    address: string,
    email: string,
}

const Nabvar = ({ navcon, setNavcon }: { navcon: boolean, setNavcon: (navcon: boolean) => void }) => {
    const session = useSession()
    const user = session.data?.user as User

    return (
        <div className={`${mooli.className} flex justify-between items-center p-4 md:p-8`}>
            <div className='hidden lg:block'>
                <ul className='flex justify-between items-center gap-4 font-semibold text-lg'>
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
                <div className='hidden md:block'>
                    {session && session.status === "authenticated" && session.data?.user ? <Link href={`/profile/${user.id}`} >Profile</Link> : null}
                </div>
                <div className='hidden md:block'>
                    {session.status === "authenticated" ? <button onClick={() => signOut()}>Sign out</button> : <button onClick={() => { signIn(); redirect('/') }}>Sing-in</button>}
                </div>
                <div className='block lg:hidden'>
                    <FaBars size={28} className='text-[#F43B00]' onClick={() => setNavcon(!navcon)} />
                </div>
            </div>
        </div>
    )
}

export default Nabvar