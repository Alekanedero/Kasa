import '../style/house.css';
import CustomCarousel from '../components/CustomCarousel';
import jsonData from '../data/data.json';

const House = () => {
    const images = jsonData.map((accommodation) => accommodation.cover);
    return (
        <div className="Home">
            <CustomCarousel images={images} />
        </div>
    );
};

export default House;
