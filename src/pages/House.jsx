import Carrousel from '../components/Carrousel';
import jsonData from '../data/data.json';
import { useParams } from 'react-router-dom';

import '../style/house.css';


const House = () => {
    const id = useParams()
    const datas = jsonData.find((house) => house.id === id.id);

    return (
        <div className="Home">
            <Carrousel images={datas.pictures} />
        </div>
    );
};

export default House;

