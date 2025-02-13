import {Link} from "react-router-dom"

function NavbarBurgerMenu() {
  return (
    <>
      <div className="navbar__popup_menu">
        <div className="container">
          <ul className="navbar__popup_links">
            <Link to="/" className="navbar__popup_link">
              <li>Home</li>
            </Link>
            <Link to="/converter" className="navbar__popup_link">
              <li>Convert</li>
            </Link>
            <Link to="/about" className="navbar__popup_link">
              <li>About</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavbarBurgerMenu