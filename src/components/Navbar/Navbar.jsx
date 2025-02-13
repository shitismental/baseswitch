import {useState, useEffect} from "react"
import "./Navbar.css"
import burgerIcon from "../../../public/icons/burger-icon.svg"
import NavbarBurgerMenu from "./NavbarBurgerMenu/NavbarBurgerMenu.jsx";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const handleBurgerMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen)
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <div className="navbar__container">
        <div className="navbar__wrapper">
        <div className="container">
          <nav className="navbar">
            <a href="#" className="navbar__logo"><span>Number Base Converter</span></a>
            <ul className="navbar__links">
              <a href="#" className="navbar__link">
                <li>Home</li>
              </a>
              <a href="#" className="navbar__link">
                <li>Converter</li>
              </a>
              <a href="#" className="navbar__link">
                <li>About</li>
              </a>
            </ul>
            <button className="navbar__burger_btn" onClick={handleBurgerMenu}>
              <img src={burgerIcon} alt="burger icon" />
            </button>
          </nav>
        </div>
        </div>
        {menuOpen && isMobile && <NavbarBurgerMenu />}
      </div>
    </>
  )
}

export default Navbar