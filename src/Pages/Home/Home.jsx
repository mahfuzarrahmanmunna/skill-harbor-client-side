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
            <div className='flex justify-center my-12'>
                <iframe className='border rounded-2xl' width="560" height="315" src="https://www.youtube.com/embed/nNOQQGszHVA?si=xY7XvdN13jcATo9T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Home;