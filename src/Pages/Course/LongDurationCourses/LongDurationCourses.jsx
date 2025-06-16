import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

const LongDurationCourses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/long-duration-courses`)
            .then(res => {
                setCourses(res.data)
            })
    }, [])
    console.log(courses);

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
        <div className='slider-container px-4 py-8 max-w-7xl mx-auto'>
            <h2 className="text-2xl font-bold mb-6 text-center">Long Duration Courses</h2>
            {
                courses.length == 0 ? (<>
                    <p>There is no Data founded</p>
                </>) : (
                    <Slider {...settings}>
                        {
                            courses.map((course, index) => (
                                <Link key={index} to={`course-details/${course?._id}`} className='px-2'>
                                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 h-full">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-40 object-cover rounded"
                                        />
                                        <h3 className="text-lg font-semibold mt-4">{course.title}</h3>
                                        <p className="text-sm text-gray-500">{course.description?.slice(0, 50)}...</p>
                                        <p className="mt-2 text-green-600 font-semibold">Duration: {formatDuration(course?.duration)}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </Slider>
                )
            }
        </div>
    );
};

export default LongDurationCourses;