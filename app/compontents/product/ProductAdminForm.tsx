'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import { FaChevronDown } from "react-icons/fa6";

const ProductAdminForm = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState<{ id: number }[]>([])
    const [categories, setCategories] = useState<[]>([])
    const [image, setImage] = useState<File>()
    const [dropdown, setDropdown] = useState<boolean>(false)


    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!image) return

        try {
            let data = new FormData()
            data.append('image', image)
            data.append('name', name)
            data.append('price', price)
            data.append('description', description)
            data.append('category', JSON.stringify(category))


            await fetch('api/product', {
                method: 'POST',
                // headers: { 'Content-Type': 'multipart/form-data' },
                body: data
            })
        } catch (error) {

        }
    }

    const getCategories = async () => {
        const res = await fetch('http://localhost:3000/api/category', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-store'
        })

        if (res.status === 200) {
            const { data } = await res.json()
            setCategories(data)
        }
    }

    const addCategory = (id: number) => {
        const newObject = { 'id': id }
        const arr = [newObject, ...category]
        console.log('hello')
        setCategory(arr)
    }

    useEffect(() => {
        getCategories()
    }, [])
    return (
        <div>
            <div>
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md  mt-20">
                    <h1 className="text-xl font-bold capitalize ">Account settings</h1>
                    <form onSubmit={onSubmit}>
                        <div className="mt-4 sm:grid-cols-2">
                            <div className='mb-4'>
                                <label className="text-gray-700" htmlFor="username">Product Name</label>
                                <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700  border  rounded-md   border-gray-600 focus:border-blue-500  focus:outline-none focus:ring" value={name} onChange={e => setName(e.target.value)} />
                            </div>

                            <div className='mb-4'>
                                <label className="text-gray-700" htmlFor="username">Price</label>
                                <input type="text" pattern="[0-9]" className="block w-full px-4 py-2 mt-2 text-gray-700  border  rounded-md   border-gray-600 focus:border-blue-500  focus:outline-none focus:ring" value={price} onChange={e => setPrice(e.target.value)} />
                            </div>

                            <div className='mb-4'>
                                <label className="text-gray-700" htmlFor="username">Description</label>
                                <textarea rows={5} className="block w-full px-4 py-2 mt-2 text-gray-700  border  rounded-md   border-gray-600 focus:border-blue-500  focus:outline-none focus:ring" value={description} onChange={e => setDescription(e.target.value)} />
                            </div>

                            <div className='mb-4'>
                                {category.map(({ id }: { id: number }, index: number) => {
                                    return <span key={index}>{id}</span>
                                })}
                                <label className="text-gray-700" htmlFor="passwordConfirmation">Ingrediant</label>
                                <div className='relative'>
                                    <div className='block w-full px-4 py-2 mt-2 text-gray-700 cursor-pointer  rounded-md border border-gray-600' onClick={() => setDropdown(!dropdown)}>
                                        <span>Select Ingrediant</span>
                                        <FaChevronDown size={18} className="absolute right-3 top-3 " />
                                    </div>
                                    {
                                        dropdown ? <div className={`absolute bg-white p-0 w-full left-0 top-11 z-10 scroll-bar  ${categories.length > 4 ? 'h-[200px] overflow-y-scroll' : 'h-auto'} shadow-md rounded-sm`}>
                                            {categories?.map(({ id, category }: { id: number, category: string }) => {

                                                return <div className='flex justify-start items-center mb-3 last:mb-0 hover:bg-[#F43B00] hover:text-white  px-4 py-2' key={id} onClick={() => addCategory(id)}>
                                                    <span> {category}</span>

                                                </div>
                                            })}
                                        </div> : null
                                    }


                                </div>

                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white">
                                    Image
                                </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600 text-center">
                                            <label htmlFor="file-upload" className="relative cursor-pointer  rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span >Upload a file</span>
                                                <input type="file" accept='image/*' className="opacity-0 absolute w-full h-full top-0 left-0" onChange={(e) => setImage(e.target.files?.[0])} />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#F43B00] rounded-md hover:bg-[#F41000] focus:outline-none focus:bg-gray-600">Add</button>
                        </div>
                    </form>
                </section>
            </div>

        </div>
    )
}

export default ProductAdminForm