import React, { useState } from 'react';
import BreadCrumb from '../Partials/BreadCrumb';
import { FaPencilAlt, FaPlus, FaTrashAlt } from 'react-icons/fa';
import CategoryModal from '../../Common/CategoryModal';
import ConfirmationModal from '../../Common/ConfirmationModal';
import { useQuery } from '@tanstack/react-query';
import { baseUrl } from '../../../Helper/helper';
import toast from 'react-hot-toast';

const Categories = () => {
    const [close, setClose] = useState(null);
    const [cat, setCat] = useState('');
    const { data: categories = [], isLoading, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/myCategory`);
            const data = res.json();
            return data;
        }
    });

    const handleDelete = (id) => {
        fetch(`${baseUrl}/myCategory/delete/${id}`, {
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
                    <BreadCrumb path="All Categories"></BreadCrumb>
                    <hr className='mb-4' />
                    <div className="flex justify-between">
                        <h2 className="card-title mb-8">All Categories</h2>
                        <label onClick={() => {setClose([]);setCat('')}} htmlFor="category-modal" className='btn btn-sm btn-outline btn-primary'><FaPlus /> &nbsp; Add Category</label>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr className='text-center'>
                                    <th>Sl No.</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories.map((category, index) => {
                                        return (
                                            <tr key={category._id} className="text-center">
                                                <th>{index + 1}</th>
                                                <td>{category.name}</td>
                                                <td>
                                                    <div className="tooltip" data-tip="Edit Category">
                                                        <label onClick={() => { setCat(category); setClose([]) }} htmlFor="category-modal" className='btn btn-sm btn-outline btn-success mr-2'><FaPencilAlt /></label>
                                                    </div>
                                                    <div className="tooltip" data-tip="Delete Category">
                                                        <label onClick={() => { setCat(category); setClose([]) }} htmlFor="confirmation-modal" className='btn btn-sm btn-outline btn-secondary'><FaTrashAlt /></label>
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
                close && <CategoryModal setClose={setClose} refetch={refetch} cat={cat}></CategoryModal>
            }
            {
                close && <ConfirmationModal handleDelete={handleDelete} data={cat}></ConfirmationModal>
            }
        </div>
    );
};

export default Categories;