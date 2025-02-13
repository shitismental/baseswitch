import Navbar from "../../components/Navbar/Navbar.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import Hero from "./Hero/Hero.jsx"
import "./HomePage.css"

function HomePage() {
  return(
    <>
      <div className="page__container">
        <Navbar></Navbar>
        <Hero></Hero>
        <Footer></Footer>
      </div>
    </>
  )
}

export default HomePage