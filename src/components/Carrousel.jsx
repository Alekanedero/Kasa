import { useState } from 'react';
import '../style/carrousel.css';
import arrow from '../assets/arrow.svg'


function Carrousel( {images}) {
  const [current, setCurrent] = useState(0)
  const length = images.length

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current +1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1);
  }

  console.log(current)

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <section>
      {images.map((image, index) => (
        <div
          className={index === current ? 'image active' : 'image'}
          key={index}
        >
          {index === current && (
            <div className='carrousel'>
              <img
                src={image}
                alt="image house"
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
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Carrousel;
