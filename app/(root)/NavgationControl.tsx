'use client'
import React, { useState } from 'react'
import Nabvar from '../compontents/nabvar/Nabvar'
import Sidebar from '../compontents/sidebar/Sidebar'

const NavgationControl = ({ children }: { children: React.ReactNode }) => {
    const [navcon, setNavcon] = useState<boolean>(false)
    return (
        <div className='flex'>
            <div className={`w-full ${navcon ? 'md:mr-64 md:w-[80%]' : 'md:w-full'} lg:mr-0 transition-all`}>
                <Nabvar navcon={navcon} setNavcon={setNavcon} />
                {children}
                <div className={`bg-black fixed w-full h-full top-0 left-0 z-40 opacity-20 ${navcon ? '' : 'hidden'} md:hidden`} onClick={() => setNavcon(!navcon)}>
                </div>
            </div>
            {/* */}
            <div className={`w-52 h-full fixed top-0 right-0 transition-all border-l-2 border-gray-100 bg-white z-50 md:w-[20%] ${navcon ? '' : '-mr-64 '} lg:hidden`}>
                <Sidebar />
            </div>
        </div>
    )
}

export default NavgationControl