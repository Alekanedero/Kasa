import '../style/card.css';

const Card = ({ cover, title }) => {
    return (
        <article className="card">
            <img src={cover} alt={title} className="card__img" />
            <div className="card__gradient" />
            <h3 className="card__title">{title}</h3>
        </article>
    );
};

export default Card;
