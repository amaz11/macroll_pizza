import React from 'react'
import ProductCardAdmin from '../../cards/ProductCardAdmin'

async function getProducts() {

    const res = await fetch('http://localhost:3000/api/product', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store'
    })

    return res.json()

}

const ProductSSR = async () => {
    const { data } = await getProducts()
    return (
        <ProductCardAdmin data={data} />
    )
}

export default ProductSSR