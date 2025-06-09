import { useLoaderData, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Typewriter from 'typewriter-effect';
import { Fade } from "react-awesome-reveal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";

const UpdateManagePost = () => {
    const course = useLoaderData();
    const navigate = useNavigate();
    const [duration, setDuration] = useState(new Date(course?.duration || new Date()));

    const [formData, setFormData] = useState({
        title: course?.title || '',
        description: course?.description || '',
        image: course?.image || '',
        category: course?.category || '',
        fee: course?.fee || '',
        seat: course?.totalSeat || '',
        tags: course?.tags?.join(", ") || '',
        level: course?.level || 'Beginner',
        language: course?.language || '',
        mode: course?.mode || 'Online',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedCourse = {
            ...formData,
            duration: duration.toISOString(),
            tags: formData.tags?.split(",").map(tag => tag.trim()).filter(Boolean),
            updatedAt: new Date().toLocaleString(),
        };

        try {
            await axios.put(`http://localhost:3000/courses/${course._id}`, updatedCourse);
            toast.success("✅ Course updated successfully!");
            navigate("/all-course");
        } catch (err) {
            toast.error("❌ Failed to update course. Please try again.");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-5xl mx-auto px-6 py-10 my-10 bg-white/30 dark:bg-slate-900/50 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-700"
        >
            <h2 className="text-center text-4xl font-bold text-accent mb-6">
                <Typewriter
                    options={{
                        strings: ["Update Course", "Modify With Confidence", "Keep Your Content Fresh ✨"],
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        deleteSpeed: 25,
                    }}
                />
            </h2>

            <Fade cascade damping={0.1}>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="fieldset">
                        <label className="block mb-1 font-semibold">Course Title</label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} required className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                    </div>

                    <div className="fieldset">
                        <label className="block mb-1 font-semibold">Duration</label>
                        <DatePicker
                            selected={duration}
                            onChange={(date) => setDuration(date)}
                            className="input w-full dark:bg-gray-700 bg-gray-200"
                        />
                    </div>

                    <div className="fieldset">
                        <label className="block mb-1 font-semibold">Image URL</label>
                        <input type="url" name="image" value={formData.image} onChange={handleChange} required className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                    </div>

                    <div className="fieldset">
                        <label className="block mb-1 font-semibold">Course Fee ($)</label>
                        <input type="number" name="fee" value={formData.fee} onChange={handleChange} required className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                    </div>

                    <div className="fieldset">
                        <label className="block mb-1 font-semibold">Tags <span className="text-sm text-gray-500">(comma-separated)</span></label>
                        <input type="text" name="tags" value={formData.tags} onChange={handleChange} className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                    </div>

                    <div className="fieldset">
                        <label className="block mb-1 font-semibold">Category</label>
                        <input type="text" name="category" value={formData.category} onChange={handleChange} className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                    </div>

                    <div className="fieldset">
                        <label className="block mb-1 font-semibold">Total Seat</label>
                        <input type="number" name="seat" value={formData.seat} onChange={handleChange} className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                    </div>

                    <div className="fieldset">
                        <label className="block mb-1 font-semibold">Level</label>
                        <select name="level" value={formData.level} onChange={handleChange} className="select select-bordered w-full dark:bg-gray-700 bg-gray-200">
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </select>
                    </div>

                    <div className="fieldset">
                        <label className="block mb-1 font-semibold">Language</label>
                        <input type="text" name="language" value={formData.language} onChange={handleChange} className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                    </div>

                    <div className="fieldset">
                        <label className="block mb-1 font-semibold">Mode</label>
                        <select name="mode" value={formData.mode} onChange={handleChange} className="select select-bordered w-full dark:bg-gray-700 bg-gray-200">
                            <option>Online</option>
                            <option>Offline</option>
                            <option>Hybrid</option>
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block mb-1 font-semibold">Short Description</label>
                        <textarea
                            name="description"
                            rows={4}
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="textarea textarea-bordered w-full bg-gray-200 dark:bg-gray-700"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <button type="submit" className="btn btn-outline bg-gradient-to-r from-primary to-accent dark:text-white dark:bg-gray-700 font-semibold w-full text-lg tracking-wide shadow-lg">
                            Update Course
                        </button>
                    </div>
                </form>
            </Fade>
        </motion.div>
    );
};

export default UpdateManagePost;
