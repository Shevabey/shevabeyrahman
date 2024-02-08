import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import Toggle from "../Toggle/Toggle";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const closeMenu = () => setMenuOpened(false);
  const headerShadows = useHeaderShadow();
  const menuRef = useRef();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  // when link click event sidebar close
  const handleLinkClick = () => {
    closeMenu();
  };

  // click link for active link header when in section
  useEffect(() => {
    const handleScroll = () => {
      const expertiesElement = document.getElementById("experties");
      const portfolioElement = document.getElementById("portfolio");

      if (
        expertiesElement &&
        window.scrollY >= expertiesElement.offsetTop &&
        window.scrollY < portfolioElement.offsetTop
      ) {
        setActiveLink("experties");
      } else if (
        portfolioElement &&
        window.scrollY >= portfolioElement.offsetTop
      ) {
        setActiveLink("portfolio");
      } else {
        setActiveLink("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function clik number whastapp
  const handleWhatsappClick = () => {
    const number = "6288980824562";
    const introductionMessage = encodeURIComponent(
      "Halo, saya tertarik dengan layanan Anda."
    );

    // URL whatsapp
    const whatsappLink = `https://wa.me/${number}?text=${introductionMessage}`;

    // open link whatsapp
    window.open(whatsappLink);
  };


  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadows }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
            onClick={() => handleLinkClick("home")}
          >
            Shevabey Rahman
          </Link>
        </div>

        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          {/* navigation */}
          <li className={activeLink === "home" ? css.active : ""}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Link>
          </li>
          <li className={activeLink === "experties" ? css.active : ""}>
            <Link
              to="experties"
              spy={true}
              smooth={true}
              offset={1}
              duration={100}
              onClick={() => handleLinkClick("experties")}
            >
              Service
            </Link>
          </li>
          <li className={activeLink === "portfolio" ? css.active : ""}>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={3}
              duration={100}
              onClick={() => handleLinkClick("portfolio")}
            >
              Portfolio
            </Link>
          </li>
          <li
            className={`flexCenter ${css.phone}`}
            onClick={handleWhatsappClick}
          >
            <p>088980824562</p>
            <BiPhoneCall size={"40px"} />
          </li>
          {/* btn my CV */}
          <div>
            <a href="#" className={css.button}>
              My CV
            </a>
          </div>
        </ul>
        {/* toggle darkmode */}
       <Toggle/>

        {/* For medium and small screen */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
