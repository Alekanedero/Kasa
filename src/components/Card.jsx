import '../style/card.css';
import PropTypes from 'prop-types';

const Card = ({ cover, title }) => {
    return (
        <article className="card">
            <div className="card__container__img">
                <img src={cover} alt={title} className="card__img" />
                <div className="card__gradient" />
            </div>
            <div className="card__content">
                <h3 className="card__title">{title}</h3>
            </div>
        </article>
    );
};

Card.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Card;
