import React from "react";
import css from "./Experties.module.scss";
import { WhatDoIHelp, projectExperience } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";

const Experties = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <a className="anchor" id="experties"></a>
      <div
        className={`paddings yPadiings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div 
              variants={fadeIn("right", "tween", (i+1)*0.2, 1)}
              className={css.exp} key={i}>
                <div className="flexCenter" style={{ background: exp.bg }}>
                  <exp.icon size={25} color="white" />
                </div>
                <div>
                  <span>{exp.name}</span>
                  <span className={css.stack}>
                    {Array.isArray(exp.stack) &&
                      exp.stack.map((image, i) => (
                        <img
                          key={i}
                          src={image}
                          alt={`${exp.name} - ${i + 1}`}
                          height={25}
                          width={25}
                        />
                      ))}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div 
        variants={textVariant(0.5)}
        className={css.rightSide}>
          <span className="primaryText">What do I help?</span>
          {WhatDoIHelp.map((paragraph, i) => {
            return (
              <span className="secondaryText" key={i}>
                {paragraph}
              </span>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experties;
