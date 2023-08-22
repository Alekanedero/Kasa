import { useState } from 'react'
import arrow from '../assets/arrow.svg'
import '../style/slideshow.css'

function Slideshow({ images, alt }) {
   const [current, setCurrent] = useState(0)
   const length = images.length

   const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
   }

   const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
   }

   // vérifier s'il n'y a qu'une seul image
   if (length === 1) {
      return (
         <section className="slide-container">
            <div className="image active">
               <div className="slide">
                  <img
                     src={images}
                     alt={alt}
                     className="slide__image"
                  />
               </div>
            </div>
         </section>
      )
   }

   return (
      <section className="slide-container">
         {images.map((image, index) => (
            <div
               className={index === current ? 'image active' : 'image'}
               key={index}>
               {index === current && (
                  <div className="slide">
                     <img
                        src={image}
                        alt={alt}
                        className="slide__image"
                     />
                     <img
                        src={arrow}
                        alt="flèche directive gauche"
                        className="slide__arrow__left"
                        onClick={prevSlide}
                     />
                     <img
                        src={arrow}
                        alt="flèche directive droite"
                        className="slide__arrow__right"
                        onClick={nextSlide}
                     />
                     <p className="slide__counter">
                        {index + 1}/{length}
                     </p>
                  </div>
               )}
            </div>
         ))}
      </section>
   )
}

export default Slideshow
