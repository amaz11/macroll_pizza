import Table from '@/app/compontents/table/Table'
import React from 'react'

const Profile = () => {
    return (
        <div className="p-16">
            <div className="p-8 bg-white shadow mt-24">
                <div className="flex items-center gap-5">
                    <div className="bg-red-600 w-16 h-16 rounded-full">

                    </div>
                    <h1 className="text-2xl font-medium text-gray-700">Jessica Jones</h1>
                </div>
                <div className="mt-20 text-center pb-12">
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Profile