import "./styles.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { GoMail, GoLocation } from "react-icons/go";
import { ImPhoneHangUp } from "react-icons/im";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footerWrap">
        <div className="foot-section-one">
          <div className="footer-logo">
            <h1>LOGO</h1>
          </div>

          <ul>
            <li>
              <span>
                <span className="icon">
                  <GoMail />
                </span>
                <Link to="mailto:info@skywalkerghana.com">
                  info@skywalkerghana.com
                </Link>
              </span>
            </li>
            <li>
              <div className="ksi-branch">
                <p>Kumasi Branch</p>
                <span>
                  <i className="icon">
                    <GoLocation />
                  </i>
                  <small>
                    <strong>Odaso,</strong> Nana Kofi Yeboah High Street. behind
                    Wood Village Kumasi
                  </small>
                </span>
                <span>
                  <i className="icon">
                    <ImPhoneHangUp />
                  </i>
                  <small href="">+233 244 250 280 || +233 208 684 897</small>
                </span>
              </div>

              <div className="acc-branch">
                <p>Accra Branch</p>
                <span>
                  <i className="icon">
                    <GoLocation />
                  </i>
                  <small>
                    <strong>Adabraka</strong>, High St. Adjacent Golden Hotel
                    Accra
                  </small>
                </span>
                <span>
                  <i className="icon">
                    <ImPhoneHangUp />
                  </i>
                  <small href="">+233 244 250 280 || +233 208 684 897</small>
                </span>
              </div>
            </li>
          </ul>

          <div className="media">
          <FaFacebook />
          <FaInstagram />
          <FaTiktok />
        </div>
        </div>
        <div className="foot-section-two">
          <h3>Skywalker Co.</h3>
          <nav>
            <p>
              <strong>Products & Services</strong>
            </p>
            <li>Sachet Water</li>
            <li>Dispenser Bottled</li>
            <li>Dispenser Machines</li>
            <br />

            <p>
              <strong>Company</strong>
            </p>
            <li>About Us</li>
            <li>Request Brochure</li>
            <li>Book a desing visit </li>

          </nav>
        </div>
        <div className="foot-section-three">
          <h3>GJR Co. Ltd.</h3>
          <nav>
            <p>
              <strong>Home Designs</strong>
            </p>
            <li>Wardrobes</li>
            <li>TV Units</li>
            <li>Vanity Units</li>
            <br />
            <p>
              <strong>Construction</strong>
            </p>
            <li>Road Construction</li>
            <li>Building Construction</li>
            <li>Plumbing Works</li>
            <br />

            <p>
              <strong>General Services</strong>
            </p>
            <li>Janitorial Services</li>
            <li>General Merchant</li>
          </nav>
        </div>
        <div className="foot-section-four">
          <h3>Librex Holding</h3>
          <nav>
            <p>
              <strong>Waterex System</strong>
            </p>
            <li>Pamello</li>
            <li>Waterello</li>
            <li>Crystello</li>
            <br />
            <p>
              <strong>Read more?</strong>
            </p>
            <li>
              Click this <Link to="//www.waterexsystem.com" target="_blank">link</Link> to visit
              website
            </li>
            <br/>

            <p>
              <strong>Ritello</strong>
            </p>
            <li>Ritello</li>
          
            <li>
              Click this <Link to="//www.ritello.com" target="_blank">link</Link> to visit
              website
            </li>
          </nav>
        </div>
       
      </div>

      <div className="bottom-footer">
        &copy;2024 Skywalker Co. Ltd. All right reserved.
      </div>
    </div>
  );
};
