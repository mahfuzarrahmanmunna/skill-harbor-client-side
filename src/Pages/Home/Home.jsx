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

const Home = () => {
    usePageTitle();

    return (
        <div>
            {/* Hero Banner */}
            <Banner />

            {/* Latest Course Section (Already added) */}
            <div className=''>
                <div>
                    <LatestCourse />
                </div>

                {/* Popular Courses */}
                <div>
                    <PopularCourse />
                </div>

                <div>
                    <MostEnrolledCourse />
                </div>

                <div>
                    <LongDurationCourses />
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
        </div>
    );
};

export default Home;
