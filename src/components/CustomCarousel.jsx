import React, { useState } from 'react';
import '../style/customCarrousel.css';

const CustomCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length,
        );
    };

    return (
        <div className="custom-carousel">
            <div className="carousel-slide">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
            <button className="prev-button" onClick={prevSlide}>
                &lt;
            </button>
            <button className="next-button" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default CustomCarousel;
