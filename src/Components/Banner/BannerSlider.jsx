import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { motion } from "motion/react"
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import { Sun, Moon, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router";



export default function BannerSlider() {


    return (
        <div className="relative h-[70vh] overflow-hidden shadow-xl">
            <Swiper
                navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Navigation, Autoplay]}
                loop={true}
                className="h-full"
            >
                {/* first slider */}
                <SwiperSlide >
                    <div className="relative h-full w-full">
                        <img
                            src="https://i.ibb.co/1tWLckwr/pexels-pixabay-327540.jpg"
                            alt="banner"
                            className="absolute inset-0 h-full w-full object-cover brightness-50"
                        />
                        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
                            <Fade direction="down" triggerOnce>
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-4xl md:text-5xl font-bold mb-4"
                                >
                                    Welcome to Our Course Platform
                                </motion.h1>
                            </Fade>

                            <Fade direction="down" delay={200} triggerOnce>
                                <div className="text-lg md:text-xl max-w-xl mb-6">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "Learn at your own pace",
                                                "Top instructors",
                                                "Flexible schedules",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                            deleteSpeed: 30,
                                        }}
                                    />
                                </div>
                            </Fade>
                            <Fade direction="up">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to='/sign-in' className="px-8 btn btn-white btn-outline">
                                        Join us <ArrowRight />
                                    </Link>
                                </motion.div>
                            </Fade>
                        </div>
                    </div>
                </SwiperSlide>
                {/* second sliders */}
                <SwiperSlide >
                    <div className="relative h-full w-full">
                        <img
                            src="https://i.ibb.co/sv0GSFCD/pexels-pavel-danilyuk-6203631.jpg"
                            alt="banner"
                            className="absolute inset-0 h-full w-full object-cover brightness-50"
                        />
                        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
                            <Fade direction="down" triggerOnce>
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-4xl md:text-5xl font-bold mb-4"
                                >
                                    Join Thousands of Learners
                                </motion.h1>
                            </Fade>

                            <Fade direction="down" delay={200} triggerOnce>
                                <div className="text-lg md:text-xl max-w-xl mb-6">
                                    <Typewriter
                                        options={{
                                            strings: ["Boost your career",
                                                "Learn modern tools",
                                                "Become job-ready",],
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                            deleteSpeed: 30,
                                        }}
                                    />
                                </div>
                            </Fade>
                            <Fade direction="up">
                                <Link to='/about-us' className="px-8 btn btn-white btn-outline">
                                    About us <ArrowRight />
                                </Link>
                            </Fade>
                        </div>
                    </div>
                </SwiperSlide>
                {/* third slider  */}
                <SwiperSlide >
                    <div className="relative h-full w-full">
                        <img
                            src="https://i.ibb.co/npCT8tz/pexels-sora-shimazaki-5926393.jpg"
                            alt="banner"
                            className="absolute inset-0 h-full w-full object-cover brightness-50"
                        />
                        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
                            <Fade direction="down" duration={2000} triggerOnce>
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-4xl md:text-5xl font-bold mb-4"
                                >
                                    Build Real World Skills
                                </motion.h1>
                            </Fade>

                            <Fade direction="down" delay={200} duration={2000} triggerOnce>
                                <div className="text-lg md:text-xl max-w-xl mb-6">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "Full stack development",
                                                "Data science",
                                                "Project-based learning",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                            deleteSpeed: 30,
                                        }}
                                    />
                                </div>
                            </Fade>
                            <Fade direction="up">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to='/all-course' className="px-8 btn btn-white btn-outline">
                                        Visit All Course <ArrowRight />
                                    </Link>
                                </motion.div>
                            </Fade>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Navigation Buttons */}
                <button className="prev-btn absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full">
                    <ChevronLeft size={24} />
                </button>
                <button className="next-btn absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full">
                    <ChevronRight size={24} />
                </button>
            </Swiper>
        </div>
    );
}
