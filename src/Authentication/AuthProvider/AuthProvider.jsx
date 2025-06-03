import React from 'react';
import { AuthContext } from '../AuthContext/AuthContext';

const AuthProvider = ({ children }) => {
    const userInfo = {
        hero: 'alom',
        safa: 'kabir'
    }
    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;