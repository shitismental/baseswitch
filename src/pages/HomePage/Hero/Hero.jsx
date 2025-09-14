import { Link } from "react-router-dom"

import "./Hero.css"
import heroImg from "../../../../public/imgs/hero-img.jpg"

function Hero() {
  return (
    <>
      <div className="container hero__container">
        <div className="hero__wrapper">
          <div className="hero__img_container">
            <img className="hero__img" src={heroImg} alt="" />
          </div>
          <div className="hero__content">
            <h1 className="hero__title"><span>Welcome to Base Switch</span></h1>
            <p className="hero__desc"><span>Base Switch is designed to seamlessly convert numbers between base-3 and decimal systems. It also supports basic arithmetic operations such as addition and subtraction in these number systems. Whether you're a student, developer, or simply curious, Base Switch helps you explore the fascinating world of alternative number systems with ease.</span></p>
          </div>
          <Link to="/converter">
            <button className="hero__btn">get started</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero