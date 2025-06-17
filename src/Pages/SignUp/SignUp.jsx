import { useState } from 'react';
import Lottie from 'lottie-react';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import 'react-tooltip/dist/react-tooltip.css';
import { Link, useLocation, useNavigate } from 'react-router';
import { MoveRight, Eye, EyeOff } from 'lucide-react';
import Swal from 'sweetalert2';
import usePageTitle from '../../Hooks/usePageTitle';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const SignUp = () => {
    usePageTitle();
    const { createUser, updateUser, setUser } = useAuth();
    const [passError, setPassError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        setPassError('');
        toast.dismiss();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const formData = new FormData(form);
        const { email, password, confirmPassword } = Object.fromEntries(formData.entries());

        // ✅ PASSWORD VALIDATION
        const passwordRegex = {
            minLength: /.{8,}/,
            upper: /[A-Z]/,
            lower: /[a-z]/,
            number: /[0-9]/,
            special: /[!@#$%^&*(),.?":{}|<>]/,
        };

        if (!passwordRegex.minLength.test(password)) {
            return setPassError("Password must be at least 8 characters long.");
        }
        if (!passwordRegex.upper.test(password)) {
            return setPassError("Password must include at least one uppercase letter.");
        }
        if (!passwordRegex.lower.test(password)) {
            return setPassError("Password must include at least one lowercase letter.");
        }
        if (!passwordRegex.number.test(password)) {
            return setPassError("Password must include at least one number.");
        }
        if (!passwordRegex.special.test(password)) {
            return setPassError("Password must include at least one special character.");
        }
        if (password !== confirmPassword) {
            return setPassError("Password and Confirm Password do not match.");
        }
        if (email && password.includes(email.split('@')[0])) {
            return setPassError("Password cannot contain your email.");
        }

        // ✅ Create user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate(`${location.state ? location.state : '/'}`);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Account created successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
            })
            .catch(err => {
                setPassError(err.message);
            });
    };

    return (
        <div className="py-12 flex items-center justify-center lg:px-24 md:px-12 px-4">
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
                                    required
                                    className="input dark:bg-gray-700 dark:text-gray-200 text-gray-700 bg-gray-100 input-bordered w-full"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block dark:text-gray-200 text-sm font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@mail.com"
                                    required
                                    className="input dark:bg-gray-700 dark:text-gray-200 text-gray-700 bg-gray-100 input-bordered w-full"
                                />
                            </div>

                            {/* Photo URL */}
                            <div>
                                <label className="block dark:text-gray-200 text-sm font-semibold">Photo URL</label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Enter photo URL"
                                    className="input dark:bg-gray-700 dark:text-gray-200 text-gray-700 bg-gray-100 input-bordered w-full"
                                />
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <label className="block dark:text-gray-200 text-sm font-semibold">Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="********"
                                    required
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
                                    required
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

                            {/* Password Error Message */}
                            <div className='text-sm text-red-900 dark:text-red-400'>
                                {passError}
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-outline w-full hover:scale-105 transition-transform"
                            >
                                Sign Up
                            </button>

                            <p className='dark:text-gray-200 text-gray-600'>
                                Already have an account?{" "}
                                <Link to='/sign-in' className='text-primary underline inline-flex items-center'>
                                    Sign In <MoveRight size={16} className="ml-1" />
                                </Link>
                            </p>
                        </form>
                    </Fade>
                </div>

                {/* Right Side Lottie */}
                <Fade className="w-1/2" direction='right'>
                    <figure className='rounded-2xl hidden md:flex w-full h-full'>
                        <iframe
                            className='lg:w-full lg:h-full'
                            src="https://lottie.host/embed/77aaaaa2-7ad8-492d-9ad4-cc213be42067/gumqA4q1sb.lottie"
                        ></iframe>
                    </figure>
                </Fade>
            </div>
            <Toaster />
        </div>
    );
};

export default SignUp;
