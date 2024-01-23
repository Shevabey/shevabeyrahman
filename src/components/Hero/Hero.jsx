import React from 'react'
import css from './Hero.module.scss'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';


const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      className= {`innerWidth ${css.container}`}>
        {/* Upper Elements */}
        <div className={css.upperElements}>
          <motion.span 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="primaryText">
            Hey There,👋 <br />
            I`m Shevabey.
          </motion.span>
          <motion.span className="secondaryText" 
          variants={fadeIn("left", "tween", 0.4, 1)}
          >
            I Front End Developer, <br />
          </motion.span>
        </div>

        {/* person image */}
        <motion.div className={css.person}
        variants={fadeIn("up", "tween", 0.3, 1)}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)}
          src="./personal.png" alt="person" 
          
          />
        </motion.div>

        {/* email */}
        <a href="mailto:shevabeyrahman@gmail.com" className={css.email}>
          shevabeyrahman@gmail.com
        </a>


        {/* Lower Elements */}
        <div className={css.lowerElements}>
          <motion.div 
          variants={fadeIn("right", "tween", 0.3, 1)}
          className={css.experience}>
            <div className="primaryText">1</div>
            <div className="secondaryText">
              <div>
                Years
              </div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("left", "tween", 0.5, 1)}
          className={css.certificate}>
            <img src= "./sertifikat.png" alt="logo" />
            <span>PROFESSIONAL CERTIFICATE </span>
            <span>JUNIOR WEB DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero