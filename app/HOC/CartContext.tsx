'use client'
import React, { createContext, useState } from 'react'

export type CartContextType = {
    cart: any[],
    setCart: (cart: any[]) => void
}
export const CartContextCreate = createContext<CartContextType | null | undefined>(null)

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<any[]>([])
    return (
        <CartContextCreate.Provider value={{ cart, setCart }}>
            {children}
        </CartContextCreate.Provider>
    )
}

export default CartContextProvider