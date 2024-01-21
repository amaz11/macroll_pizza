'use client'
import ProductMenuCard from '@/app/compontents/cards/ProductMenuCard'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { CartContextCreate, CartContextType } from '@/app/HOC/CartContext'


const Cart = () => {
    const router = useRouter()
    const { cart } = useContext(CartContextCreate) as CartContextType

    return (
        <div>
            <div className="flex lg:flex-row flex-col justify-center lg:gap-14" id="cart">
                <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-x-hidden">
                    <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => router.back()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                        <p className="text-sm pl-2 leading-none">Back</p>
                    </div>
                    <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Shopping Cart</p>
                    <div className='mt-14 py-8 border-t border-gray-200'>
                        {
                            cart.map((item) => {
                                return <ProductMenuCard key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} />
                            })
                        }

                    </div>
                </div>
                <div className=" lg:w-1/4 w-full ">
                    <div className="flex flex-col px-14 py-20 justify-between overflow-y-auto bg-gray-100">
                        <div>
                            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                            <div className="flex items-center justify-between pt-16">
                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                <p className="text-base leading-none text-gray-800">$9,000</p>
                            </div>
                            <div className="flex items-center justify-between pt-5">
                                <p className="text-base leading-none text-gray-800">Shipping</p>
                                <p className="text-base leading-none text-gray-800">$30</p>
                            </div>
                            <div className="flex items-center justify-between pt-5">
                                <p className="text-base leading-none text-gray-800">Tax</p>
                                <p className="text-base leading-none text-gray-800">$35</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">{cart?.reduce((a, b) => (+a) + (+b.price), 0)}</p>
                            </div>
                            <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart