import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/admin/login"></Navigate>;
};

export default PrivateRoutes;