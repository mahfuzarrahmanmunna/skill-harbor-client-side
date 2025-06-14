import { useState } from 'react';
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
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';

const SignUp = () => {
    usePageTitle()
    const { createUser, updateUser, setUser } = useAuth()
    const [passError, setPassError] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()

    // console.log(createUser);

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

        createUser(email, password)
            .then(result => {
                const user = result.user;
                if (user?.email) {
                    axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email: user?.email }, {
                        withCredentials: true
                    })
                        .then(res => {
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
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
                const newUsers = {
                    email,
                    rest,
                    creationTime: user?.metadata?.creationTime,
                    lastSignInTime: user?.metadata?.lastSignInTime,
                }

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
                            <div className="relative">
                                <label className="block dark:text-gray-200 text-sm font-semibold">Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="********"
                                    className="input pr-10 dark:bg-gray-700 dark:text-gray-200 text-gray-700 bg-gray-100 input-bordered w-full"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-8 text-gray-500"
                                    tabIndex={-1}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            {/* Confirm Password */}
                            <div className="relative">
                                <label className="block dark:text-gray-200 text-sm font-semibold">Confirm Password</label>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    placeholder="********"
                                    className="input pr-10 dark:bg-gray-700 dark:text-gray-200 text-gray-700 bg-gray-100 input-bordered w-full"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-8 text-gray-500"
                                    tabIndex={-1}
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
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