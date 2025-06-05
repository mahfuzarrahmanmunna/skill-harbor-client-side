import { use, useState } from 'react';
import Lottie from 'lottie-react';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
// import ReactTooltip from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import { Link, useLocation, useNavigate } from 'react-router';
import { MoveRight } from 'lucide-react';
import Swal from 'sweetalert2';
import usePageTitle from '../../Hooks/usePageTitle';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';
// import signupAnimation from '../assets/signup-lottie.json'; // Add a relevant Lottie animation JSON here

const SignUp = () => {
    usePageTitle()
    const { createUser, updateUser, setUser } = useAuth()
    const [passError, setPassError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.dismiss('error')

        // update error message
        setPassError('')

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const formData = new FormData(form)
        const { email, password, confirmPassword, ...rest } = Object.fromEntries(formData.entries())
        const userData = {
            email,
            password,
            confirmPassword
        }
        console.log(userData);
        // Handle form submission (e.g., API call)
        if (password.length < 8) {
            toast.error("Password mast be 8 character or more");
            setPassError('Password mast be 8 character or more');
            return
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Password contains at least one lowercase letter.")
            setPassError("Password contains at least one lowercase letter.");
            return
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password contains at least one uppercase letter.")
            setPassError('Password contains at least one uppercase letter.');
            return
        }
        if (password !== confirmPassword) {
            toast.error("Password and confirm password not matched..!")
            setPassError("Password and confirm password not matched..!")
            return
        }

        // create user here
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate(`${location.state ? location.state : '/'}`);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                const newUsers = {
                    email,
                    rest,
                    creationTime: user?.metadata?.creationTime,
                    lastSignInTime: user?.metadata?.lastSignInTime,
                }
                // fetch('https://freelance-task-marketplace-server.vercel.app/users', {
                //     method: "POST",
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify(newUsers)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         if (data.insertedId) {
                //             console.log('after adding data', data);
                //         }
                //     })
                // console.log(user);
            })
    };

    return (
        <div className="py-12 flex items-center justify-center  lg:px-24 md:px-12 px-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex flex-col md:flex-row w-full overflow-hidden">
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <Fade direction="left">
                        <h2 className="lg:text-3xl text-base font-bold lg:font-bold text-primary mb-4">
                            <Typewriter
                                words={["Join Us Today!", "Create Your Account", "Start Your Freelance Journey"]}
                                loop={false}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label className="block dark:text-gray-200 text-sm font-semibold">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    className="input dark:bg-gray-700 dark:text-gray-200 text-gray-700 bg-gray-100 dark:placeholder:text-gray-200 input-bordered w-full"
                                    data-tip="Enter your full name"
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label className="block dark:text-gray-200 text-sm font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@mail.com"
                                    className="input dark:bg-gray-700 dark:text-gray-200 text-gray-700 bg-gray-100 dark:placeholder:text-gray-200 input-bordered w-full"
                                    data-tip="Enter a valid email address"
                                />
                            </div>
                            <Toaster />
                            {/* Photo */}
                            <div>
                                <label className="block dark:text-gray-200 text-sm font-semibold">Photo</label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Enter photo URL"
                                    className="input dark:bg-gray-700 dark:text-gray-200 text-gray-700 bg-gray-100 dark:placeholder:text-gray-200 input-bordered w-full"
                                    data-tip="Enter a valid email address"
                                />
                            </div>
                            {/* Password */}
                            <div>
                                <label className="block dark:text-gray-200 text-sm font-semibold">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="********"
                                    className="input dark:bg-gray-700 dark:text-gray-200 text-gray-700 bg-gray-100 dark:placeholder:text-gray-200 input-bordered w-full"
                                    data-tip="Choose a strong password"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block dark:text-gray-200 text-sm font-semibold">Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="********"
                                    className="input dark:bg-gray-700 dark:text-gray-200 text-gray-700 bg-gray-100 dark:placeholder:text-gray-200 input-bordered w-full"
                                    data-tip="Choose a strong password"
                                />
                            </div>
                            {/* password error */}
                            <div className='text-sm text-red-900'>
                                {passError}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-outline w-full hover:scale-105 transition-transform"
                            >
                                Sign Up
                            </button>
                            <p className='dark:text-gray-200 text-gray-600'>
                                You have already an account. Please <Link to='/sign-in' className='text-primary underline inline-flex items-center'> Signin <MoveRight size={16} className="ml-1" /> </Link>
                            </p>
                        </form>
                    </Fade>
                </div>
                <Fade className="w-1/2" direction='right'>
                    <figure className='rounded-2xl hidden md:flex w-full h-full '>
                        <iframe className='lg:w-full lg:h-full' src="https://lottie.host/embed/77aaaaa2-7ad8-492d-9ad4-cc213be42067/gumqA4q1sb.lottie"></iframe>
                    </figure>
                </Fade>
            </div>
        </div>
    );
};

export default SignUp;