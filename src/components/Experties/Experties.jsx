import React from 'react'
import css from './Experties.module.scss'
import { projectExperience } from '../../utils/data'

const Experties = () => {
  return (
    <div className={css.wrapper}>
        <div className={`paddings yPadiings flexCenter innerWidth ${css.container}`}>
            <div className={css.leftSide}>
                {projectExperience.map((exp, i)=> {
                    return (
                        <div className={css.exp} key={i}>
                            <div className="flexCenter">
                                <exp.icon size={25} color='white'/>
                            </div>
                            <div>
                                <span>{exp.name}</span>
                                <span>{exp.projects}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={css.rightSide}>
                right side
            </div>
        </div>
    </div>
  )
}

export default Experties