import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    console.log(user, loading);
    const location = useLocation()

    if (loading) {
        return 'loading'
    }
    if (user && user.email) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to='/register' replace={true} />
    }
};

export default PrivateRoutes;