import usePageTitle from '../../Hooks/usePageTitle';
import Banner from '../../Components/Banner/Banner';
import LatestCourse from '../../Components/LatestCourse/LatestCourse';
import WhyChoseUs from './WhyChoseUs';
import Instructor from './Instructor';
import StudentSuccess from './StudentSuccess';
import CTASection from './CTASection';
import PopularCourse from '../Course/PopularCourse/PopularCourse';
import { Toaster } from 'react-hot-toast';
import FrequentlyAsk from './FrequentlyAsk';
import MostEnrolledCourse from '../Course/MostEnrolledCourse/MostEnrolledCourse';
import LongDurationCourses from '../Course/LongDurationCourses/LongDurationCourses';
import { motion } from 'framer-motion';

const Home = () => {
    usePageTitle();

    return (
        <div>
            {/* Hero Banner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <Banner />
            </motion.div>

            {/* Latest Course Section (Already added) */}
            <div className='mx-6 md:mx-10 lg:mx-16 flex flex-col space-y-24'>

                <motion.div
                    className='mt-24'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <LatestCourse />
                </motion.div>

                {/* Popular Courses */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <PopularCourse />
                </motion.div>

                {/* Most Enrolled Course */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <MostEnrolledCourse />
                </motion.div>

                {/* Long Duration Courses */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <LongDurationCourses />
                </motion.div>

                {/* Frequently Asked Questions */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    <FrequentlyAsk />
                </motion.div>

                {/* Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <WhyChoseUs />
                </motion.div>

                {/* Instructor Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <Instructor />
                </motion.div>
                <Toaster />

                {/* Student Success Stories */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                >
                    <StudentSuccess />
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className='mb-24'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                >
                    <CTASection />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
