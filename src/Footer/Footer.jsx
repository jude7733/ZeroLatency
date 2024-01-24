import "./footer.css";
import logo from "../assets/logo.png";
import { ArrowUpIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={logo} width="250" loading="lazy" alt="logo" />
            </a>

            <p className="footer-text">
              First ever gaming experience event happening in Bharata Mata
              College in collaboration with GDSC BMC and Xfinity BMC.
            </p>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <InstagramLogoIcon color="#d4ce2d" />
                </a>
              </li>
            </ul>
          </div>
          <div className="list-container">
            <div className="footer-list">
              <p className="title footer-list-title has-after">Usefull Links</p>
              <ul>
                <li>
                  <a href="#" className="footer-link">
                    Tournaments
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Help Center
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Privacy and Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Terms of Use
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-list">
              <p className="title footer-list-title has-after">Contact Us</p>
              <div className="contact-item" id="contact">
                <br />
                <span className="span">Location:</span>

                <address className="contact-link">
                  Bharata Mata College, Thrikkakara, Kochi - 682021
                </address>
              </div>

              <div className="contact-item">
                <span className="span">Join Us: </span>

                <a href="mailto:Info@unigine.com" className="contact-link">
                  zlatbmc@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <span className="span">Phone: </span>

                <a href="tel:+918086738656" className="contact-link">
                  +91 80867 38656
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 ZeroLatency. All Rights Reserved.
          </p>
        </div>
      </div>

      <a
        href="#top"
        className="back-top-btn"
        aria-label="back to top"
        data-back-top-btn
      >
        <ArrowUpIcon color="white" />
      </a>
    </footer>
  );
};

export default Footer;
