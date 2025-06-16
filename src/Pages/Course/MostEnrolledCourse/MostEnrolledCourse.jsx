import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

const MostEnrolledCourse = () => {
    let sliderRef = useRef(null);
    const [slides, setSlides] = useState([])
    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/highest-enrolled-courses`)
            .then(res => {
                setSlides(res.data || [])
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,  // default for large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        arrows: false,
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

    return (
        <div className="slider-container px-4 py-8 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Most Enrolled Courses</h2>

            {slides.length === 0 ? (
                <p className="text-center">No data found</p>
            ) : (
                <Slider ref={sliderRef} {...settings}>
                    {slides.map((course, index) => (
                        <Link to={`course-details/${course?._id}`} key={index} className="px-2">
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 h-full">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-40 object-cover rounded"
                                />
                                <h3 className="text-lg font-semibold mt-4">{course.title}</h3>
                                <p className="text-sm text-gray-500">{course.description?.slice(0, 50)}...</p>
                                <p className="mt-2 text-green-600 font-semibold">Enrolled: {course.enrolledBy?.length || 0}</p>
                            </div>
                        </Link>
                    ))}
                </Slider>
            )}

            <div className="text-center mt-6 space-x-2">
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={() => sliderRef.current?.slickPlay()}
                >
                    Play
                </button>
                <button
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={() => sliderRef.current?.slickPause()}
                >
                    Pause
                </button>
            </div>
        </div>
    );
}


export default MostEnrolledCourse;