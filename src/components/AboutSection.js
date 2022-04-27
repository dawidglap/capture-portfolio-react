import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from '../styles';

const AboutSection = () => {
    return(
        // THE ABOUT HERE IS A STYLED COMPONENT. I CAN CALL THE VARIABLE StyledAbout IN THE FUTURE 
        <About> 
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>contact us for any photography or videography idea that you have. We have professionals with amazing skills.</p>
                <button>Contact us</button>
            </Description>
            <Image>
                <img src={home1} alt="home cover img" />
            </Image>
        </About>
    )
};



export default AboutSection