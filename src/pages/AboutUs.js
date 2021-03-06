// Import page components 
import AboutSection from "../components/AboutSection"
import FaqSection from "../components/FaqSection"
import ServicesSection from "../components/ServicesSection"
// ANIMATIONS 
import { motion } from "framer-motion"
import { PageAnimation } from "../animation"
import ScrollTop from "../components/ScrollTop";


const AboutUs = () => {
    return (
        <motion.div variants={PageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FaqSection/>
            <ScrollTop/>
        </motion.div>
    )
}

export default AboutUs