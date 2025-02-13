import {Link} from "react-router-dom"

function NavbarBurgerMenu() {
  return (
    <>
      <div className="navbar__popup_menu">
        <div className="container">
          <ul className="navbar__popup_links">
            <a href="/" className="navbar__popup_link">
              <li>Home</li>
            </a>
            <a href="/converter" className="navbar__popup_link">
              <li>Convert</li>
            </a>
            <a href="/about" className="navbar__popup_link">
              <li>About</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavbarBurgerMenu