import jsonData from '../data/data.json';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';

import '../style/house.css';


const House = () => {
    const id = useParams()
    const datas = jsonData.find((house) => house.id === id.id);

    return (
        <div className="house">
            <Carrousel images={datas.pictures} />
            <div className='info__container'>
                <div>
                    <h1 className='info__container__title'>{datas.title}</h1>
                    <h2 className='info__container__location'>{datas.location}</h2>
                </div>
                <div className='name__img__container'>
                    <p className='name'>{datas.host.name}</p>
                    <img src={datas.host.picture} alt="photo de profil" className='img__profil'/>
                </div>
            </div>
            <div className='tag__rating__container'>
                <Tag tags={datas.tags} />
                <Rating rating={datas.rating} />
            </div>
            <div className='desc__equip__container'>
                <Collapse
                    title= "Description"
                    details={datas.description}
                />
                <Collapse
                    title= "Equipements"
                    details={datas.equipments}
                />
            </div>
        </div>
    );
};

export default House;

