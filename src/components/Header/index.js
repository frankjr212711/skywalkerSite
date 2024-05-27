import { Link } from "react-router-dom";
import "./Styles.css";

import { MainBar } from "../MainBar/index";
import { FaLocation, FaPhone } from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";
import { GoMail, GoLocation } from "react-icons/go";
import { TopBanner } from "../topBanner";
// import Logo  from "../../images/gjr-img-01.jpg";

export const Header = () => {
  return (
    <>
      <header className="website-header">
        <TopBanner />

        <div className="mainBar">
          <div className="mainBarWrap">
            <div className="inner">
              <div className="inner-wrap">
                <Link to="/" className="logo">
                  <span>{/* <img src={Logo} alt=""/> */}</span>
                  <span>LOGO</span>
                </Link>

                <ul>
                  <li>
                    <Link to="/skywalker">Skywalker</Link>
                    <div className="mega-dropdown">
                      <div className="mega-dropdown-wrap">
                        <span>
                          <img src="" alt="skywalker-logo-img"></img>
                          <h1>SKYWALKER</h1>
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
                    <div className="mega-dropdown">
                      <div className="mega-dropdown-wrap">
                        <span>
                          <img src="" alt="gjr-logo-img"></img>
                          <h1>GJR</h1>
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
                                  <small>
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
                                  <small>
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
                    <div className="mega-dropdown">
                      <div className="mega-dropdown-wrap">
                        <span>
                          <img src="" alt="librex-logo"></img>
                          <h1>LIBREX</h1>
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
                                  <small>
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
