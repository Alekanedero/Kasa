import { useState } from 'react';
import arrow from '../assets/arrow.svg';
import '../style/carrousel.css';

function Carrousel( {images} ) {
  const [current, setCurrent] = useState(0)
  const length = images.length

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current +1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1);
  };


  return (
    <section className='carrousel-container'>
      {images.map((image, index) => (
        <div
          className={index === current ? 'image active' : 'image'}
          key={index}
        >
        {index === current && (
          <div className='carrousel'>
            <img
              src={image}
              alt="house"
              className='carrousel__image'
            />
            <img
              src={arrow}
              alt="flèche directive gauche"
              className='carrousel__arrow__left'
              onClick={prevSlide}
            />
            <img
              src={arrow}
              alt="flèche directive droite"
              className='carrousel__arrow__right'
              onClick={nextSlide}
            />
            <p className='carrousel__counter'>{index+1}/{length}</p>
          </div>
        )}
        </div>
      ))}
    </section>
  );
};

export default Carrousel;
