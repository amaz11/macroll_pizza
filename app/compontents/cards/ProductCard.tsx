import { mooli, staatliches } from '@/app/layout'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface productCard {
    image: string | StaticImageData,
    name: string,
    detail: string,
    prize: string
}

const ProductCard = ({ image, name, detail, prize }: productCard) => {
    return (
        <div className='flex flex-col items-center group'>
            <div className='md:h-72 xl:h-[400px] xl:w-[500px] transition-all duration-700 group-hover:rotate-180 '>
                <Image src={image} alt='slide1' style={{
                    width: '100%',
                }} />
            </div>
            <div className='flex flex-col gap-4'>
                <h4 className={`${staatliches.className} text-[36px] text-[#F43B00]`}>{name.toLocaleUpperCase()}</h4>
                <p className={`${mooli.className} text-[16px] text-[#F43B00] font-semibold `}>{detail}</p>
                <div className='transition-all duration-700'>
                    <span className={`${mooli.className} text-[24px] pb-2 text-[#F43B00] transition-all duration-700 font-bold block group-hover:hidden`}>{prize}$</span>
                    <button data-text="Add To Cart" className={`${mooli.className} relative overflow-hidden pb-2 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-[#F43B00] before:absolute before:whitespace-nowrap before:text-transparent hover:before:animate-wave transition-all duration-700 text-[24px] text-[#F43B00] font-bold hidden group-hover: group-hover:inline`}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard