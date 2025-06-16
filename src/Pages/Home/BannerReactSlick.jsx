import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import axios from "axios";

// Custom Arrows
const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all"
    >
        <ChevronLeft size={26} />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all"
    >
        <ChevronRight size={26} />
    </button>
);

export default function BannerReactSlick() {
    const [slides, setSlides] = useState([])
    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        fade: true,
    };

    useEffect(() => {
        axios.get('./bannerSlick.json')
            .then(res => {
                setSlides(res.data)
            })
    }, [])

    return (
        <div className="relative h-[75vh] lg:h-[90vh] overflow-hidden">
            <Slider {...settings} className="h-full">
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div className="relative h-[75vh] lg:h-[90vh] w-full">
                            <img
                                src={slide.image}
                                alt="banner"
                                className="absolute inset-0 h-full w-full object-cover brightness-50"
                            />
                            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-2xl w-full text-white">
                                    <Fade direction="down" >
                                        <motion.h1
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6 }}
                                            className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight"
                                        >
                                            {slide.title}
                                        </motion.h1>
                                    </Fade>

                                    <Fade direction="down" delay={200} >
                                        <div className="text-lg md:text-xl font-light mb-6">
                                            <Typewriter
                                                options={{
                                                    strings: slide.text,
                                                    autoStart: true,
                                                    loop: true,
                                                    delay: 40,
                                                    deleteSpeed: 20,
                                                }}
                                            />
                                        </div>
                                    </Fade>

                                    <Fade direction="up">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex justify-center"
                                        >
                                            <Link
                                                to={slide.link}
                                                className="inline-flex items-center gap-2 text-lg px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:bg-gray-100 transition-all"
                                            >
                                                {slide.button}
                                                <ArrowRight size={20} />
                                            </Link>
                                        </motion.div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
