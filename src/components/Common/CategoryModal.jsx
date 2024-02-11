import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { baseUrl } from '../../Helper/helper';
import toast from 'react-hot-toast';

const CategoryModal = ({ setClose, refetch, cat }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        reset();
    }, [cat, reset])

    const handleCreate = (data) => {
        fetch(cat ? `${baseUrl}/myCategory/update/${cat._id}`:`${baseUrl}/myCategory`, {
            method: cat ? "PUT":"POST",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch();
                    setClose(null);
                    cat ? toast.success('Category Updated Successfully!'):toast.success('Category Added Successfully!');
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
                    <h3 className="text-xl text-center font-bold">Create Category</h3>
                    <form onSubmit={handleSubmit(handleCreate)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} placeholder="Name" className="input input-bordered" defaultValue={cat && cat.name} />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control h-40">
                                <label className="label">
                                    <span className="label-text">Category Short Description</span>
                                </label>
                                <textarea {...register('short_description')} placeholder="Write short description about category..." className="input input-bordered h-32" defaultValue={cat && cat.short_description} />
                            </div>
                            <input className='btn btn-secondary w-full mt-6' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CategoryModal;