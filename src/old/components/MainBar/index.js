import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";
import { GoMail, GoLocation } from "react-icons/go";
import "./styles.css";

export const MainBar = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="main-bar">
        <div className="main-bar-content">
          <Link to="/" className="lo-go">
            <span>{/* <img src={Logo} alt=""/> */}</span>
            <span>LOGO</span>
          </Link>

          <div className="menus" onClick={() => setClick(!click)}>
            <div
              className={click ? "closeBtn" : "menuBtn"}
              onClick={() => setClick(!click)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {click && (
            <div className="drop-menu">
              <ul>
                <li id="sky-btn">
                  <a href="#sky-btn">
                    <span>Waters</span>
                    <span>
                      <FaPlus />
                    </span>
                  </a>
                  <ul>
                    <li>
                      <Link to="/skywalker">Sachet Water</Link>
                    </li>
                    <li>
                      <Link to="/skywalker">Dispenser Bottles</Link>
                    </li>
                    <li>
                      <Link to="/skywalker">Dispenser Fridge</Link>
                    </li>
                  </ul>
                </li>
                <li id="gjr-btn">
                  <a href="#gjr-btn">
                    <span>GJR</span>
                    <span>
                      <FaPlus />
                    </span>
                  </a>
                  <ul>
                    <li>
                      <Link to="/gjr">Wardrobes</Link>
                    </li>
                    <li>
                      <Link to="/gjr">Kitchens</Link>
                    </li>
                    <li>
                      <Link to="/gjr">TV Units</Link>
                    </li>
                    <li>
                      <Link to="/gjr">Vanity Units</Link>
                    </li>
                    {/* <li>
                      <Link to="/gjr">Plumbing Works</Link>
                    </li>
                    <li>
                      <Link to="/gjr">General Merchant</Link>
                    </li> 
                    <li>
                      <Link to="/gjr">Janitorial Services</Link>
                    </li>*/}
                  </ul>
                </li>
                <li id="lib-btn">
                  <a href="#lib-btn">
                    <span>Librex Holdings</span>
                    <span>
                      <FaPlus />
                    </span>
                  </a>
                  <ul>
                    <li>
                      <Link to="/librex">Crystello</Link>
                    </li>
                    <li>
                      <Link to="/librex">Pamello</Link>
                    </li>
                    <li>
                      <Link to="/librex">Waterello</Link>
                    </li>
                    <li>
                      <Link to="/librex">Ritello</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="details-section">
                <div>
                  <h3>Contact Details</h3>

                  <span>
                    <span className="icon">
                      <GoMail />
                    </span>
                    <Link to="mailto:info@skywalkerghana.com">
                      info@skywalkerghana.com
                    </Link>
                  </span>

                  <div className="ksi-branch">
                    <p>Kumasi Branch</p>
                    <span>
                      <i className="icon">
                        <GoLocation />
                      </i>
                      <small>
                        <strong>Odaso,</strong> Nana Kofi Yeboah High Street.
                        behind Wood Village Kumasi
                      </small>
                    </span>
                    <span>
                      <i className="icon">
                        <ImPhoneHangUp />
                      </i>
                      <small href="">
                        +233 244 250 280 || +233 208 684 897
                      </small>
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
                      <small href="">
                        +233 244 250 280 || +233 208 684 897
                      </small>
                    </span>
                  </div>
                </div>

                <div className="btns">
                  <button>
                    <Link to="/about">About Us</Link>
                  </button>

                  {/* <button>
                    <Link to="/about">Book A Design Visit</Link>
                  </button> */}

                  {/* <button>
                    <Link to="/about">Request A Brochure</Link>
                  </button> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
