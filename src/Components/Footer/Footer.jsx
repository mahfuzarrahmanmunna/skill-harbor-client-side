import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-300 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1: Logo & Slogan */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">EduCraft</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Empowering Learning, One Course at a Time.
                    </p>
                    <div className="flex space-x-4 mt-4 text-xl">
                        <a href="#" className="hover:text-blue-600">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-sky-400">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-pink-500">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Column 2: Explore */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Explore</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-500">Courses</a></li>
                        <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
                        <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                    </ul>
                </div>

                {/* Column 3: Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Support</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
                        <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
                        <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10 border-t pt-6 border-gray-300 dark:border-gray-700">
                &copy; {new Date().getFullYear()} EduCraft. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
