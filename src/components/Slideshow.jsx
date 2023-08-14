import React, { useState } from 'react';
import '../style/slideshow.css';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
    };

    return (
        <div className="image-carousel">
            <button className="prev-button" onClick={prevSlide}>
                ←
            </button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            <button className="next-button" onClick={nextSlide}>
                →
            </button>
        </div>
    );
};

export default Slideshow;
