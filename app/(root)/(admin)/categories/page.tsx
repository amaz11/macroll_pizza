
import React from 'react'
import AddCategoryCSRC from '@/app/compontents/csrc/addCategory/AddCategoryCSRC'
import CategorySSRC from '@/app/compontents/ssrc/allCategory/CategorySSRC'

const Category = () => {

    return (
        <div className='px-[100px] py-[80px]'>
            <AddCategoryCSRC />
            <CategorySSRC />
        </div>
    )
}

export default Category