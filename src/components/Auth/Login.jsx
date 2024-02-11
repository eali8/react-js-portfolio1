import React, { useContext } from 'react';
import { baseUrl } from '../../Helper/helper';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { setLoading, setUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handleLogin = (data) => {
        setLoading(true);
        fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.accessToken) {
                    setUser(result.accessToken);
                    localStorage.setItem('access-token', result.accessToken);
                    setLoading(false);
                    navigate('/admin');
                    toast.success('User Login Successfully!');
                }
            })
        };
        
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content justify-center">
                <div className="card flex-shrink-0 lg:w-[35vw] md:w-[50vw] w-[90vw] shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" {...register('email', { required: true })} />
                                {errors.email?.type === 'required' && <span className='text-red-600'>The email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register('password', { required: true })} />
                                {errors.password?.type === 'required' && <span className='text-red-600'>The password field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;