'use client'
import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

interface Props {
    data: {
        id: string; // I assume ID is defined elsewhere
        category: string;
    }[]
}
const CategoryTable: React.FC<Props> = ({ data }) => {
    const [category, setCategory] = useState('')
    const [ID, setID] = useState('')
    const [updateInput, setUpdateInput] = useState(false)
    const router = useRouter()


    const updateCategory = async (id: string) => {
        try {
            await fetch(`/api/category/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ category })
            })
            router.refresh()
            updateFormUnset()

        } catch (error) {

        }
    }
    const deleteCateory = async (id: string) => {
        try {
            await fetch(`/api/category/${id}`, {
                method: 'DELETE',
            })
            router.refresh()

        } catch (error) {

        }
    }

    const updateFormSet = (data: string, id: string) => {
        setCategory(data)
        setID(id)
        setUpdateInput(true)
    }
    const updateFormUnset = () => {
        setCategory('')
        setID('')
        setUpdateInput(false)
    }

    return (
        <>
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Category List</h2>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            #Num
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.map((value: { id: string; category: string; }, index: number) => {
                                            return <tr key={value.id}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    {index + 1}
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" >
                                                    {ID === value.id && updateInput ? <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block appearance-none" type="email" value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Category Name' /> : <p className="text-gray-600 whitespace-no-wrap">{value.category}</p>}
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                                    {
                                                        ID === value.id && updateInput ?
                                                            <div className='flex items-center justify-center gap-4'>
                                                                <FaCheck size={28} className='text-[#F43B00] cursor-pointer' onClick={() => updateCategory(value.id)} />
                                                                <RxCross2 size={28} className='text-[#F43B00] cursor-pointer'
                                                                    onClick={() => updateFormUnset()}
                                                                />
                                                            </div>
                                                            :
                                                            <div className='flex items-center justify-center gap-4'>
                                                                <MdDeleteOutline size={28} className='text-[#F43B00] cursor-pointer' onClick={() => deleteCateory(value.id)} />
                                                                <CiEdit size={28} className='text-[#F43B00] cursor-pointer' onClick={() => updateFormSet(value.category, value.id)} />
                                                            </div>
                                                    }

                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryTable