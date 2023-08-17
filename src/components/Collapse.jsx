import { useState } from 'react';
import PropTypes from 'prop-types';
import chevron from '../assets/chevron.png';
import '../style/collapse.css';

const Collapse = ({ title, details }) => {

   const [isOpen, setIsOpen] = useState(false);

   // toggle = activer ou desactiver
   const toggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="collapse">
         <div className="collapse__menu" onClick={toggle}>
            <h3 className="collapse__title">{title}</h3>
            <img
               className={
                  isOpen
                     ? 'collapse__arrow collapse__arrow--down'
                     : 'collapse__arrow collapse__arrow--up'
               }
               src={chevron}
               alt="flèche haut-bas"
            />
         </div>
         <div
            className={
               isOpen
                  ? 'collapse__details collapse__details--open'
                  : 'collapse__details collapse__details--collapsed'
            }
         >
            {/* vérifie si details est un object */}
            {typeof details === 'object' ? (
               details.map((item, index) => <p className='collapse__details--object' key={index}>{item}</p>)
            ) : (
               <p className='collapse__details--p'>{details}</p>
            )}
         </div>
      </div>
   );
};

Collapse.propTypes = {
   title: PropTypes.string.isRequired,
   details: PropTypes.string.isRequired,
};

export default Collapse;