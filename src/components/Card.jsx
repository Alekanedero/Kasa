import '../style/card.css';
import PropTypes from 'prop-types';

const Card = ({ cover, title }) => {
    return (
        <article className="card">
            <div className="container_img">
                <img src={cover} alt={title} className="card_img" />
                <div className="card_gradient" />
            </div>
            <div className="card_content">
                <h3 className="card_title">{title}</h3>
            </div>
        </article>
    );
};

Card.propTypes = {
    cover: PropTypes.string.isRequired, // cover est requis et doit être une chaîne (string)
    title: PropTypes.string.isRequired, // title est requis et doit être une chaîne (string)
};

export default Card;
