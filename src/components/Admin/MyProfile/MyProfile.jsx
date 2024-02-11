import React from 'react';
import BreadCrumb from '../Partials/BreadCrumb';
import { baseUrl } from '../../../Helper/helper';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const MyProfile = () => {
    const profile = useLoaderData();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {name, thumbnail} = profile;

    const handleMyprofile = (data) => {
        const formData = new FormData();
        for (let key in data) {
            if (key !== 'thumbnail') {
                formData.append(key, data[key]);
            }
        }
        formData.append("thumbnail", data.thumbnail[0]);
        
        fetch(`${baseUrl}/myProfile`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Profile Updated Successfully!');
                }
            })
    }

    return (
        <div className='w-full'>
            <div className="card w-full min-h-screen bg-base-100 shadow-lg">
                <div className="card-body">
                    <BreadCrumb path="My Profile"></BreadCrumb>
                    <hr className='mb-4' />
                    <div className="flex justify-between">
                        <h2 className="card-title mb-8">My Profile</h2>
                    </div>
                    <form onSubmit={handleSubmit(handleMyprofile)}>
                        <div className="card-body py-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} placeholder="Name" className="input input-bordered" defaultValue={name} />
                                {errors.name?.type === 'required' && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Before Name Text</span>
                                </label>
                                <input type="text" {...register('beforeName', { required: true })} placeholder="Before Name Text" className="input input-bordered" defaultValue={profile && profile.beforeName} />
                                {errors.beforeName?.type === 'required' && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">After Name Text</span>
                                </label>
                                <input type="text" {...register('afterName', { required: true })} placeholder="After Name Text" className="input input-bordered" defaultValue={profile && profile.afterName} />
                                {errors.afterName?.type === 'required' && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="grid gap-4 grid-cols-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register('email', { required: true })} placeholder="Name" className="input input-bordered" defaultValue={profile && profile.email} />
                                    {errors.email?.type === 'required' && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Profile Picture</span>
                                    </label>
                                    <div className="flex">
                                        <input type="file" className="file-input file-input-bordered w-full mr-2" {...register('thumbnail')} />
                                        <img className='border' width={60} src={`${baseUrl}/${thumbnail}`} alt="Profile picture of Emmy Ali" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control h-40">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea {...register('description')} placeholder="Write short description about category..." className="input input-bordered min-h-[80%]" defaultValue={profile && profile.description} />
                            </div>
                            <div className="grid gap-4 grid-cols-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Facebook Link</span>
                                    </label>
                                    <input type="text" {...register('facebook_link')} placeholder="Facebook Link" className="input input-bordered" defaultValue={profile && profile.facebook_link} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Twitter Link</span>
                                    </label>
                                    <input type="text" {...register('twitter_link')} placeholder="Twitter Link" className="input input-bordered" defaultValue={profile && profile.twitter_link} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Google Link</span>
                                    </label>
                                    <input type="text" {...register('google_link')} placeholder="Google Link" className="input input-bordered" defaultValue={profile && profile.google_link} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">LinkedIn Link</span>
                                    </label>
                                    <input type="text" {...register('linkedin_link')} placeholder="LinkedIn Link" className="input input-bordered" defaultValue={profile && profile.linkedin_link} />
                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Upload Resume</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered w-full" {...register('resume')}/>
                            </div>
                            <input className='btn btn-secondary w-28 mt-6' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;