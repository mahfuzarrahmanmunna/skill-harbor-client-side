import usePageTitle from '../../Hooks/usePageTitle';
import useAuth from '../../Hooks/useAuth';
import BannerSlider from '../../Components/Banner/BannerSlider';

const Home = () => {
    usePageTitle()
    const { user } = useAuth()
    console.log(user);
    return (
        <div>
            <BannerSlider />
        </div>
    );
};

export default Home;