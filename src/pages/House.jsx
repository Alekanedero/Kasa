import jsonData from '../data/data.json';
import { useParams, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
// import NotFound from './NotFound.jsx';

import '../style/house.css';


const House = () => {
    const id  = useParams()
    const datas = jsonData.find((house) => house.id === id.id);

    const navigate = useNavigate();

    // Utilisez useEffect pour gérer la redirection
    useEffect(() => {
        if (!datas) {
            navigate('*');
        }
    }, [datas, navigate]);

    if (!datas) {
        return null;
    }

    return (
        <div className="house">
            <Slideshow images={datas.pictures} />
            <div className='container'>
                <div className='container__title__tag'>
                    <div>
                        <h1 className='container__title'>{datas.title}</h1>
                        <h2 className='container__location'>{datas.location}</h2>
                    </div>
                    <div>
                        <Tag tags={datas.tags} />
                    </div>
                </div>
                <div className='container__name__rating'>
                    <div className='container__name__img'>
                        <p className='container__name'>{datas.host.name}</p>
                        <img src={datas.host.picture} alt="profil" className='container__img-profil'/>
                    </div>
                    <div>
                        <Rating rating={datas.rating} />
                    </div>
                </div>
            </div>
            <div className='container-collapse'>
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

