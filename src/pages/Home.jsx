import bannerImg from '../assets/home.png';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';


const Home = () => {
    return (
        <div>
            <Banner title="Chez vous, partout et ailleur" img={bannerImg} />
            <Gallery />
        </div>
    );
};

export default Home;
