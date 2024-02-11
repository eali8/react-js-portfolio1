import React, { useEffect, useState } from 'react';
import ConfirmationModal from '../../Common/ConfirmationModal';
import { useQuery } from '@tanstack/react-query';
import { baseUrl } from '../../../Helper/helper';
import toast from 'react-hot-toast';
import BreadCrumb from '../Partials/BreadCrumb';
import { FaPencilAlt, FaPlus, FaTrashAlt } from 'react-icons/fa';
import UploadModal from '../../Common/UploadModal';
import Loading from '../../Loading/Loading';

const Uploads = () => {
    const [close, setClose] = useState(null);
    const [cat, setCat] = useState('');

    const { data: uploads = [], isLoading, refetch } = useQuery({
        queryKey: ['uploads'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/myuploads`);
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>;
    }

    const handleDelete = (id) => {
        fetch(`${baseUrl}/myuploads/delete/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    setClose(null);
                    refetch();
                    toast.success("Item Deleted Successfully!")
                }
            })
    }

    return (
        <div className='w-full'>
            <div className="card w-full min-h-screen bg-base-100 shadow-lg">
                <div className="card-body">
                    <BreadCrumb path="All Uploads"></BreadCrumb>
                    <hr className='mb-4' />
                    <div className="flex justify-between">
                        <h2 className="card-title mb-8">All Uploads</h2>
                        <label onClick={() => {setClose([]);setCat('')}} htmlFor="category-modal" className='btn btn-sm btn-outline btn-primary'><FaPlus /> &nbsp; Upload Item</label>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr className='text-center'>
                                    <th>Sl No.</th>
                                    <th>Thumbnail</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    uploads?.map((data, index) => {
                                        return (
                                            <tr key={data._id} className="text-center">
                                                <th>{index + 1}</th>
                                                <td className='flex justify-center'><img className='border' width={60} src={`/images/${data?.thumbnail}`} alt="Picture" /></td>
                                                <td>{data?.category}</td>
                                                <td>
                                                    <div className="tooltip" data-tip="Edit Item">
                                                        <label onClick={() => { setCat(data); setClose([]) }} htmlFor="category-modal" className='btn btn-sm btn-outline btn-success mr-2'><FaPencilAlt /></label>
                                                    </div>
                                                    <div className="tooltip" data-tip="Delete Item">
                                                        <label onClick={() => { setCat(data); setClose([]) } } htmlFor="confirmation-modal" className='btn btn-sm btn-outline btn-secondary'><FaTrashAlt /></label>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {
                close && <UploadModal setClose={setClose} refetch={refetch} cat={cat}></UploadModal>
            }
            {
                close && <ConfirmationModal handleDelete={handleDelete} data={cat}></ConfirmationModal>
            }
        </div>
    );
};

export default Uploads;