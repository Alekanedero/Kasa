import Card from './Card';
import data from '../data/data.json';
import { NavLink } from 'react-router-dom';
import '../style/galerry.css';

function Gallery() {
   return (
      <div className="galerry">
         {data.map((item, id) => (
            <NavLink key={id} to={`/house/${item.id}`}>
               <Card cover={item.cover} title={item.title} />
            </NavLink>
         ))}
      </div>
   );
}

export default Gallery;
