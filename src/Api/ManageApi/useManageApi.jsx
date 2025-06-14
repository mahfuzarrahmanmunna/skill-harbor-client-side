import useAxiosSecure from '../../Hooks/useAxiosSecure';

const useManageApiPromise = () => {
    const axiosSecure = useAxiosSecure();

    const manageApiPromise = (email) => {
        return axiosSecure.get(`course?email=${email}`)
            .then(res => res?.data.data)
    }
    return {
        manageApiPromise
    }

};

export default useManageApiPromise;