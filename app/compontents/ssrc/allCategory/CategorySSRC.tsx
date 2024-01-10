import React from 'react'
import CategoryTable from '@/app/compontents/table/CategoryTable'

async function get() {
    const res = await fetch('http://localhost:3000/api/category', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store'
    })

    return res.json()
}

const CategorySSRC = async () => {
    const { data } = await get()
    return <>{!data || data?.length === 0 ? <>No data Found</> : <CategoryTable data={data} />}</>
}

export default CategorySSRC