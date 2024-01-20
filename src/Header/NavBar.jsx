import "./style.css";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <header class="header active" data-header>
      <div class="container">
        <a href="#" class="logo">
          <img
            src={logo}
            width="110"
            height="53"
            alt="zerolatency"
          />
        </a>

        <nav class="navbar" data-navbar>
          <ul class="navbar-list">
            <li class="navbar-item">
              <a href="#home" class="navbar-link" data-nav-link>
                home
              </a>
            </li>

            <li class="navbar-item">
              <a href="#tournament" class="navbar-link" data-nav-link>
                events
              </a>
            </li>

            <li class="navbar-item">
              <a href="#news" class="navbar-link" data-nav-link>
                sponsors
              </a>
            </li>

            <li class="navbar-item">
              <a href="#" class="navbar-link" data-nav-link>
                contact
              </a>
            </li>
          </ul>
        </nav>

        <a href="https://forms.gle/4hJcWo5N8dcaTPgX9" class="btn" data-btn>
          Register Now
        </a>

        <button
          class="nav-toggle-btn"
          aria-label="toggle menu"
          data-nav-toggler
        >
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
        </button>
      </div>
    </header>
  );
};
export default NavBar;
