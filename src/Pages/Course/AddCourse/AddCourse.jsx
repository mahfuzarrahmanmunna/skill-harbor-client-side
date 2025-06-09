import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import usePageTitle from "../../../Hooks/usePageTitle";
import useAuth from "../../../Hooks/useAuth";
import Typewriter from 'typewriter-effect';
import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddCourse = () => {
    usePageTitle("Add Course");
    const { loading, user } = useAuth();
    const navigate = useNavigate();
    const [duration, setDuration] = useState(new Date());

    const handleAddCourse = async (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const image = form.image.value;
        const category = form.category.value;
        // const duration = form.duration.value;
        const fee = form.fee.value;
        const totalSeat = form.seat.value;
        const tags = form.tags.value?.split(",")?.map(tag => tag.trim()).filter(Boolean);

        console.log(totalSeat);
        const newCourse = {
            title,
            description,
            image,
            duration: duration.toISOString(),
            fee,
            totalSeat,
            tags,
            category,
            createdBy: user?.displayName || "Anonymous",
            email: user?.email,
            createdAt: new Date().toLocaleString(), // full date & time
        };
        console.log(newCourse);

        axios.post('http://localhost:3000/courses', newCourse)
            .then(res => {
                console.log(res);
                toast.success("🎉 Course added successfully!");
                navigate("/all-course");
            })
            .catch(err => {
                console.error(err);
                toast.error("❌ Failed to add course. Please try again.");
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-5xl mx-auto px-6 py-10 my-10 bg-white/30 dark:bg-slate-900/50 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-700"
        >
            {/* Typewriter Header */}
            <h2 className="text-center text-4xl font-bold text-accent mb-6">
                <Typewriter
                    options={{
                        strings: ["Add a Course", "Create Quality Learning", "Build the Future 🔥"],
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        deleteSpeed: 25,
                    }}
                />
            </h2>

            {/* Form */}
            <Fade cascade damping={0.1}>
                <form onSubmit={handleAddCourse} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* Course Title */}
                    <div className="fieldset">
                        <label className="block mb-1 font-semibold text-slate-800 dark:text-slate-200 label">Course Title</label>
                        <input
                            type="text"
                            name="title"
                            required
                            placeholder="e.g. Mastering React"
                            className="input input-bordered w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 ring-primary"
                        />
                    </div>

                    {/* Duration */}
                    <div className="fieldset">
                        <label className="block mb-1 font-semibold text-slate-800 dark:text-slate-200 label">Duration</label>
                        <DatePicker
                            className="input  w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 ring-primary"
                            selected={duration}
                            onChange={(date) => setDuration(date)}
                        />
                    </div>

                    {/* Image URL */}
                    <div className="fieldset">
                        <label className="block mb-1 font-semibold text-slate-800 dark:text-slate-200 label">Image URL</label>
                        <input
                            type="url"
                            name="image"
                            required
                            placeholder="https://example.com/image.jpg"
                            className="input input-bordered w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 ring-primary"
                        />
                    </div>

                    {/* Course Fee */}
                    <div className="fieldset">
                        <label className="block mb-1 font-semibold text-slate-800 dark:text-slate-200 label">Course Fee ($)</label>
                        <input
                            type="number"
                            name="fee"
                            required
                            min={0}
                            placeholder="e.g. 99"
                            className="input input-bordered w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 ring-primary"
                        />
                    </div>

                    {/* Tags (optional) */}
                    <div className="fieldset">
                        <label className="block mb-1 font-semibold text-slate-800 dark:text-slate-200 label">Tags <span className="text-sm text-gray-500">(optional, comma-separated)</span></label>
                        <input
                            type="text"
                            name="tags"
                            placeholder="e.g. React, Frontend, Web Dev"
                            className="input input-bordered w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 ring-primary"
                        />
                    </div>

                    {/* category */}
                    <div className="fieldset">
                        <label className="block mb-1 font-semibold text-slate-800 dark:text-slate-200 label">Category</label>
                        <input
                            type="text"
                            name="category"
                            placeholder="e.g. React, Frontend, Web Dev"
                            className="input input-bordered w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 ring-primary"
                        />
                    </div>

                    {/* Total Seat */}
                    <div className="fieldset">
                        <label className="block mb-1 font-semibold text-slate-800 dark:text-slate-200 label">Total Seat</label>
                        <input
                            type="text"
                            name="seat"
                            placeholder="e.g. 250"
                            className="input input-bordered w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 ring-primary"
                        />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 font-semibold text-slate-800 dark:text-slate-200 label">Short Description</label>
                        <textarea
                            name="description"
                            rows={4}
                            required
                            placeholder="Provide a brief summary of the course..."
                            className="textarea textarea-bordered w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 ring-primary"
                        />
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="btn btn-outline bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold w-full text-lg tracking-wide shadow-lg"
                            disabled={loading}
                        >
                            {loading ? "Adding..." : `Add Course`}
                        </button>
                    </div>
                </form>
            </Fade>
        </motion.div>
    );
};

export default AddCourse;
