import {Link} from "react-router-dom"

import "./Hero.css"
import heroImg from "../../../../public/imgs/hero-img.jpg"

function Hero() {
  return(
    <>
      <div className="container hero__container">
        <div className="hero__wrapper">
          <div className="hero__img_container">
            <img className="hero__img" src={heroImg} alt="" />
          </div>
          <div className="hero__content">
            <h1 className="hero__title"><span>Welcome to Number System Converter</span></h1>
            <p className="hero__desc"><span>This Number System Converter is designed to seamlessly convert numbers between various systems such as binary, octal, decimal and hexadecimal. Whether you're a student, developer, or just curious, this tool is here to help you explore the fascinating world of number systems with ease.</span></p>
          </div>
          <a href="/converter">
            <button className="hero__btn">get started</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Hero