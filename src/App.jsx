import React from "react"
import Header from "./components/Header/Header"
import css from "./styles/app.module.scss"
import Hero from "./components/Hero/Hero"
import Experties from "./components/Experties/Experties"
import Portfolio from "./components/Portfolio/Portfolio"

const App = () => {

  return (
    <div className= {`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Experties/>
      <Portfolio/>
    </div>
  )
}
  
export default App
