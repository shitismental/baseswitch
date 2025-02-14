import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import AboutHero from "./AboutHero/AboutHero.jsx"

function AboutPage() {
  return(
    <>
      <div className="page__container">
        <Navbar />
        <AboutHero />
        <Footer />
      </div>
    </>
  )
}

export default AboutPage