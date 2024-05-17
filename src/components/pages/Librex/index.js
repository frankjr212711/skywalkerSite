import "./styles.css";
import { Link } from "react-router-dom";
import { HeadeR } from "../../HeaderR";
import { MainBar } from "../../MainBar";
import { Footer } from "../../Footer";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useState } from "react";

export const Librex = () => {
  return (
    <>
      <HeadeR />
      <MainBar />
      <div className="lib-content">
        <div className="lib-content-wrap">
          <div className="lib-banner">
            <div className="lib-banner-wrap">
              <div className="main-banner">
                <div className="lib-logo">
                  <h1>Librex Holding</h1>
                  <p>THE PRODUCTS OF THE FUTURE</p>
                </div>

                <div className="products">
                  <Link to="//www.waterexsystem.com" target="_blank">
                    VISIT OFFICIAL WEBSITE
                    <FaAngleDoubleRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Content />
      </div>

      <Footer />
    </>
  );
};

const Content = () => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="gjr-body-content">
        <div className="gjr-body-content-wrap">
          <header>
            <h1>Ritello System</h1>
          </header>

          <div className="lib-main">
            <div className="expand-aside">
              <nav>
                <p>
                  <strong>Waterex System</strong>
                </p>
                <li onClick={() => setCurrent(0)}>Pamello</li>
                <li onClick={() => setCurrent(1)}>Waterello</li>
                <li onClick={() => setCurrent(2)}>Crystello</li>
                <br />
              </nav>
              <nav>
                <p>
                  <strong>Ritello</strong>
                </p>
                <li onClick={() => setCurrent(3)}>Ritello </li>
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
              <h2>Pamello</h2>
              <img src="/images/lib-img-pam-01.jpg" alt="sachet_img" />
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
                    <strong>Published on:</strong>
                  </p>
                  <span>May 6th 2022</span>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <span>Games and Consoles</span>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <span>Mario</span>
                </li>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <span>May 6th 2022</span>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <span>Games and Consoles</span>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <span>Mario</span>
                </li>
              </ul>
            </aside>

            <article className={current === 1 ? "active" : "gone"}>
              <h2>Waterello</h2>
              <img src="/images/img-pam-01" alt="sachet_img" />
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
                  <span>May 6th 2022</span>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <span>Games and Consoles</span>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <span>Mario</span>
                </li>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <span>May 6th 2022</span>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <span>Games and Consoles</span>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <span>Mario</span>
                </li>
              </ul>
            </aside>

            <article className={current === 2 ? "active" : "gone"}>
              <h2>Crystello</h2>
              <img src="/images/img-pam-01" alt="sachet_img" />
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
                  <span>May 6th 2022</span>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <span>Games and Consoles</span>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <span>Mario</span>
                </li>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <span>May 6th 2022</span>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <span>Games and Consoles</span>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <span>Mario</span>
                </li>
              </ul>
            </aside>

            <article className={current === 3 ? "active" : "gone"}>
              <h2>Ritello</h2>
                <img src="/images/ritello.jpg" alt="sachet_img" />
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
                  <span>May 6th 2022</span>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <span>Games and Consoles</span>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <span>Mario</span>
                </li>
                <li>
                  <p>
                    <strong>Published on:</strong>
                  </p>
                  <span>May 6th 2022</span>
                </li>
                <li>
                  <p>
                    <strong>In the category:</strong>
                  </p>
                  <span>Games and Consoles</span>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong>
                  </p>
                  <span>Mario</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
