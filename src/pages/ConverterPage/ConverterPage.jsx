import Navbar from "../../components/Navbar/Navbar.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import Converter from "./Converter/Converter.jsx"

function ConverterPage() {
  return (
    <>
      <div className="page__container">
        <Navbar />
        <Converter />
        <Footer />
      </div>
    </>
  )
}

export default ConverterPage