import '../style/carrousel.css';


const Carrousel = ({images}) => {

    return (
        <div className="carrousel">
                {images.map((image, index) => (
                    <div key={`${image.id}-${index}`} className="carousel-item">
                        <img src={image} alt={`Image ${index}`} className='img_carrousel'/>
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                        <span className="material-symbols-outlined">arrow_forward_ios</span>
                    </div>
                ))}
        </div>
    );
};

export default Carrousel;
