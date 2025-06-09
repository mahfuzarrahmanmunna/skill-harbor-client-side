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
        const fee = form.fee.value;
        const totalSeat = form.seat.value;
        const tags = form.tags.value?.split(",")?.map(tag => tag.trim()).filter(Boolean);
        const level = form.level.value;
        const language = form.language.value;
        const mode = form.mode.value;

        const newCourse = {
            title,
            description,
            image,
            duration: duration.toISOString(),
            fee,
            totalSeat,
            tags,
            category,
            level,
            language,
            mode,
            createdBy: user?.displayName || "Anonymous",
            email: user?.email,
            createdAt: new Date().toLocaleString(),
        };

        axios.post('http://localhost:3000/courses', newCourse)
            .then(res => {
                console.log(res);
                toast.success(" Course added successfully!");
                navigate("/all-course");
            })
            .catch(err => {
                console.log(err);
                toast.error(" Failed to add course. Please try again.");
            });
    };

    return (
        <div className="px-6 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl lg:mx-auto px-6 py-10 my-10 bg-white/30 dark:bg-slate-900/50 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-700"
            >
                <h2 className="text-center md:text-4xl font-bold text-accent mb-6">
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

                <Fade cascade damping={0.1}>
                    <form onSubmit={handleAddCourse} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="fieldset">
                            <label className="block mb-1 font-semibold">Course Title</label>
                            <input type="text" name="title" required placeholder="e.g. Mastering React" className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                        </div>

                        {/* duration */}
                        <div className="fieldset">
                            <label className="block mb-1 font-semibold">Duration</label>
                            <DatePicker className="input w-full dark:bg-gray-700 bg-gray-200" selected={duration} onChange={(date) => setDuration(date)} />
                        </div>

                        <div className="fieldset">
                            <label className="block mb-1 font-semibold">Image URL</label>
                            <input type="url" name="image" required placeholder="https://example.com/image.jpg" className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                        </div>

                        <div className="fieldset">
                            <label className="block mb-1 font-semibold">Course Fee ($)</label>
                            <input type="number" name="fee" required min={0} placeholder="e.g. 99" className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                        </div>

                        <div className="fieldset">
                            <label className="block mb-1 font-semibold">Tags <span className="text-sm text-gray-500">(optional, comma-separated)</span></label>
                            <input type="text" name="tags" placeholder="e.g. React, Frontend, Web Dev" className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                        </div>

                        <div className="fieldset">
                            <label className="block mb-1 font-semibold">Category</label>
                            <input type="text" name="category" placeholder="e.g. Web Development" className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                        </div>

                        <div className="fieldset">
                            <label className="block mb-1 font-semibold">Total Seat</label>
                            <input type="number" name="seat" placeholder="e.g. 250" className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                        </div>

                        <div className="fieldset">
                            <label className="block mb-1 font-semibold">Level</label>
                            <select name="level" className="select select-bordered w-full bg-gray-200 dark:bg-gray-700">
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                        </div>

                        <div className="fieldset">
                            <label className="block mb-1 font-semibold">Language</label>
                            <input type="text" name="language" placeholder="e.g. English" className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                        </div>

                        <div className="fieldset">
                            <label className="block mb-1 font-semibold">Mode</label>
                            <select name="mode" className="select select-bordered w-full dark:bg-gray-700 bg-gray-200">
                                <option>Online</option>
                                <option>Offline</option>
                                <option>Hybrid</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block mb-1 font-semibold">Short Description</label>
                            <textarea name="description" rows={4} required placeholder="Provide a brief summary of the course..." className="textarea textarea-bordered w-full bg-gray-200 dark:bg-gray-700" />
                        </div>

                        <div className="md:col-span-2">
                            <button type="submit" className="btn btn-outline bg-gradient-to-r from-primary to-accent dark:text-white dark:bg-gray-700  font-semibold w-full text-lg tracking-wide shadow-lg" disabled={loading}>
                                {loading ? "Adding..." : `Add Course`}
                            </button>
                        </div>
                    </form>
                </Fade>
            </motion.div>
        </div>
    );
};

export default AddCourse;