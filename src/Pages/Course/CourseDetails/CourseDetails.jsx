import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { motion } from "framer-motion";
import DetailsError from "../../../Error/DetailsError";
import { FaCommentDollar } from "react-icons/fa";

const CourseDetails = () => {
    const data = useLoaderData();
    const [course, setCourse] = useState(data);
    const { id } = useParams();
    const { user } = useAuth();

    const {
        category, createdAt, createdBy, description, duration, email,
        image, language, level, mode, tags, fee, title,
        totalSeat, enrolledBy = [], updatedAt, seat, _id
    } = course || {};
    console.log(course);

    const [isEnrolled, setIsEnrolled] = useState(false);

    useEffect(() => {
        if (user && enrolledBy?.includes(user.email)) {
            setIsEnrolled(true);
        }
    }, [user, enrolledBy]);

    const handleEnrolledButton = async () => {
        if (!user) return toast.error("You must be logged in to enroll.");
        if (user?.email === email) return toast.error("You can't enroll in your own course!");
        if (isEnrolled) return toast.error("Already enrolled.");
        if (seat === 0) return toast.error("No seats available.");

        const enrollInfo = {
            enrollId: _id,
            customerEmail: user?.email,
        };

        await axios
            .post(`http://localhost:3000/course-order/${_id}`, enrollInfo)
            .then((data) => {
                setCourse((prev) => ({
                    ...prev,
                    totalSeat: prev.totalSeat - 1,
                }));
                // if (data.data.acknowledged) {
                //     setIsEnrolled(!isEnrolled)
                // }
                console.log(data);
                setIsEnrolled(true);
                toast.success("Enrolled successfully!");
            })
            .catch((err) => {
                toast.error("Enrollment failed.", err.message);
            });
    };

    if (id !== course?._id) return <DetailsError />;


    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl my-12 lg:mx-auto md:mx-12 px-6 mx-6 py-10 bg-white/30 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-700"
        >
            <img src={image} alt={title} className="w-full h-80 object-cover rounded-xl mb-6" />
            <h1 className="text-4xl font-bold text-accent mb-2">{title}</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
                <div>
                    <p className="flex gap-2 items-center"><FaCommentDollar /> <strong>Fee:</strong> ${fee}</p>
                    <p><strong>⏳ Duration:</strong> {new Date(duration).toLocaleDateString()}</p>
                    <p><strong>🎓 Level:</strong> {level}</p>
                    <p><strong>🧠 Category:</strong> {category}</p>
                    <p><strong>🌍 Language:</strong> {language}</p>
                    <p><strong>💻 Mode:</strong> {mode}</p>
                </div>
                <div>
                    <p><strong>📅 Created At:</strong> {new Date(createdAt).toLocaleString()}</p>
                    <p><strong>📈 Updated At:</strong> {new Date(updatedAt).toLocaleDateString()}</p>
                    <p><strong>🧑 Instructor:</strong> {createdBy}</p>
                    <p><strong>✉️ Contact Email:</strong> {email}</p>
                    {/* <p><strong>🎟️ Total Seats:</strong> {totalSeat}</p> */}
                    <p><strong>📥 Available Seats:</strong> {totalSeat}</p>
                </div>
            </div>

            <div className="mt-6">
                <strong>🏷️ Tags:</strong>{" "}
                {tags?.map((tag, i) => (
                    <span key={i} className="inline-block bg-accent/20 text-accent px-2 py-1 rounded-full text-xs mr-2 mt-2">
                        #{tag}
                    </span>
                ))}
            </div>

            <div className="mt-8">
                <button
                    disabled={!user || isEnrolled || seat === 0}
                    onClick={handleEnrolledButton}
                    className={`btn px-6 py-2 text-white font-semibold rounded-lg shadow-md
                        ${!user || isEnrolled || seat === 0 ? "opacity-50 cursor-not-allowed" : ""}
                        ${isEnrolled ? "bg-green-600 hover:bg-green-600" : "bg-primary btn-outline hover:bg-accent"}
                    `}
                >
                    {isEnrolled ? " Enrolled" : seat === 0 ? "No seats left" : "Enroll Now"}
                </button>
                {!user && <p className="text-red-500 mt-2 text-sm">Please log in to enroll.</p>}
            </div>

            <Toaster />
        </motion.div>
    );
};

export default CourseDetails;
