
const EnrolledApi = (email) => {
    return fetch(`http://localhost:3000/my-enrolled-course?email=${email}`)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
            throw err
        })
};

export default EnrolledApi;