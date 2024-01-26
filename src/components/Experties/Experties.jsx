import React from "react";
import css from "./Experties.module.scss";
import { projectExperience } from "../../utils/data";

const Experties = () => {
  return (
    <div className={css.wrapper}>
      <div
        className={`paddings yPadiings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
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
                          height={25} width={25}
                        />
                      ))}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={css.rightSide}>right side</div>
      </div>
    </div>
  );
};

export default Experties;
