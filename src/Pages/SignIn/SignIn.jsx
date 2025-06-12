import { Link, useLocation, useNavigate } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { Mail, Lock, LogIn, MoveRight } from 'lucide-react';
import Swal from 'sweetalert2';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import usePageTitle from '../../Hooks/usePageTitle';
import useAuth from '../../Hooks/useAuth';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const SignIn = () => {
    usePageTitle()
    const { signInPass, signinWithGoogle, signinWithGitHub } = useAuth()
    const [showPassword, setShowPassword] = useState(false);
    // console.log(signInPass);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();



    const navigate = useNavigate()
    const location = useLocation()

    const handleSignin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // signin here
        signInPass(email, password)
            .then(result => {
                const user = result.user;
                navigate(`${location.state ? location.state : '/'}`);
                console.log(user);

            })
            .catch(error => {
                const code = error.code;
                console.log(code);
            })
    }

    // handle google signin 
    const handleGoogle = () => {
        signinWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user?.photoURL);
                toast.success(`Logged in as ${user.displayName}`)
                navigate(location.state || '/')
            })
            .catch(err => {
                toast.error("Google Sign-in Failed")
                console.error(err.code)
            })
    }


    // handle github signin
    const handleSigninWithGithub = () => {
        signinWithGitHub(githubProvider)
            .then(result => {
                const user = result.user;
                // console.log(user?.photoURL);
                toast.success(`Logged in as ${user.displayName}`)
                navigate(location.state || '/')
            })
            .catch(err => {
                const code = err.code;
                console.log(code);
            })
    }

    return (
        <div className="py-12 flex items-center justify-center  lg:px-12 px-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col lg:flex-row w-full overflow-hidden">
                <div className="lg:w-1/2 hidden lg:flex items-center justify-center bg-indigo-100 dark:bg-gray-700 overflow-hidden">
                    <Fade direction='left' className="w-full h-full">
                        <iframe className='h-full w-full' src="https://lottie.host/embed/28742e5f-707a-4b87-a920-61696c2bf40a/GKywRvy43y.lottie"></iframe>
                    </Fade>
                </div>
                <Toaster />
                <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                    <Fade direction="right">
                        <h2 className="lg:text-3xl md:text-2xl font-bold text-primary mb-2">
                            <Typewriter
                                words={["Welcome Back!", "Login to Your Account"]}
                                loop={false}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-200 mb-6">Sign in to manage your freelance tasks</p>

                        <form onSubmit={handleSignin} className="space-y-4">
                            <div>
                                <label className="block text-sm dark:text-gray-200 font-semibold mb-1">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        // value={formData.email}
                                        // onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="input input-bordered dark:bg-gray-700 dark:text-gray-200 bg-gray-200 dark:placeholder:text-gray-200 w-full pl-10"
                                        required
                                        data-tip="Enter your email address"
                                    />
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                            </div>

                            <div>
                                <label className="block dark:text-gray-200 text-sm font-semibold mb-1">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="********"
                                        className="input dark:bg-gray-700 dark:text-gray-200 bg-gray-200 dark:placeholder:text-gray-200 input-bordered w-full pl-10 pr-10"
                                        required
                                        data-tip="Enter your password"
                                    />
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary w-full flex items-center gap-2">
                                <LogIn size={18} /> Sign In
                            </button>
                        </form>

                        <div className="divider divide-accent dark:divider-success text-gray-700 dark:text-gray-200 ">OR</div>

                        {/* <button
                            onClick={handleGoogle}
                            className="btn w-full flex items-center text-gray-800 dark:text-white dark:bg-gray-800 bg-gray-200 justify-center gap-2 border border-gray-300"
                            data-tip="Sign in using Google account"
                        >
                            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="w-5 h-5" />
                            Sign in with Google
                        </button> */}

                        {/* Google */}
                        <button
                            onClick={handleGoogle}
                            className="btn bg-white btn-block text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        {/* GitHub */}
                        <button
                            onClick={handleSigninWithGithub}
                            className="btn btn-block mt-4 bg-black text-white border-black">
                            <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                            Login with GitHub
                        </button>

                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-200 text-center">
                            Don't have an account?{' '}
                            <Link to="/sign-up" className="link link-primary inline-flex items-center">
                                Signup <MoveRight size={16} className="ml-1" />
                            </Link>
                        </p>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default SignIn;