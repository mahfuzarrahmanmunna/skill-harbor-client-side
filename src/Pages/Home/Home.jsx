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

const Home = () => {
    usePageTitle();

    return (
        <div>
            {/* Hero Banner */}
            <Banner />

            {/* Latest Course Section (Already added) */}
            <LatestCourse />

            {/* Popular Courses */}
            <PopularCourse />

            <div>
                <MostEnrolledCourse />
            </div>

            <div>
                <FrequentlyAsk />
            </div>

            {/* //why chose us section */}
            <div>
                <WhyChoseUs />
            </div>

            {/* //Instructor section */}
            <div>
                <Instructor />
            </div>
            <Toaster />

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
