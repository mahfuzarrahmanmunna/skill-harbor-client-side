import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import Fallback from '../../../Components/Fallback/Fallback';
import useAuth from '../../../Hooks/useAuth';

const LongDurationCourses = () => {
    const [courses, setCourses] = useState([])
    const { loading, setLoading } = useAuth()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/long-duration-courses`)
            .then(res => {
                setCourses(res.data);
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            })
    }, [])
    // console.log(courses);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,  // default for large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        arrows: false,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024, // < 1024px → show 2 cards
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768, // < 768px → show 1 card
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    function formatDuration(minutes) {
        if (!minutes) return "";
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return `${h > 0 ? h + "h " : ""}${m > 0 ? m + "m" : ""}`.trim();
    }
    return (
        <div className='slider-container'>
            <h2 className="text-2xl font-bold mb-6 text-center">Long Duration Courses</h2>
            {
                loading ? (
                    <Fallback />
                ) : courses.length === 0 ? (
                    <p className="text-center text-gray-500">There is no data found</p>
                ) : (
                    <Slider {...settings}>
                        {courses.map((course, index) => (
                            <Link key={index} to={`course-details/${course?._id}`} className='px-2'>
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 h-full">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-40 object-cover rounded"
                                    />
                                    <h3 className="text-lg font-semibold mt-4">{course.title.slice(0, 20)}..</h3>
                                    <p className="text-sm text-gray-500">{course.description?.slice(0, 42)}...</p>
                                    <p className="mt-2 text-green-600 font-semibold">Duration: {formatDuration(course?.duration)}</p>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                )
            }
        </div>
    );
};

export default LongDurationCourses;