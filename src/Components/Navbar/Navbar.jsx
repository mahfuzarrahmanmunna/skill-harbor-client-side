import { NavLink } from "react-router";
import ThemeSwitch from "../../Context/Theme/ThemeSwitch";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
    const { user, logOutUser } = useAuth();
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Scroll detection for hide/show
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastScrollY && currentY > 100) {
                setShowNavbar(false); // scroll down
            } else {
                setShowNavbar(true); // scroll up
            }

            setLastScrollY(currentY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleLogOutUser = () => {
        logOutUser().then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Log Out successful!",
                showConfirmButton: false,
                timer: 1500,
            });
        });
    };

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-primary font-semibold"
            : "text-gray-800 dark:text-gray-200 hover:text-primary transition-colors duration-200";

    const navItems = (
        <>
            <li>
                <NavLink to="/" className={navLinkClass}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/all-course" className={navLinkClass}>
                    All Courses
                </NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink to="/add-course" className={navLinkClass}>
                            Add Course
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/manage-course" className={navLinkClass}>
                            Manage Course
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <AnimatePresence>
            {showNavbar && (
                <motion.div
                    key="navbar"
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="sticky top-0 z-50 shadow-md backdrop-blur bg-white/90 dark:bg-gray-900/90 transition-all"
                >
                    <Fade direction="down" triggerOnce>
                        <div className="navbar px-4 lg:px-10 text-gray-700 dark:text-gray-200">
                            {/* Navbar Start (Mobile + Logo) */}
                            <div className="navbar-start">
                                <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h8m-8 6h16"
                                            />
                                        </svg>
                                    </label>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dark:bg-gray-700 bg-gray-100 dropdown-content mt-3 z-[1] p-3 shadow rounded-box w-52 space-y-1"
                                    >
                                        {navItems}
                                    </ul>
                                </div>
                                <NavLink
                                    to="/"
                                    className="text-2xl font-bold text-primary hover:text-secondary transition-all duration-200"
                                >
                                    SkillHarbor
                                </NavLink>
                            </div>

                            {/* Navbar Center */}
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1 space-x-2">{navItems}</ul>
                            </div>

                            {/* Navbar End */}
                            <div className="navbar-end flex items-center gap-3">
                                <ThemeSwitch />
                                {!user ? (
                                    <div className="flex gap-2">
                                        <NavLink to="/sign-in" className="btn btn-sm btn-outline btn-primary">
                                            Signin
                                        </NavLink>
                                        <NavLink to="/sign-up" className="btn btn-sm btn-primary">
                                            Signup
                                        </NavLink>
                                    </div>
                                ) : (
                                    <div title={user?.displayName} className="dropdown dropdown-end ms-2">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="User avatar" src={user?.photoURL} />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-gray-100 dark:bg-gray-800 overflow-auto rounded-box z-1 mt-3 w-52 p-2 shadow"
                                        >
                                            <li>
                                                <div className="justify-between font-semibold">{user?.displayName}</div>
                                            </li>
                                            <li>
                                                <div className="justify-between font-semibold">{user?.email}</div>
                                            </li>
                                            <li>
                                                <button
                                                    className="font-bold text-gray-800 dark:text-gray-200"
                                                    onClick={handleLogOutUser}
                                                >
                                                    <LogOut /> Signout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Fade>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Navbar;
