import { Link } from "react-router-dom";
import Styles from "./Styles.css";
// import Logo  from "../../images/gjr-img-01.jpg";

export const HeaderAlias = () => {
  return (
    <>
      <header className="website-header">
        <div className="top-bar">
          <nav>
            <ul>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Visit</Link>
              </li>
              <li>
                <Link>Mission</Link>
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
        </div>
        <div className="mainBarAnnex">
          <div className="mainBarWrapAnnex">
            <div className="innerAnnex">
              <div className="inner-wrap-annex">
                <Link to="/" className="logoAnnex">
                  <span>{/* <img src={Logo} alt=""/> */}</span>
                  <span>LOGO</span>
                </Link>

                <ul>
                  <li>
                    <Link to="/skywalker">Skywalker</Link>

                    <div className="mega-dropdown-annex">
                      <div className="mega-dropdown-wrap-annex">
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
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/gjr">GJR Works</Link>
                    <div className="mega-dropdown-annex">
                      <div className="mega-dropdown-wrap-annex">
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
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/librex">Librex Holdings</Link>
                    <div className="mega-dropdown-annex">
                      <div className="mega-dropdown-wrap-annex">
                        <span>
                          <h2>
                            Learn how to apply and begin your studies at
                            Skywalker
                          </h2>
                          <button>
                            <Link to="/librex" className="link">Visit Page</Link>
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
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="menuBtn">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
