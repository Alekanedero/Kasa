import '../style/banner.css';

const Banner = (props) => {
    return (
        <div className="banner">
            <img className="banner_img" src={props.img} alt={props.title} />
            <h1 className="banner_title">{props.title}</h1>
        </div>
    );
};

export default Banner;
