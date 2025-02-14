import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

import burgerIcon from "../../../public/icons/burger-icon.svg"
import NavbarBurgerMenu from "./NavbarBurgerMenu/NavbarBurgerMenu.jsx";

import "./Navbar.css"

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
            <Link to="/" className="navbar__logo">
              <span>Number System Converter</span>
            </Link>
            <ul className="navbar__links">
              <Link to="/" className="navbar__link">
                <li>Home</li>
              </Link>
              <Link to="/converter" className="navbar__link">
                <li>Converter</li>
              </Link>
              <Link to="/about" className="navbar__link">
                <li>About</li>
              </Link>
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