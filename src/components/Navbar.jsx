import { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import locomotiveScroll from "locomotive-scroll";

class Navbar extends Component {
  scroll = null;

  componentDidMount() {
    this.scroll = new locomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true,
    });
  }

  handleClick = (e, item) => {
    e.preventDefault();
    const targetId = item.url.substring(1); // Extract ID from URL
    const element = document.getElementById(targetId);

    if (element && this.scroll) {
      this.scroll.scrollTo(element, {
        duration: 100, // Adjust smooth scroll duration
      });
    }
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo-container">
          <h1 className="navbar-logo">V.I.B.E.</h1>
          <p className="navbar-fullform">Vacation Itinerary based on emotions</p>
        </div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => (
            <li key={index}>
              <a
                className={item.cName}
                href={item.url} //unused
                onClick={(e) => this.handleClick(e, item)}
              >
                <i className={item.title}></i>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
