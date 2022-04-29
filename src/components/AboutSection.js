import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim} from "../animation"


const AboutSection = () => {

    return(
        // THE ABOUT HERE IS A STYLED COMPONENT. I CAN CALL THE VARIABLE StyledAbout IN THE FUTURE 
        <About> 
            <Description>
                <motion.div >
                    <Hide>
                        <motion.h2  variants={titleAnim} >
                             We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >your <span>dreams</span> come </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    contact us for any photography or videography idea that you have. We have professionals with amazing skills.
                </motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="home cover img" />
            </Image>
        </About>
    )
};



export default AboutSection