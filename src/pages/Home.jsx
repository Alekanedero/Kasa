import bannerImg from '../assets/home.png';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';

// import '../style/home.css';

const Home = () => {
    return (
        <div className="home">
            <Banner title="Chez vous, partout et ailleur" img={bannerImg} />
            <Gallery />
        </div>
    );
};

export default Home;
