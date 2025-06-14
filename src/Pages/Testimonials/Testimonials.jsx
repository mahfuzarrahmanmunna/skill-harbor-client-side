import { Fade, Zoom } from "react-awesome-reveal";
import { motion } from "framer-motion";
import usePageTitle from "../../Hooks/usePageTitle";
import { useEffect, useState } from "react";
import axios from "axios";



export default function Testimonials() {
    usePageTitle()
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        axios.get('./testimonials.json')
            .then(res => {
                setTestimonials(res.data)
            })
    }, [])
    return (
        <div className="min-h-screen  px-4 py-16 lg:px-20">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">What Our Learners Say</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Real feedback from students who have transformed their careers through our platform.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((item, idx) => (
                    <Fade direction="up" triggerOnce key={idx}>
                        <div className="bg-white dark:bg-neutral rounded-2xl shadow-xl p-6 text-center">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-primary"
                            />
                            <h3 className="text-xl font-semibold">{item.name}</h3>
                            <p className="text-sm text-primary mb-2">{item.role}</p>
                            <Zoom triggerOnce>
                                <p className="text-gray-600 dark:text-gray-300">{item.feedback}</p>
                            </Zoom>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
}
