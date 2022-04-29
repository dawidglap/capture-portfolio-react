import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from '../styles';
import { motion } from 'framer-motion';

const AboutSection = () => {

    // IS BETTER TO STORE AN ANIMATION IN A VARIABLE 

    // const titleAnim =  {
    //     hidden: {opacity: 0},
    //     show: {opacity: 1, transition: {duration: 2}},
    // }

    // const container = {
    //     hidden: {x: 100},
    //     show: {x: 0, transition: {duration: 1, ease: "easeOut", staggerChildren: 1}}
    // }

    return(
        // THE ABOUT HERE IS A STYLED COMPONENT. I CAN CALL THE VARIABLE StyledAbout IN THE FUTURE 
        <About> 
            <Description>
                <motion.div >
                    <Hide>
                        <motion.h2  >
                             We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 >your <span>dreams</span> come </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 >true.</motion.h2>
                    </Hide>
                </motion.div>
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