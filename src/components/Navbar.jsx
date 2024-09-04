import { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo-container">

        <h1 className="navbar-logo">V.I.B.E.</h1>
        <p className="navbar-fullform">Vacation Itinerary based on emotions</p>
        </div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href="/">
                  <i className={item.title}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

