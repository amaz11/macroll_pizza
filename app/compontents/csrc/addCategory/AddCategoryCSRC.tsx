'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'




const AddCategoryCSRC = () => {
    const [category, setCategory] = useState('')

    const router = useRouter()

    const categoryFormHandl = async () => {
        try {
            await fetch('/api/category', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ category })
            })
            router.refresh()
        } catch (error) {

        }
    }
    return (
        <>
            <div className="flex gap-4 items-center justify-center w-full flex-wrap">
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block appearance-none" type="email" value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Category Name' />
                <div className="">
                    <button className="bg-gray-700 text-white text-sm font-bold py-2.5 px-4 w-full rounded hover:bg-gray-600"
                        onClick={categoryFormHandl}
                    >Add Category</button>
                </div>
            </div>
        </>
    )
}

export default AddCategoryCSRC