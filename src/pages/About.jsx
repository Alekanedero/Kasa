import bannerImg from '../assets/about.png';
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';
import aboutData from '../data/aboutData.json';

import '../style/about.css';

const About = () => {

    return (
        <div className="about">
            <Banner img={bannerImg} />
            <div className="about__collapses-container">
                {aboutData.map((element, index) => (
                    <Collapse
                        className="about__collapse"
                        key={`${element}-${index}`}
                        title={element.title}
                        details={element.details}
                    />
                ))}
            </div>
        </div>
    );
};

export default About;
