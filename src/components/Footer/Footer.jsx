import React from 'react'
import css from './Footer.module.scss'
import { motion } from "framer-motion";
import { footerVariants, staggerContainer } from "../../utils/motion";

const Footer = () => {
  return (
    <motion.section
    initial="hidden"
    whileInView="show"
    variants={staggerContainer}
    viewport={{ once: false, amount: 0.25 }}    
    className={`paddings ${css.wrapper}`}>
        <motion.div 
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
            <div className={css.left}>
                <span className="primaryText">
                    Let`s make something <br /> amazing together
                </span>

                <span className="primaryText">
                    Start by <a href="mailto:shevabeyrahman@gmail.com">saying hi</a>
                </span>
            </div>

            <div className={css.right}>
                <div className={css.info}>
                    <span className='secondaryText'>Information</span>
                    <p>Sleman, Yogyakarta</p>
                </div>

                <div className={css.menu}>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Footer