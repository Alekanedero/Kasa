import bannerImg from '../assets/about.png';
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';
import aboutData from '../data/aboutData.json';

import '../style/about.css';

const About = () => {
    return (
        <div className="about">
            <Banner title="" img={bannerImg} />
            <div className="about__collapses-container">
                {aboutData.map((item, index) => (
                    <Collapse
                        key={`${item.title}-${index}`}
                        title={item.title}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    );
};

export default About;
