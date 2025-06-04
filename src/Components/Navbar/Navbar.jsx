import { NavLink } from "react-router";
import { use, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import ThemeSwitch from "../../Context/Theme/ThemeSwitch";
import { AuthContext } from "../../Authentication/AuthContext/AuthContext";

const Navbar = () => {
    const { user } = use(AuthContext)

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-primary font-semibold"
            : "text-gray-800 dark:text-gray-200 hover:text-primary transition-colors duration-200";

    const navItems = (
        <>
            <li>
                <NavLink to="/" className={navLinkClass}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/all-course" className={navLinkClass}>Course</NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink to="/add-course" className={navLinkClass}>Add Course</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
                    </li> */}
                </>
            )}
            {/* {!user && (
                <>
                    <li>
                        <NavLink to="/login" className={navLinkClass}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={navLinkClass}>Register</NavLink>
                    </li>
                </>
            )} */}
        </>
    );

    return (
        <div className="navbar dark:bg-gray-900 bg-gray-200 text-gray-700 shadow-md sticky top-0 z-50 transition-all duration-300">
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
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-200 rounded-box w-52 space-y-1"
                    >
                        {navItems}
                    </ul>
                </div>
                <NavLink to="/" className="text-2xl font-bold text-primary hover:text-secondary transition-all duration-200">
                    SkillHarbor
                </NavLink>
            </div>

            {/* Navbar Center (Desktop) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {navItems}
                </ul>
            </div>

            {/* Navbar End (Theme + Auth/Profile) */}
            <div className="navbar-end flex items-center gap-3">
                <ThemeSwitch />

                {!user ? (
                    <div className="flex gap-2">
                        <NavLink to="/login" className="btn btn-sm btn-outline btn-primary">
                            Login
                        </NavLink>
                        <NavLink to="/register" className="btn btn-sm btn-primary">
                            Register
                        </NavLink>
                    </div>
                ) : (
                    <div className="avatar online">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} alt="User Profile" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
