import React from 'react'
import css from "./Toggle.module.scss";
import { IoMoon, IoSunny } from "react-icons/io5";

const Toggle = () => {
  return (
    <div>
        <label>
            <input type="checkbox" />
            <IoSunny className={css.sun} />
            <IoMoon className={css.moon}/>
            <span className={css.toggle}></span>
            <span className={css.animateBg}></span>
        </label>
    </div>
  )
}

export default Toggle