import { useNavigate } from "react-router";
import { motion } from "motion/react"
import toast from "react-hot-toast";
import usePageTitle from "../../../Hooks/usePageTitle";
import useAuth from "../../../Hooks/useAuth";
import Typewriter from 'typewriter-effect';
import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";

const AddCourse = () => {
    usePageTitle("Add Course");
    const { loading, user } = useAuth();
    const navigate = useNavigate();

    const handleAddCourse = async (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const image = form.image.value;
        const duration = form.duration.value;

        const newCourse = {
            title,
            description,
            image,
            duration,
            createdBy: user?.displayName || "Anonymous",
            email: user?.email,
            createdAt: new Date().toISOString(),
        };

        console.log(newCourse);

       
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto p-8 my-10 bg-white/30 dark:bg-slate-900/50 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-300 dark:border-slate-700"
        >
            {/* Optional Lottie Animation */}
            {/* <div className="max-w-sm mx-auto mb-6">
                <Lottie animationData={courseAnimation} loop />
            </div> */}

            {/* Typewriter Heading */}
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-accent mb-4">
                <Typewriter
                    options={{
                        strings: [
                            "Add a Course",
                            "Create Quality Learning",
                            "Build the Future 🔥"
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 20,
                    }}
                />
            </h2>

            {/* Form */}
            <Fade cascade damping={0.1}>
                <form onSubmit={handleAddCourse} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {/* Course Title */}
                    <div className="col-span-1">
                        <label className="block mb-1 font-medium text-slate-800 dark:text-slate-200">Course Title</label>
                        <input
                            type="text"
                            name="title"
                            required
                            placeholder="e.g. Mastering React"
                            className="input input-bordered w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                    </div>

                    {/* Duration */}
                    <div className="col-span-1">
                        <label className="block mb-1 font-medium text-slate-800 dark:text-slate-200">Duration</label>
                        <input
                            type="text"
                            name="duration"
                            required
                            placeholder="e.g. 4 weeks, 20 hours"
                            className="input input-bordered w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                    </div>

                    {/* Image */}
                    <div className="col-span-1">
                        <label className="block mb-1 font-medium text-slate-800 dark:text-slate-200">Image URL</label>
                        <input
                            type="url"
                            name="image"
                            required
                            placeholder="e.g. https://..."
                            className="input input-bordered w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                    </div>

                    {/* Description */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block mb-1 font-medium text-slate-800 dark:text-slate-200">Short Description</label>
                        <textarea
                            name="description"
                            required
                            rows={4}
                            placeholder="Brief course overview..."
                            className="textarea textarea-bordered w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                    </div>

                    {/* Submit */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            className="btn btn-primary w-full text-lg tracking-wide"
                            disabled={loading}
                        >
                            {loading ? "Adding..." : "Add Course"}
                        </button>
                    </div>
                </form>
            </Fade>
        </motion.div>
    );
};

export default AddCourse;
