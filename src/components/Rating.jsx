import React from 'react'
import PropTypes from 'prop-types';
import rateGray from '../assets/rate_gray.svg';
import rateRed from '../assets/rate_red.svg';
import '../style/rating.css'


function Rating({ rating }) {
    // Tableau de 5 étoiles
    console.log({Rating})
    const arrayRate = Array.from({ length: 5 }); 

    return (
        <div className='rating'>
            {arrayRate.map((_, index) => (
                <img
                    key={index}
                    src={index < rating ? rateRed : rateGray}
                    alt='étoile'
                />
            ))}
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.string,
};

export default Rating;
