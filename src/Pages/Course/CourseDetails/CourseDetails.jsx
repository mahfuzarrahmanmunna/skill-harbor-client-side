import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { motion } from "framer-motion"; // ✅ fix incorrect import path
import DetailsError from "../../../Error/DetailsError";

const CourseDetails = () => {
    const course = useLoaderData();
    const { id } = useParams()
    const { user } = useAuth();
    const [isEnrolled, setIsEnrolled] = useState(false);

    // console.log(id);
    // console.log(course._id);
    
    // 🔍 Check if user already enrolled
    useEffect(() => {
        if (user?.email) {
            axios
                .get(`http://localhost:3000/enroll?email=${user.email}&courseId=${course._id}`)
                .then(res => {
                    if (res.data?.enrolled) {
                        setIsEnrolled(true);
                    }
                })
                .catch(err => {
                    console.error("Error checking enrollment:", err);
                });
        }
    }, [user, course._id]);

    // ✅ Handle Enroll
    const handleEnroll = () => {
        if (!user) return;

        if (user.email === course?.email) {
            return toast.error("You added this course. So you can't enroll this course")
        }

        axios
            .post(`http://localhost:3000/enroll`, {
                email: user.email,
                courseId: course._id
            })
            .then(() => {
                toast.success("✅ Enrolled successfully!");
                setIsEnrolled(true);
            })
            .catch(err => {
                toast.error("Already enrolled or failed.");
                console.error(err);
            });
    };

    if (id !== course?._id) {
        return <DetailsError />
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl my-12 mx-auto px-6 py-10 bg-white/30 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-700"
        >
            <img src={course.image} alt={course.title} className="w-full h-80 object-cover rounded-xl mb-6" />
            <h1 className="text-4xl font-bold text-accent mb-2">{course.title}</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{course.description}</p>
            <p><strong>Fee:</strong> ${course.fee}</p>
            <p><strong>Duration:</strong> {new Date(course.duration).toLocaleDateString()}</p>
            <p><strong>Tags:</strong> {course.tags?.join(", ")}</p>
            <p><strong>Created By:</strong> {course.createdBy}</p>

            <Toaster />

            <div className="mt-6">
                <button
                    disabled={!user || isEnrolled}
                    onClick={handleEnroll}
                    className={`btn btn-accent px-6 py-2 text-white font-semibold rounded-lg shadow-md 
                        ${!user ? "opacity-50 cursor-not-allowed" : ""}
                        ${isEnrolled ? "bg-green-500 hover:bg-green-500" : "bg-primary btn-outline hover:bg-accent"}
                    `}
                >
                    {isEnrolled ? "Enrolled" : "Enroll Now"}
                </button>
                {!user && (
                    <p className="text-red-500 mt-2 text-sm"> Please log in to enroll in this course.</p>
                )}
            </div>
        </motion.div>
    );
};

export default CourseDetails;
