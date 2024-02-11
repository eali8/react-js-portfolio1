import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { baseUrl } from '../../../Helper/helper';
import toast from 'react-hot-toast';
import BreadCrumb from '../Partials/BreadCrumb';
import Loading from '../../Loading/Loading';

const Settings = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { data: settings = [], isLoading, refetch } = useQuery({
        queryKey: ['settings'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/pagesettings`);
            const data = res.json();
            return data;
        }
    });

    const handleSettings = (data) => {
        const formData = new FormData();
        for (let key in data) {
            if (key !== 'thumbnail') {
                formData.append(key, data[key]);
            }
        }
        formData.append("thumbnail", data.thumbnail[0]);
        fetch(`${baseUrl}/pagesettings`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch();
                    toast.success('Settings Updated Successfully!');
                }
            })
    }

    return (
        <div className='w-full'>
            <div className="card w-full min-h-screen bg-base-100 drop-shadow-lg">
                <div className="card-body">
                    <BreadCrumb path="Aboutpage Settings"></BreadCrumb>
                    <hr className='mb-4'/>
                    <div className="flex justify-between">
                        <h2 className="card-title mb-8">Aboutpage Settings</h2>
                    </div>
                    <form onSubmit={handleSubmit(handleSettings)}>
                        <div className="card-body py-0">
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Title*</span>
                                </label>
                                <input type="text" {...register('title', { required: true })} placeholder="Enter Aboutpage Title" className="input input-bordered" defaultValue={settings?.title} />
                                {errors.title?.type === 'required' && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control h-40 mb-3">
                                <label className="label">
                                    <span className="label-text">Description*</span>
                                </label>
                                <textarea {...register('description', {required: true})} placeholder="Write short description for aboutpage..." className="input input-bordered min-h-[80%]" defaultValue={settings?.description}></textarea>
                                {errors.description?.type === 'required' && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control w-full mb-3">
                                <label className="label">
                                    <span className="label-text">Aboutpage Thumbnail</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered w-full" {...register('thumbnail')} />
                                <img className='border mt-2' width={120} src={`${baseUrl}/${settings.thumbnail}`} alt="Profile" />
                            </div>
                            <input className='btn btn-secondary w-28 mt-6' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Settings;