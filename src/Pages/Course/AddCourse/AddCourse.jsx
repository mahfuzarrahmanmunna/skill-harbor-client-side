import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import usePageTitle from "../../../Hooks/usePageTitle";
import useAuth from "../../../Hooks/useAuth";
import Typewriter from 'typewriter-effect';
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import DatePicker from "react-datepicker";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AddCourse = () => {
    usePageTitle("Add Course");
    const { loading, user } = useAuth();
    const navigate = useNavigate();
    const [selectedTime, setSelectedTime] = useState(new Date());
    const axiosSecure = useAxiosSecure()

    const handleTimeChange = (time) => {
        setSelectedTime(time);
    };


    const handleAddCourse = async (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const image = form.image.value;
        const category = form.category.value;
        const fee = form.fee.value;
        const totalSeat = form.totalSeat.value;
        const tags = form.tags.value?.split(",")?.map(tag => tag.trim()).filter(Boolean);
        const level = form.level.value;
        const language = form.language.value;
        const mode = form.mode.value;

        const durationInMinutes = selectedTime.getHours() * 60 + selectedTime.getMinutes();


        const newCourse = {
            title,
            description,
            image,
            duration: durationInMinutes,
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
            enrolledBy: []
        };
        console.log(newCourse);

        try {
            await axiosSecure.post(`${import.meta.env.VITE_API_URL}/courses?email=${user?.email}`, newCourse)
                .then(res => {
                    console.log(res);
                });
            toast.success("Course added successfully!");
            navigate("/all-course");
        } catch (err) {
            console.log(err);
            toast.error("Failed to add course. Please try again.");
        }
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
                        {/* title */}
                        <div>
                            <label className="block mb-1 font-semibold">Course Title</label>
                            <input type="text" name="title" required placeholder="e.g. Mastering React" className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                        </div>

                        {/* duration */}
                        <fieldset className="fieldset  w-full">
                            <label className="label font-bold">
                                <span className="label-text">Duration</span>
                            </label>

                            <DatePicker
                                className="input input-bordered w-full dark:bg-gray-700 bg-gray-200"
                                selected={selectedTime}
                                onChange={handleTimeChange}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                            />
                        </fieldset>

                        {/* Image URL */}
                        <div>
                            <label className="block mb-1 font-semibold">Image URL</label>
                            <input type="url" name="image" required placeholder="https://example.com/image.jpg" className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                        </div>

                        {/* course fee */}
                        <div>
                            <label className="block mb-1 font-semibold">Course Fee ($)</label>
                            <input type="number" name="fee" required min={0} placeholder="e.g. 99" className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                        </div>

                        {/* Tags */}
                        <div>
                            <label className="block mb-1 font-semibold">Tags <span className="text-sm text-gray-500">(optional, comma-separated)</span></label>
                            <input type="text" name="tags" placeholder="e.g. React, Frontend, Web Dev" className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block mb-1 font-semibold">Category</label>
                            <input type="text" name="category" placeholder="e.g. Web Development" className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                        </div>

                        {/* Total Seat */}
                        <div>
                            <label className="block mb-1 font-semibold">Total Seat</label>
                            <input type="number" name="totalSeat" placeholder="e.g. 250" className="input input-bordered w-full dark:bg-gray-700 bg-gray-200" />
                        </div>

                        {/* Level */}
                        <div>
                            <label className="block mb-1 font-semibold">Level</label>
                            <select name="level" className="select select-bordered w-full bg-gray-200 dark:bg-gray-700">
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                        </div>

                        {/* Language */}
                        <div>
                            <label className="block mb-1 font-semibold">Language</label>
                            <select name="language" className="select select-bordered w-full dark:bg-gray-700 bg-gray-200">
                                <option>English</option>
                                <option>Bangla</option>
                                <option>Hindi</option>
                            </select>
                        </div>

                        {/* Mode */}
                        <div>
                            <label className="block mb-1 font-semibold">Mode</label>
                            <select name="mode" className="select select-bordered w-full dark:bg-gray-700 bg-gray-200">
                                <option>Online</option>
                                <option>Offline</option>
                                <option>Hybrid</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label className="block mb-1 font-semibold">Short Description</label>
                            <textarea name="description" rows={4} required placeholder="Provide a brief summary of the course..." className="textarea textarea-bordered w-full bg-gray-200 dark:bg-gray-700" />
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2">
                            <button type="submit" className="btn btn-outline bg-gradient-to-r from-primary to-accent dark:text-white dark:bg-gray-700 font-semibold w-full text-lg tracking-wide shadow-lg" disabled={loading}>
                                {loading ? "Adding..." : "Add Course"}
                            </button>
                        </div>
                    </form>
                </Fade>
            </motion.div>
        </div>
    );
};

export default AddCourse;
