import React from "react";
import css from "./Portfolio.module.scss";
import links from "../../utils/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { FaGithub, FaLink } from "react-icons/fa";

const Portfolio = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        {/* For heading */}
        <motion.div
          variants={fadeIn("down", "tween", 0.5, 0.6)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">My Latest Work</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>

          <a
            href={links.sosmed.github}
            target="_blank"
            rel="noopener noreferrer"
            className="secondaryText"
          >
            Explore More Works
          </a>
        </motion.div>

        {/* Images */}
        {/* <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./mockup/mockupstore.jpg"
            alt="web store"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./mockup/mockupwedding.jpg"
            alt="web wedding"
          />
        </div> */}

        <div className={`flexCenter ${css.portfolio}`}>
          {/* card 1 */}
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            className={css.card}
          >
            <img src="./mockup/mockupstore.jpg" className={css.cardImage} />

            <div className={css.cardContent}>
              <p className={css.cardTitle}>Barokah Online Shop</p>
              <p className={css.cardDescription}>
                Online shop sells gas cylinders, gallons, catfish and ice cubes.
                Easy shopping with fast delivery, meeting daily home needs.
              </p>
              <div className={css.link}>
                <a
                  href={links.webStoreBarokah.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.tooltip}
                >
                  <FaLink size={"23px"} />
                  <div className={css.tooltiptext}>Link Demo</div>
                </a>
                <a
                  href={links.webStoreBarokah.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.tooltip}
                >
                  <FaGithub size={"23px"} />
                  <div className={css.tooltiptext}>Source code</div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* card 2 */}
          <motion.div
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            className={css.card}
          >
            <img src="./mockup/mockupwedding.jpg" className={css.cardImage} />

            <div className={css.cardContent}>
              <p className={css.cardTitle}>Wedding Website</p>
              <p className={css.cardDescription}>
                Fulan & Fulanah`s simple, elegant, interactive wedding
                invitation. Reflecting the uniqueness of their marriage
              </p>
              <div className={css.link}>
                <a
                  href={links.webWedding.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.tooltip}
                >
                  <FaLink size={"23px"} />
                  <div className={css.tooltiptext}>Link Demo</div>
                </a>
                <a
                  href={links.webWedding.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.tooltip}
                >
                  <FaGithub size={"23px"} />
                  <div className={css.tooltiptext}>Source code</div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
