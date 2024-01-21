'use client'
import React, { createContext, useEffect, useState } from 'react'

export type CartContextType = {
    cart: any[],
    setCart: (cart: any[]) => void,
    addToCart: (value: any) => void,
    removeFromCart: (id: any) => void
}
export const CartContextCreate = createContext<CartContextType | null | undefined>(null)

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<any[]>([])
    const ls = typeof window !== 'undefined' ? window.localStorage : null as any
    const addToCart = (value: any) => {
        const findCartProduct = cart.find(c => c.id === value.id)
        if (findCartProduct) {
            return
        }
        const newValue = { ...value, productId: value.id, quantity: 1 }
        const newArr = [...cart, newValue]
        setCart(newArr)
        ls?.setItem('cart', JSON.stringify(newArr))

    }
    const removeFromCart = (id: number) => {
        const newCart = [...cart]
        const filttercart = newCart.filter((value: { id: number }) => value.id !== id)
        setCart(filttercart)
        ls?.setItem('cart', JSON.stringify(filttercart))

    }

    const increseQuantity = (value: number) => {

    }

    const dincreseQuantity = (value: number) => {

    }


    useEffect(() => {
        if (ls && ls.getItem('cart')) {
            const localCart = JSON.parse(ls.getItem('cart'))
            setCart(localCart);
        }
    }, []);
    return (
        <CartContextCreate.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {children}
        </CartContextCreate.Provider>
    )
}

export default CartContextProvider