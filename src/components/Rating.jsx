import React from 'react'
import rateGray from '../assets/rate_gray.svg';
import rateRed from '../assets/rate_red.svg';
import '../style/rating.css'


function Rating({ rating }) {
    // Tableau de 5 étoiles
    const arrayRate = Array.from({ length: 5 }); 

    return (
        <div className='rating_container'>
            {arrayRate.map((_, index) => (
                <img
                    key={index}
                    src={index < rating ? rateRed : rateGray}
                    alt='étoile'
                />
            ))}
        </div>
    );
}

export default Rating;
