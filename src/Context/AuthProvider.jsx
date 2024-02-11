import React, { createContext, useEffect, useState } from 'react';
import { baseUrl } from '../Helper/helper';
import toast from 'react-hot-toast';
import Loading from '../components/Loading/Loading';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if(localStorage.getItem('access-token')){
            setUser(localStorage.getItem('access-token'));
        }
        setLoading(false);
    }, [])

    if (loading) {
        return <Loading></Loading>
    }
    
    //Logout
    const logout = () => {
        setLoading(true);
        fetch(`${baseUrl}/logout`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUser(null);
                localStorage.removeItem('access-token');
                toast.success('Logout Successful!')
            })
    }

    const authInfo = { user, setUser, loading, setLoading, logout };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;