'use client'
import { CartContextCreate, CartContextType } from '@/app/HOC/CartContext'
import { fraunces, staatliches } from '@/app/layout'
import Image, { StaticImageData } from 'next/image'
import React, { useContext } from 'react'
import { RxCross2 } from 'react-icons/rx'

interface PizzaMenu {
    id?: number
    image: string | StaticImageData,
    name: string,
    price: string,
    ingredient?: string,
}

const ProductMenuCard = ({ id, image, name, price, ingredient }: PizzaMenu) => {
    const { removeFromCart } = useContext(CartContextCreate) as CartContextType

    return (
        <div className='flex  mt-10 first:mt-0' key={id}>
            <div className="flex items-center gap-6 group  grow" >
                <div className="transition-all duration-700 group-hover:rotate-180 w-[80px] h-[80px] rounded-full">
                    <Image src={`/${image}`} alt="" width={100} height={100} style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%'
                    }} />
                </div>
                <div className="grow" >
                    <div className="flex justify-between gap-4 items-end mb-2">
                        <h5 className={`${staatliches.className} text-[18px] sm:text-[24px] md:text-[34px] text-[#F43B00] p-0 m-0 leading-6`}>{name}</h5>
                        <div className="grow border-b-2 border-b-[#F43B00] border-dashed"></div>
                        <span className={`${fraunces.className} text-[14px] sm:text-[16px] md:text-[20px] text-[#F43B00] leading-4`}>{price}$</span>
                    </div>
                    <span className={`${fraunces.className} text-[12px] sm:text-[14px] md:text-[16px] text-[#F43B00] leading-4 italic line-clamp-1`}>{ingredient}</span>
                </div>
            </div>
            <div>
                {id ? <RxCross2 size={16} className="cursor-pointer hover:text-[#F43B00]" onClick={() => removeFromCart(id)} /> : null}
            </div>
        </div>
    )
}

export default ProductMenuCard