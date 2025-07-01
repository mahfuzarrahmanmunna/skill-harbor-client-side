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
            <div className='mx-6 md:mx-10 lg:mx-16 flex flex-col space-y-24'>
                <div className='mt-24'>
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
                <div className='mb-24'>
                    <CTASection />
                </div>
            </div>
        </div>
    );
};

export default Home;
