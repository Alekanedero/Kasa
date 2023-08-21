import '../style/card.css';
import PropTypes from 'prop-types';

const Card = ({ cover, title }) => {
    return (
        <article className="card">
            <img src={cover} alt={title} className="card__img" />
            <div className="card__gradient" />
            <h3 className="card__title">{title}</h3>
        </article>
    );
};

Card.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Card;
