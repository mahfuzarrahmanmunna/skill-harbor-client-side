
const EnrolledApi = (email, token) => {
    return fetch(`http://localhost:3000/my-enrolled-course?email=${email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .catch(err => {
            console.log(err);
            throw err
        })
};

export default EnrolledApi;