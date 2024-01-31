import "./nav.css";
import logo from "../assets/logo.png";
import { useState } from "react";
import { DropdownMenuIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#">
          <img
            className="logo"
            src={logo}
            width="auto"
            height="73"
            alt="zerolatency"
          />
        </a>

        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li className="navbar-item">
              <a href="#home">HOME</a>
            </li>
            <li className="navbar-item">
              <a href="#events">EVENTS</a>
            </li>
            <li className="navbar-item">
              <a href="#sponsers">SPONSERS</a>
            </li>
            <li className="navbar-item">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          {/* <ButtonAnimation>
            <a href="https://forms.gle/4hJcWo5N8dcaTPgX9">
              <Button size={{ initial: "1", sm: "2", md: "2", xl: "4" }}>
                Register
              </Button>
            </a>
          </ButtonAnimation> */}
          <div className="menu-icon" onClick={handleShowNavbar}>
            {!showNavbar && <HamburgerMenuIcon />}
            {showNavbar && <DropdownMenuIcon />}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
