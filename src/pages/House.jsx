import Carrousel from '../components/Carrousel';
import jsonData from '../data/data.json';
import { useParams } from 'react-router-dom';

import '../style/house.css';
import Tag from '../components/Tag.jsx';


const House = () => {
    const id = useParams()
    const datas = jsonData.find((house) => house.id === id.id);

    return (
        <div className="Home">
            {/* <Carrousel images={datas.pictures} /> */}
            <Tag tags={datas.tags} />
        </div>
    );
};

export default House;

