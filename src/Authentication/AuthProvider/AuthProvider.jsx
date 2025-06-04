import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin with email pass
    const signInPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signin with google
    const signinWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    // user Logout
    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        updateUser,
        signinWithGoogle,
        signInPass,
        logOutUser,
    }
    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;