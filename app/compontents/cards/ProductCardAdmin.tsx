'use client'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { FaChevronDown } from 'react-icons/fa6'
import { MdDeleteOutline } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'

interface ProductArr {
    data: {
        id: number
        name: string
        price: number
        description: string
        image: string
        category: {
            id: number
            category: string
        }[]
    }[]
}

type ProductData = {
    id: number
    name: string
    price: number
    description: string
    image: string
    category: {
        id: number
        category?: string | undefined
    }[] | undefined
}

type ProductStateData = {
    id: number
    name: string
    price: number
    description: string
    image: string
    category: {
        id: number
    }[] | undefined
}

const ProductCardAdmin = ({ data }: ProductArr) => {
    const [product, setProduct] = useState<ProductStateData | null>()
    const [dropdown, setDropdown] = useState<boolean>(false)
    const [categories, setCategories] = useState<[]>([])
    const [image, setImage] = useState<File>()
    const router = useRouter()

    const getCategories = async () => {
        const res = await fetch('http://localhost:3000/api/category', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })

        if (res.status === 200) {
            const { data } = await res.json()
            setCategories(data)
        }
    }

    const onEdit = (value: ProductData) => {
        const arr = value.category?.map(value => { return { 'id': value.id } })
        const newValue = { ...value, category: arr }
        setProduct(newValue)
        getCategories()
    }
    const onEditCancle = () => {
        setProduct(null)
    }
    const deleteproduct = async (id: number) => {
        try {
            await fetch(`/api/product/${id}`, {
                method: 'DELETE',
            })
            router.refresh()

        } catch (error) {

        }
    }




    const addCategory = (id: number) => {
        const categoryFind = product?.category?.find(value => value.id === id)
        if (categoryFind) {
            return
        }
        const newObject = { 'id': id }
        const productCategory = product?.category || []
        const arr = [...productCategory, newObject]
        const newValue = { ...product, category: arr } as ProductStateData
        setProduct(newValue)
    }

    const deleteCategory = (id: number) => {
        const filtterArr = product?.category?.filter(value => value.id !== id)
        const newValue = { ...product, category: filtterArr } as ProductStateData
        setProduct(newValue)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newValue = { ...product, [name]: value } as ProductStateData
        setProduct(newValue);
    }

    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const newValue = { ...product, [name]: value } as ProductStateData
        setProduct(newValue);
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const formData = new FormData()
        const productData = product as ProductStateData
        formData.append('name', productData.name)
        formData.append('price', productData.price.toString())
        formData.append('description', productData.description)
        formData.append('category', JSON.stringify(productData.category))

        if (!image) {
            formData.append('image', productData.image)
        }
        else {
            formData.append('image', image)
        }

        try {
            await fetch(`/api/product/${productData.id}`, {
                method: 'PUT',
                body: formData
            })
            router.refresh()
            setProduct(null)

        } catch (error) {

        }
    }

    return (
        <div className='px-[40px] py-[80px] md:px-[60px] xl:px-[100px] xl:py-[80px]'>
            <form onSubmit={onSubmit}>
                <div className='grid  grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
                    {
                        data?.map((value: ProductData) => {
                            return <div className="w-80 bg-white shadow rounded-md" key={value.id}>
                                <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center product-overlay" style={{ backgroundImage: `url(${product && product.id === value.id && image ? URL.createObjectURL(image) : value.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                    <div className=" z-10">
                                        {
                                            product && product.id === value.id ?
                                                <div className='flex items-center gap-6 justify-end'>

                                                    <RxCross2 size={28} className='text-[#F43B00] cursor-pointer'
                                                        onClick={onEditCancle}
                                                    />
                                                </div> :
                                                <div className='flex justify-between'>
                                                    <CiEdit size={30} className='text-white cursor-pointer' onClick={() => onEdit(value)} />
                                                    <MdDeleteOutline size={28} className='text-[#F43B00] cursor-pointer' onClick={() => deleteproduct(value.id)} />
                                                </div>
                                        }

                                    </div>
                                    <div className='z-10 flex justify-between'>
                                        {/* <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">          available      </span> */}
                                        {
                                            product && product.id === value.id ? <div className='text-white'>
                                                <input type="file" title='' className='block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-[#F43B00] hover:file:bg-[#F43B00] hover:file:text-white' onChange={(e) => setImage(e.target.files?.[0])} />
                                            </div> : null
                                        }
                                    </div>
                                </div>
                                {
                                    product && product.id === value.id ?
                                        <div className='p-4'>
                                            <div className="flex flex-col items-center gap-2">
                                                <input type="text" className="block w-full px-4 py-0.5 text-gray-700  border  rounded-md   border-gray-600 focus:border-blue-500  focus:outline-none focus:ring" name='name' value={product.name} onChange={handleInputChange} placeholder='Enter Product Name' />

                                                <input type="text" className="block w-full px-4 py-0.5 text-gray-700  border  rounded-md   border-gray-600 focus:border-blue-500  focus:outline-none focus:ring" pattern="[0-9]+" name='price' value={product.price} onChange={handleInputChange} placeholder='Enter Product Name' />

                                                <textarea className="block w-full px-4 py-0.5 text-gray-700  border  rounded-md   border-gray-600 focus:border-blue-500  focus:outline-none focus:ring" name='description' value={product.description} onChange={handleTextAreaChange} placeholder='Enter Product Name' />

                                                <div className='mb-4 w-full'>
                                                    <div className='my-2 gap-4 flex items-center flex-wrap'>
                                                        {product.category?.map(({ id }: { id: number }, index: number) => {
                                                            return categories.map((value: { id: number, category: string }) => {
                                                                if (value.id === id)
                                                                    return <span className='py-1 px-4 bg-[#F43B00] flex items-center gap-2 text-white text-[12px] rounded-full' key={index}><span> {value.category}</span> <RxCross2 size={12} className='text-white cursor-pointer'
                                                                        onClick={() => deleteCategory(id)} />
                                                                    </span>
                                                                else
                                                                    return
                                                            })
                                                        })}
                                                    </div>

                                                    <div className='relative'>
                                                        <div className='w-full px-4 py-2 mt-2 text-gray-700 cursor-pointer  rounded-md border border-gray-600' onClick={() => setDropdown(!dropdown)}>
                                                            <span>Select Ingrediant</span>
                                                            <FaChevronDown size={18} className="absolute right-3 top-3 " />
                                                        </div>
                                                        {
                                                            dropdown ? <div className={`absolute bg-white p-0 w-full left-0 top-11 z-20 scroll-bar  ${categories.length > 4 ? 'h-[200px] overflow-y-scroll' : 'h-auto'} shadow-md rounded-sm`}>
                                                                {categories?.map(({ id, category }: { id: number, category: string }) => {

                                                                    return <div className='flex justify-start items-center mb-3 last:mb-0 hover:bg-[#F43B00] hover:text-white  px-4 py-2' key={id} onClick={() => addCategory(id)}>
                                                                        <span> {category}</span>

                                                                    </div>
                                                                })}
                                                            </div> : null
                                                        }


                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-end justify-start'>
                                                <input type="submit" value={'Save'} className='bg-[#F43B00] text-white py-2 px-4 rounded-full cursor-pointer' />
                                            </div>
                                        </div>
                                        :
                                        <div className="p-4 flex flex-col items-center">
                                            <h4 className="text-gray-800 text-center mt-1 font-medium">{value.name.toUpperCase()}</h4>
                                            <p className="text-center text-gray-800 mt-1 font-semibold">{value.price} /-</p>
                                            <p className="text-gray-700 font-normal text-sm text-center"> {value.description}</p>
                                            <div className='text-center'>{value.category?.map((categoryValue: { id: number, category?: string }) => {
                                                return <span className='text-[#F43B00] mr-1 last:mr-0 after:content-[","] last:after:content-[""] text-center' key={categoryValue.id}>{categoryValue.category}</span>
                                            })}</div>
                                        </div>
                                }

                            </div>
                        })
                    }

                </div>
            </form>
        </div>
    )
}

export default ProductCardAdmin