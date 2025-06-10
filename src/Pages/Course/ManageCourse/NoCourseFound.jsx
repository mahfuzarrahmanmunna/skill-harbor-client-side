import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { FileX } from "lucide-react";

const NoCourseFound = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6"
        >

            <Fade direction="up" triggerOnce>
                <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-4 flex items-center justify-center gap-2">
                    <FileX size={28} className="text-red-500" />
                    No Courses Found
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    You haven't created any courses yet. Start sharing your knowledge now!
                </p>

                <Link
                    to="/add-course"
                    className="btn btn-primary px-6 py-2 rounded-xl text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600 transition-all"
                >
                    Create New Course
                </Link>
            </Fade>
        </motion.div>
    );
};

export default NoCourseFound;
