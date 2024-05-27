import "./styles.css";
import { Link } from "react-router-dom";
import { HeadeR } from "../../HeaderR";
import { MainBar } from "../../MainBar";
import {
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaPhone,
  FaTiktok,
} from "react-icons/fa";
import { Footer } from "../../Footer";
import { useState } from "react";

const GJR = () => {
  return (
    <>
      <HeadeR />
      <MainBar />

      <div className="content">
        {/* <TopBanner /> */}
        <MidBanner />
        <ThirdBanner />
        <FourthBanner />

        <Content />
      </div>
      <Footer />
    </>
  );
};

const TopBanner = () => {
  return (
    <div className="top-Banner">
      <div className="top-Banner-wrap">
        <div className="gjr-logo">
          <FaHome />
        </div>

        <div className="socials">
          <FaFacebook className="fa" />
          <FaInstagram className="fa" />
          <FaTiktok className="fa" />
        </div>
      </div>
    </div>
  );
};

const MidBanner = () => {
  return (
    <div className="midBanner">
      <div className="midBanner-wrap">
        <h2>
          G<strong>J</strong>R COMPANY LIMITED
        </h2>

        <div className="contact-sec">
          <span>
            <FaEnvelope className="contact-icon" />
            <Link to="mailto:info@skywalkerghana.com" className="email">
              info@skywalkerghana.com
            </Link>
          </span>

          <span>
            <FaPhone className="contact-icon" />
            <p>+233 244 250 280 || +233 209 915 946</p>
          </span>
        </div>
      </div>
    </div>
  );
};

const ThirdBanner = () => {
  return (
    <div className="thirdBanner">
      <div className="thirdBannerWrap"></div>
    </div>
  );
};

const FourthBanner = () => {
  return (
    <div className="forthBanner">
      <div className="forthBanner-wrap">
        <Link to="">BOOK A DESIGN VISIT</Link>
        <Link to="">REQUEST A BROCHURE</Link>
      </div>
    </div>
  );
};

const Content = () => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div className="gjr-body-content">
        <div className="gjr-body-content-wrap">
          <header>
            <h1>GJR Company Limited</h1>
          </header>

          <div className="gjr-main">
            <div className="expand-aside">
              <p>
                <strong>Home Designs</strong>
              </p>
              <nav>
                <li onClick={() => setCurrent(0)}>Wardrobes</li>
                <li onClick={() => setCurrent(1)}>Kitchens</li>
                <li onClick={() => setCurrent(2)}>TV Units</li>
                <li onClick={() => setCurrent(3)}>Vanity Units</li>
                <br />
              </nav>

              <p>
                <strong>Construction</strong>
              </p>

              <nav>
                <li onClick={() => setCurrent(4)}>Road Construction</li>
                <li onClick={() => setCurrent(5)}>Building Construction</li>
                <li onClick={() => setCurrent(6)}>Plumbing Works</li>
                <br />
              </nav>
              <nav>
                <p>
                  <strong>General Services</strong>
                </p>
                <li onClick={() => setCurrent(7)}>Janitorial Services</li>
                <li onClick={() => setCurrent(8)}>General Merchant</li>
                <br />
              </nav>
              {/* <nav>
                <p>
                  <strong>Company</strong>
                </p>
                <li>About</li>
                <li>Mission Statement</li>
                <li>Vission Statement</li>
              </nav> */}
            </div>

            <article className={current === 0 ? "active" : "gone"}>
              <h2>Wordrobes</h2>
              <img src="/images/gjr-img-03.jpg" alt="sachet_img" />
              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>

              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>
            </article>

            <aside className={current === 0 ? "active" : "gone"}>
              <ul>
                <li>
                  <p>
                    <strong>Slide Wordrobes</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
              </ul>
            </aside>

            <article className={current === 1 ? "active" : "gone"}>
              <h2>Kitchens</h2>
              <img src="/images/gjr-img-02.jpg" alt="sachet_img" />
              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>

              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>
            </article>

            <aside className={current === 1 ? "active" : "gone"}>
              <ul>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
              </ul>
            </aside>

            <article className={current === 2 ? "active" : "gone"}>
              <h2>TV Units</h2>
              <img src="/images/gjr-img-05.jpg" alt="sachet_img" />
              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>

              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>
            </article>

            <aside className={current === 2 ? "active" : "gone"}>
              <ul>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
              </ul>
            </aside>

            <article className={current === 3 ? "active" : "gone"}>
              <h2>Vanity Units</h2>
              <img src="/images/gjr-img-06.jpg" alt="sachet_img" />
              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>

              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>
            </article>

            <aside className={current === 3 ? "active" : "gone"}>
              <ul>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
              </ul>
            </aside>

            <article className={current === 4 ? "active" : "gone"}>
              <h2>Road Construction</h2>
              <img src="/images/gjr-img-07.jpg" alt="sachet_img" />
              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>

              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>
            </article>

            <aside className={current === 4 ? "active" : "gone"}>
              <ul>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
              </ul>
            </aside>

            <article className={current === 5 ? "active" : "gone"}>
              <h2>Building Construction</h2>
              <img src="/images/gjr-img-08.jpg" alt="sachet_img" />
              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>

              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>
            </article>

            <aside className={current === 5 ? "active" : "gone"}>
              <ul>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
              </ul>
            </aside>

            <article className={current === 6 ? "active" : "gone"}>
              <h2>Plumbing Works</h2>
              <img src="/images/gjr-img-09.jpg" alt="sachet_img" />
              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>

              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>
            </article>

            <aside className={current === 6 ? "active" : "gone"}>
              <ul>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
              </ul>
            </aside>

            <article className={current === 7 ? "active" : "gone"}>
              <h2>Janitorial Works</h2>
              <img src="/images/gjr-img-10.jpg" alt="sachet_img" />
              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>

              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>
            </article>

            <aside className={current === 7 ? "active" : "gone"}>
              <ul>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
              </ul>
            </aside>

            <article className={current === 8 ? "active" : "gone"}>
              <h2>General Merchant</h2>
              <img src="/images/gjr-img-11.jpg" alt="sachet_img" />
              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>

              <p>
                Lorem ipsum dolor siti amet consectetur adipisicing elit,
                Dignissiomos similique minima tempora corrupti neque eos dolorum
                et optio voluptatem ipsam recusandae debitis aspernatur
                expedita, dolorem eveniet esse fuga voluptatibus, quae
                laudantium, odit repellendus consequuntur architecto facere
                quis. Odio queae alias sequi iusto laborum, voluptatum ratione
                maiores laudantium, nihil debitess ipsum.
              </p>
            </article>

            <aside className={current === 8 ? "active" : "gone"}>
              <ul>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <p>May 6th 2022</p>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <p>Games and Consoles</p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <p>Mario</p>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default GJR;
