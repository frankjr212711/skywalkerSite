import { Link } from "react-router-dom";
import { useState } from "react";
import { MainBar } from "../MainBar/index";
import { FaPlus, FaLocation, FaPhone } from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";
import { GoMail, GoLocation } from "react-icons/go";
import "./Styles.css";

export const HeadeR = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <header className="headeR">
        {/* <div className="headeR-top-bar">
          <nav>
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/about">Why Us?</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link>Book A Design Visit</Link>
              </li>
              <li>
                <Link>Request A Brochure</Link>
              </li>
            </ul>
          </nav>
        </div> */}
        <div className="headeRBar">
          <div className="headeRWrap">
            <div className="headeR-inner">
              <div className="headeR-inner-wrap">
                <Link to="/" className="headeRlogo">
                  <span>{/* <img src={Logo} alt=""/> */}</span>
                  <span>LOGO</span>
                </Link>

                <ul>
                  <li>
                    <Link to="/skywalker">Skywalker</Link>
                    <div className="headeR-mega-dropdown">
                      <div className="headeR-mega-dropdown-wrap">
                        <span>
                          <h2>
                            Learn how to apply and begin your studies at
                            Skywalker
                          </h2>
                          <button>
                            <Link to="/skywalker">Visit Page</Link>
                          </button>
                        </span>
                        <span>
                          <ul>
                            <li>
                              <Link to="">Natural Mineral Water</Link>
                            </li>
                            <li>
                              <Link to="">Sachet Water</Link>
                            </li>
                            <li>
                              <Link to="">Dispenser Bottles</Link>
                            </li>
                          </ul>
                        </span>
                        <span>
                          <ul>
                            {/* <li><Link to="">Natural Mineral Water</Link></li> */}
                            {/* <li><Link to="">Sachet Water</Link></li> */}
                            <li>
                              <Link to="">Dispenser Bottles</Link>
                            </li>
                          </ul>
                        </span>
                        <span>
                          <h3>Contact Details</h3>
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
                                    <strong>Odaso,</strong> Nana Kofi Yeboah
                                    High Street. behind Wood Village Kumasi
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
                                    <strong>Adabraka</strong>, High St. Adjacent
                                    Golden Hotel Accra
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
                            </li>
                          </ul>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/gjr">GJR Works</Link>
                    <div className="headeR-mega-dropdown">
                      <div className="headeR-mega-dropdown-wrap">
                        <span>
                          <h2>
                            Learn how to apply and begin your studies at
                            Skywalker
                          </h2>
                          <button>
                            <Link to="/gjr">Visit Page</Link>
                          </button>
                        </span>
                        <span>
                          <ul>
                            <li>
                              <Link to="">Interior Designs</Link>
                            </li>
                            <li>
                              <Link to="">General Wood Works</Link>
                            </li>
                            <li>
                              <Link to="">Road Construction</Link>
                            </li>
                            <li>
                              <Link to="">Building Construction</Link>
                            </li>
                          </ul>
                        </span>
                        <span>
                          <ul>
                            <li>
                              <Link to="">Plumbing Works</Link>
                            </li>

                            <li>
                              <Link to="">General Merchant</Link>
                            </li>
                            <li>
                              <Link to="">Janitorial Services</Link>
                            </li>
                            {/* <li>
                              <Link to="">Civil Works</Link>
                            </li> */}
                          </ul>
                        </span>
                        <span>
                          <h3>Contact Details</h3>
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
                                    <strong>Odaso,</strong> Nana Kofi Yeboah
                                    High Street. behind Wood Village Kumasi
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
                                    <strong>Adabraka</strong>, High St. Adjacent
                                    Golden Hotel Accra
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
                            </li>
                          </ul>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/librex">Librex Holding</Link>
                    <div className="headeR-mega-dropdown">
                      <div className="headeR-mega-dropdown-wrap">
                        <span>
                          <h2>
                            Learn how to apply and begin your studies at
                            Skywalker
                          </h2>
                          <button>
                            <Link to="/librex">Visit Page</Link>
                          </button>
                        </span>
                        <span>
                          <ul>
                            <li>
                              <Link to="">Crytello</Link>
                            </li>
                            <li>
                              <Link to="">Pamello</Link>
                            </li>
                          </ul>
                        </span>
                        <span>
                          <ul>
                            <li>
                              <Link to="">Waterello</Link>
                            </li>
                            <li>
                              <Link to="">Ritello</Link>
                            </li>
                          </ul>
                        </span>
                        <span>
                          <h3>Contact Details</h3>
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
                                    <strong>Odaso,</strong> Nana Kofi Yeboah
                                    High Street. behind Wood Village Kumasi
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
                                    <strong>Adabraka</strong>, High St. Adjacent
                                    Golden Hotel Accra
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
                            </li>
                          </ul>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <MainBar />
      </header>
    </>
  );
};
