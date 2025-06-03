import { NavLink } from "react-router";
import { useState } from "react";
import { FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import ThemeSwitch from "../../Context/Theme/ThemeSwitch";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulated auth
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        setTheme(newTheme);
    };

    const navLinkClass = ({ isActive }) =>
        isActive ? "text-primary font-semibold" : "";

    const list = <>
        <li>
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/jobs" className={navLinkClass}>Jobs</NavLink>
        </li>
        {isLoggedIn && (
            <>
                <li><NavLink to="/add-job" className={navLinkClass}>Add Job</NavLink></li>
                <li><NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink></li>
            </>
        )}
        {!isLoggedIn && (
            <>
                <li><NavLink to="/login" className={navLinkClass}>Login</NavLink></li>
                <li><NavLink to="/register" className={navLinkClass}>Register</NavLink></li>
            </>
        )}
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm px-4">
            {/* Navbar Start (Mobile Dropdown + Logo) */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {list}
                    </ul>
                </div>
                <NavLink to="/" className="text-xl font-bold">EduCraft</NavLink>
            </div>

            {/* Navbar Center (Desktop Links) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/jobs" className={navLinkClass}>Jobs</NavLink>
                    </li>
                    {isLoggedIn && (
                        <>
                            <li>
                                <NavLink to="/add-job" className={navLinkClass}>Add Job</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>

            {/* Navbar End (Theme Toggle + Auth Buttons) */}
            <div className="navbar-end flex items-center space-x-2">
                {/* Theme Toggle */}
                <ThemeSwitch />

                {/* Auth Section */}
                {!isLoggedIn ? (
                    <>
                        <NavLink to="/login" className="btn btn-sm btn-outline">Login</NavLink>
                        <NavLink to="/register" className="btn btn-sm btn-primary">Register</NavLink>
                    </>
                ) : (
                    <div className="avatar online">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.pravatar.cc/100" alt="profile" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
