import { use, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import usePageTitle from "../../Hooks/usePageTitle";
import useAuth from "../../Hooks/useAuth";
// import registerAnim from "../assets/register.json";

const Register = () => {
    usePageTitle()
    const { createUser, updateUser, setUser } = useAuth()
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const togglePassword = () => setShowPassword(!showPassword);
    console.log(createUser);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        console.log(name, photo, email, password, confirmPassword);

        // here we create a user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate(from)
                    })
                console.log(user);
            })
            .catch(err => {
                const code = err.code;
                console.log(code);
            })

        // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        // if (!regex.test(password)) {
        //     return setError("Password must be 8 characters with uppercase, lowercase, special character and number.");
        // }
        // if (password.includes(email)) {
        //     return setError("Password should not contain your email address.");
        // }
        // if (password !== confirmPassword) {
        //     return setError("Passwords do not match.");
        // }

        // try {
        //     const res = await createUserWithEmailAndPassword(auth, email, password);
        //     await updateProfile(res.user, { displayName: name, photoURL: photo });
        //     toast.success("Registration Successful");
        //     navigate(from, { replace: true });
        // } catch (err) {
        //     setError(err.message);
        // }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center dark:bg-gradient-to-r dark:from-gray-900 dark:via-purple-900 dark:to-violet-600 px-6 py-12">
            <motion.div
                className="hidden md:block w-full md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <iframe src="https://lottie.host/embed/c93b20e1-b638-4c86-8734-e528ea3b1463/rOQZkqoPMW.lottie"></iframe>
            </motion.div>

            <Fade direction="right" triggerOnce className="md:w-1/2 ">
                <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 space-y-6">
                    <h2 className="text-3xl font-extrabold text-center text-gray-800">
                        <Typewriter
                            words={["Create an Account", "Start Your Learning Journey"]}
                            loop
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h2>

                    {error && <p className="text-red-600 text-sm text-center">{error}</p>}

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" name="name" required className="w-full mt-1 px-4 py-2 border rounded-lg input dark:placeholder:text-gray-800 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
                            <input type="text" name="photo" className="w-full mt-1 px-4 py-2 border rounded-lg input dark:placeholder:text-gray-800 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" required className="w-full mt-1 px-4 py-2 border rounded-lg input dark:placeholder:text-gray-800 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500" />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type={showPassword ? "text" : "password"} name="password" required className="w-full mt-1 px-4 py-2 border rounded-lg input dark:placeholder:text-gray-800 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500" />
                            <span
                                className="absolute right-3 top-10 text-gray-600 cursor-pointer"
                                onClick={togglePassword}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input type="password" name="confirmPassword" required className="w-full mt-1 px-4 py-2 border rounded-lg input dark:placeholder:text-gray-800 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500" />
                        </div>

                        <button type="submit" className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold transition duration-300">
                            Register
                        </button>

                        <p className="text-sm text-center text-gray-600">
                            Already have an account?
                            <Link to="/login" className="text-violet-600 hover:underline ml-1">
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
            </Fade>
        </div>
    );
};

export default Register;
