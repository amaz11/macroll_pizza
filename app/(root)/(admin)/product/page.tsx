import React from 'react'
import ProductAdminForm from '@/app/compontents/product/ProductAdminForm'
import ProductSSR from '@/app/compontents/ssrc/allProduct/Product'

const Product = () => {
    return (
        <div>
            <ProductAdminForm />
            <ProductSSR />
        </div>
    )
}

export default Product