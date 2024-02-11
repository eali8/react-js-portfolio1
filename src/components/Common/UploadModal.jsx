import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { baseUrl } from '../../Helper/helper';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';

const UploadModal = ({ setClose, refetch, cat }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {thumbnail_name} = cat;

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/myCategory`);
            const data = res.json();
            return data;
        }
    });

    useEffect(() => {
        reset();
    }, [cat, reset])

    const handleCreate = (data) => {
        const formData = new FormData();
        for (let key in data) {
            // if (key !== 'thumbnail') {
                formData.append(key, data[key]);
            // }
        }
        console.log(formData);
        // formData.append("thumbnail", data.thumbnail[0]);
        fetch(cat ? `${baseUrl}/myuploads/update/${cat._id}` : `${baseUrl}/myuploads`, {
            method: cat ? "PUT" : "POST",
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch();
                    setClose(null);
                    cat ? toast.success('Item Updated Successfully!') : toast.success('Item Added Successfully!');
                }
                setClose(null);
            })
    }

    return (
        <div>
            <input type="checkbox" id="category-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="category-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl text-center font-bold">Upload Item</h3>
                    <form onSubmit={handleSubmit(handleCreate)}>
                        <div className="card-body">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Select Category</span>
                                </label>
                                <select className="select select-bordered" {...register('category')}>
                                    {
                                        categories.map(category => {
                                            return (
                                                <option key={category?._id} value={category?.name}>{category?.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Upload Photo</span>
                                </label>
                                <input type="text" defaultValue={thumbnail_name} className="file-input file-input-bordered w-full" {...register('thumbnail_name')} />
                                <img className='border' width={60} src={`/images/${thumbnail_name}`} alt="Profile" />
                            </div>
                            <input className='btn btn-secondary w-full mt-6' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadModal;