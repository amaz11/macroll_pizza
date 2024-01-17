import AdminNab from '@/app/compontents/nabvar/AdminNab';
import Table from '@/app/compontents/table/Table'
import React from 'react'

async function userByID(id: string) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`,
        {
            method: 'GET',
        }
    )

    return res.json();
}



const Profile = async ({ params }: { params: { user: string } }) => {
    const { data } = await userByID(params.user)
    console.log(data)
    return (
        <div>
            <AdminNab />
            <div className="p-8 md:p-16">
                <div className="p-8 bg-white shadow mt-24">
                    <div className="flex items-center gap-5">
                        <div className="bg-red-600 w-16 h-16 rounded-full">

                        </div>
                        <div>
                            <h1 className="text-2xl font-medium text-gray-700 uppercase">{data.email.split('@')[0]}</h1>
                            <span className='text-xs text-gray-300 uppercase'>{data.address}</span>
                        </div>
                    </div>
                    <div className="mt-20 text-center pb-12">
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile