import { fraunces, staatliches } from '@/app/layout'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface PizzaMenu {
    image: string | StaticImageData,
    name: string,
    price: string,
    ingredient: string
}

const ProductMenuCard = ({ image, name, price, ingredient }: PizzaMenu) => {
    return (
        <div className="flex items-center gap-6 group">
            <div className="transition-all duration-700 group-hover:rotate-180 ">
                <Image src={image} alt="" width={150} />
            </div>
            <div className="grow">
                <div className="flex justify-between gap-4 items-end mb-2">
                    <h5 className={`${staatliches.className} text-[18px] sm:text-[24px] md:text-[34px] text-[#F43B00] p-0 m-0 leading-6`}>{name}</h5>
                    <div className="grow border-b-2 border-b-[#F43B00] border-dashed"></div>
                    <span className={`${fraunces.className} text-[14px] sm:text-[16px] md:text-[20px] text-[#F43B00] leading-4`}>{price}$</span>
                </div>
                <span className={`${fraunces.className} text-[12px] sm:text-[14px] md:text-[16px] text-[#F43B00] leading-4 italic line-clamp-1`}>{ingredient}</span>
            </div>
        </div>
    )
}

export default ProductMenuCard