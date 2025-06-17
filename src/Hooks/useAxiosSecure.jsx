import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
    baseURL: 'https://skill-harbor-server.vercel.app/',
    // baseURL: 'http://localhost:3000/',
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { user, loading, logOutUser } = useAuth();
    console.log(user?.accessToken);

    useEffect(() => {
        if (!loading && user?.accessToken) {
            // Add request interceptor
            const requestInterceptor = axiosInstance.interceptors.request.use(
                (config) => {
                    config.headers.Authorization = `Bearer ${user.accessToken}`;
                    return config;
                }
            );

            // Add response interceptor
            const responseInterceptor = axiosInstance.interceptors.response.use(
                (res) => res,
                (err) => {
                    if (err?.response?.status === 401 || err?.response?.status === 403) {
                        logOutUser()
                            .then(() => {
                                console.log("Logged out due to token issue.");
                            })
                            .catch(console.error);
                    }
                    return Promise.reject(err);
                }
            );

            // Cleanup to prevent multiple interceptors on re-renders
            return () => {
                axiosInstance.interceptors.request.eject(requestInterceptor);
                axiosInstance.interceptors.response.eject(responseInterceptor);
            };
        }
    }, [user, loading]);

    return axiosInstance;
};

export default useAxiosSecure;

