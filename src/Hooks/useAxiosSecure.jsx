import axios from 'axios';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { user, logOutUser } = useAuth();
    axiosInstance.interceptors.request.use((config) => {
        config.headers.authorization = `Bearer $${user.accessToken}`;
        return config;
    });

    axiosInstance.interceptors.response.use(response => {
        return response
    }, error => {
        console.log(error);
        if (error.status === 401 || error.status === 403) {
            return logOutUser().then(() => {
                console.log('sign out user for 401 code');
            })
                .catch(err => {
                    console.log(err);
                })
        }
    })
    return (
        <div>

        </div>
    );
};

export default useAxiosSecure;