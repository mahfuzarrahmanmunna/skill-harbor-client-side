import usePageTitle from '../../Hooks/usePageTitle';
import useAuth from '../../Hooks/useAuth';

const Home = () => {
    usePageTitle()
    const { user } = useAuth()
    console.log(user);
    return (
        <div>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;