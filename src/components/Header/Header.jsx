import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadows = useHeaderShadow();
  const menuRef = useRef();

  useOutsideAlerter(
    {
      menuRef,
      setMenuOpened
    }
  )
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
        <div className={css.name}><a href="#">Shevabey</a></div>

        <ul
        ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="#" className={css.active}>Home</a>
          </li>
          <li>
            <a href="#experties">Service</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>081389608249</p>
            <BiPhoneCall size={"40px"} />
          </li>
          <div>
              <a 
              href="#"
              className={css.button}
              >My CV</a>
          </div>
        </ul>
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