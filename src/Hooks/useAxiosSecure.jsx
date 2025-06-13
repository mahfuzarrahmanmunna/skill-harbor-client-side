import axios from 'axios';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { user, logOutUser } = useAuth();

    axiosInstance.interceptors.request.use((config) => {
        if (user?.accessToken) {
            config.headers.authorization = `Bearer ${user.accessToken}`;
        }
        return config;
    });

    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401 || error.response?.status === 403) {
                return logOutUser().then(() => {
                    console.log('Signed out due to 401/403');
                });
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance; 
};

export default useAxiosSecure;
