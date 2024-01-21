import { CartContextCreate, CartContextType } from '@/app/HOC/CartContext'
import { mooli, staatliches } from '@/app/layout'
import Image, { StaticImageData } from 'next/image'
import React, { useContext } from 'react'

interface ProductCardProps {
    item: {
        id: number,
        image: string | StaticImageData,
        name: string,
        category: any[],
        price: string
    }
}


const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
    const { addToCart } = useContext(CartContextCreate) as CartContextType
    return (
        <div className='flex flex-col items-center group'>
            <div className='h-[200px] w-[200px] transition-all duration-700 group-hover:rotate-180 '>
                <Image src={`/${item.image}`} alt='slide1' width={100} height={100} style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} />
            </div>
            <div className='flex flex-col gap-4'>
                <h4 className={`${staatliches.className} text-[36px] text-[#F43B00]`}>{item.name.toLocaleUpperCase()}</h4>
                <p className={`${mooli.className} text-[16px] text-[#F43B00] font-semibold flex items-center justify-center flex-wrap gap-4`}>{item.category?.map((item) => {
                    return <span key={item.id} className='after:content-[","] last:after:content-[""]'>{item.category}</span>
                })}</p>
                <div className='transition-all duration-700'>
                    <span className={`${mooli.className} text-[24px] pb-2 text-[#F43B00] transition-all duration-700 font-bold block group-hover:hidden`}>{item.price}$</span>
                    <button data-text="Add To Cart" className={`${mooli.className} relative overflow-hidden pb-2 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-[#F43B00] before:absolute before:whitespace-nowrap before:text-transparent hover:before:animate-wave transition-all duration-700 text-[24px] text-[#F43B00] font-bold hidden group-hover: group-hover:inline`} onClick={() => addToCart(item)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard