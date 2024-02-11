import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { baseUrl } from '../../Helper/helper';
import toast from 'react-hot-toast';

const MyProjectModal = ({setClose, refetch, cat}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        reset();
    }, [cat, reset])

    const handleCreate = (data) => {
        fetch(cat ? `${baseUrl}/myProject/update/${cat._id}` : `${baseUrl}/myProjects`, {
            method: cat ? "PUT" : "POST",
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
                    cat ? toast.success('Project Updated Successfully!') : toast.success('Project Added Successfully!');
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
                    <h3 className="text-xl text-center font-bold">Create Project</h3>
                    <form onSubmit={handleSubmit(handleCreate)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Project Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} placeholder="Project Name" className="input input-bordered" defaultValue={cat && cat.name} />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Project Slug</span>
                                </label>
                                <input type="text" {...register('slug')} placeholder="Project Slug" className="input input-bordered bg-base-300" defaultValue={cat && cat.slug} readOnly />
                            </div>
                            <div className="form-control h-40">
                                <label className="label">
                                    <span className="label-text">Project Description</span>
                                </label>
                                <textarea {...register('short_description')} placeholder="Write short description about your project..." className="input input-bordered h-32" defaultValue={cat && cat.short_description} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Thumbnail Name</span>
                                </label>
                                <input type="text" {...register('link', { required: true })} placeholder="Thumbnail title" className="input input-bordered" defaultValue={cat && cat.link} />
                                {errors.link && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <input className='btn btn-secondary w-full mt-6' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProjectModal;