import home1 from '../img/home1.png';
// STYLED 
import styled from 'styled-components';

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

// STYLED COMPONENTs

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color:white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2{
      font-wieght: lighter;

  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img{
      width: 100%;
      height: 80vh;
      object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;

`




export default AboutSection