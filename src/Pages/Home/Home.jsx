import usePageTitle from '../../Hooks/usePageTitle';
import useAuth from '../../Hooks/useAuth';
import Banner from '../../Components/Banner/Banner';
import LatestCourse from '../../Components/LatestCourse/LatestCourse';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import WhyChoseUs from './WhyChoseUs';
import Instructor from './Instructor';
import StudentSuccess from './StudentSuccess';
import CTASection from './CTASection';
import PopularCourse from '../Course/PopularCourse/PopularCourse';

const Home = () => {
    usePageTitle('Home');
    const { user } = useAuth();

    return (
        <div>
            {/* Hero Banner */}
            <Banner />

            {/* Latest Course Section (Already added) */}
            <LatestCourse />

            {/* Popular Courses */}
            <PopularCourse />

            {/* //why chose us section */}
            <div>
                <WhyChoseUs />
            </div>

            {/* //Instructor section */}
            <div>
                <Instructor />
            </div>

            {/* Student Success Stories */}
            <div>
                <StudentSuccess />
            </div>

            {/* CTA Section */}
            <CTASection />
        </div>
    );
};

export default Home;
