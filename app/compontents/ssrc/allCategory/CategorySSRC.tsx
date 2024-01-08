import React from 'react'


async function get() {
    const res = await fetch('http://localhost:3000/api/category', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    return res.json()
}

const CategorySSRC = async () => {
    const data  = await get()
    console.log(data)
    return (

        <div>
            {data?.map(({ id, category }: { id: number, category: string }) => <span key={id}>{category}</span>)}
        </div>

    )
}

export default CategorySSRC