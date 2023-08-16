import jsonData from '../data/data.json';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Collapse_double from '../components/Collapse';

import '../style/house.css';



const House = () => {
    const id = useParams()
    const datas = jsonData.find((house) => house.id === id.id);

    return (
        <div className="house">
            {/* <Carrousel images={datas.pictures} /> */}
            <div className='info_container'>
                <div>
                    <h1 className='title'>{datas.title}</h1>
                    <h2 className='location'>{datas.location}</h2>
                </div>
                <div className='name_img_container'>
                    <p className='name'>{datas.host.name}</p>
                    <img src={datas.host.picture} alt="photo de profil" className='img_profil'/>
                </div>
            </div>
            <div className='tag_rating_container'>
                <Tag tags={datas.tags} />
                <Rating rating={datas.rating} />
            </div>
            <div className='desc_equip_container'>
                <Collapse_double description={datas.description}/>
                <Collapse_double equipements={datas.equipement}/>
            </div>
            
        </div>
    );
};

export default House;

