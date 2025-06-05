import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Fallback from '../Components/Fallback/Fallback';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    console.log(user, loading);
    const location = useLocation()

    if (loading) {
        return <Fallback />
    }
    if (user && user.email) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to='/sign-in' replace={true} />
    }
};

export default PrivateRoutes;