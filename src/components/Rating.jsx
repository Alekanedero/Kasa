import React from 'react'
import PropTypes from 'prop-types'
import rateGray from '../assets/rate_gray.svg'
import rateRed from '../assets/rate_red.svg'
import '../style/rating.css'

function Rating({ rating }) {
   // vérification de la propTypes
   if (typeof rating !== 'string') {
      return console.log('Le rating doit être une chaîne de caractères.')
   }
   // crée un tableau de longueur 5 (étoiles)
   const arrayRate = Array.from({ length: 5 })

   return (
      <div className="rating">
         {arrayRate.map((_, index) => (
            <img
               className="rating__stars"
               key={index}
               src={index < rating ? rateRed : rateGray}
               alt="étoile"
            />
         ))}
      </div>
   )
}

Rating.propTypes = {
   rating: PropTypes.string,
}

export default Rating
