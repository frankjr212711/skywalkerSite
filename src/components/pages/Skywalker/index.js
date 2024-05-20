import "./styles.css";
import { Link } from "react-router-dom";
import { HeadeR } from "../../HeaderR";
import { MainBar } from "../../MainBar";
import { Footer } from "../../Footer";
import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaSnowflake,
  FaTiktok,
} from "react-icons/fa";
import { Carousel } from "../../CarouselSlider";
import { Slides } from "../../../data/CarouselData";
import { useState } from "react";

export const Skywalker = () => {
  return (
    <>
      <HeadeR />
      <MainBar />

      <div className="sky-content">
        <TopBanner />
        <MidBanner />
        <ThirdBanner />
        {/* <Carousel data={Slides}/> */}
        <Content />
      </div>
      <Footer />
    </>
  );
};

const Content = () => {
  const [current, setCurrent] = useState(0);

  const handleSwitch = () => {
    console.log("hie");
  };

  return (
    <>
      <div className="sky-body-content">
        <div className="sky-body-content-wrap">
          <header>
            <h1>Skywalker Filtered Miniral Water</h1>
          </header>

          <div className="main">
            <div className="expand-aside">
              <p>
                <strong>Products</strong>
              </p>

              <nav>
                <li onClick={() => setCurrent(0)}>Sachet Water</li>
                <li onClick={() => setCurrent(1)}> Dispenser Bottled</li>
                <li onClick={() => setCurrent(2)}>Dispensers</li>
              </nav>

              <br />
              <p>
                <strong>Company</strong>
              </p>

              <nav>
                <li>About</li>
                <li>Mission Statement</li>
                <li>Vission Statement</li>
              </nav>
            </div>

        
            <article className={current === 0 ? "active" : 'gone'} >
                  <h2>Sachet Water Production & Sales</h2>
                  <img src="/images/sky-img-031.jpg" alt="sachet_img" />
                  <p>
                    Lorem ipsum dolor siti amet consectetur adipisicing elit,
                    Dignissiomos similique minima tempora corrupti neque eos
                    dolorum et optio voluptatem ipsam recusandae debitis
                    aspernatur expedita, dolorem eveniet esse fuga voluptatibus,
                    quae laudantium, odit repellendus consequuntur architecto
                    facere quis. Odio queae alias sequi iusto laborum,
                    voluptatum ratione maiores laudantium, nihil debitess ipsum.
                  </p>

                  <p>
                    Lorem ipsum dolor siti amet consectetur adipisicing elit,
                    Dignissiomos similique minima tempora corrupti neque eos
                    dolorum et optio voluptatem ipsam recusandae debitis
                    aspernatur expedita, dolorem eveniet esse fuga voluptatibus,
                    quae laudantium, odit repellendus consequuntur architecto
                    facere quis. Odio queae alias sequi iusto laborum,
                    voluptatum ratione maiores laudantium, nihil debitess ipsum.
                  </p>
                </article>

                <aside className={current === 0 ? "active" : 'gone'}>
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
           
          

        
                <article className={current === 1 ? "active" : 'gone'} >
                  <h2>Dispenser Bottles</h2>
                  <img src="/images/sky-img-03.png" alt="sachet_img" />
                  <p>
                    Lorem ipsum dolor siti amet consectetur adipisicing elit,
                    Dignissiomos similique minima tempora corrupti neque eos
                    dolorum et optio voluptatem ipsam recusandae debitis
                    aspernatur expedita, dolorem eveniet esse fuga voluptatibus,
                    quae laudantium, odit repellendus consequuntur architecto
                    facere quis. Odio queae alias sequi iusto laborum,
                    voluptatum ratione maiores laudantium, nihil debitess ipsum.
                  </p>

                  <p>
                    Lorem ipsum dolor siti amet consectetur adipisicing elit,
                    Dignissiomos similique minima tempora corrupti neque eos
                    dolorum et optio voluptatem ipsam recusandae debitis
                    aspernatur expedita, dolorem eveniet esse fuga voluptatibus,
                    quae laudantium, odit repellendus consequuntur architecto
                    facere quis. Odio queae alias sequi iusto laborum,
                    voluptatum ratione maiores laudantium, nihil debitess ipsum.
                  </p>
                </article>

                <aside className={current === 1 ? "active" : 'gone'}>
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
       

        
              <article className={current === 2 ? "active" : 'gone'} >
                  <h2>Dispenser Refridgerators</h2>
                  <img src="/images/dispense-1.jpg" alt="sachet_img" />
                  <p>
                    Lorem ipsum dolor siti amet consectetur adipisicing elit,
                    Dignissiomos similique minima tempora corrupti neque eos
                    dolorum et optio voluptatem ipsam recusandae debitis
                    aspernatur expedita, dolorem eveniet esse fuga voluptatibus,
                    quae laudantium, odit repellendus consequuntur architecto
                    facere quis. Odio queae alias sequi iusto laborum,
                    voluptatum ratione maiores laudantium, nihil debitess ipsum.
                  </p>

                  <p>
                    Lorem ipsum dolor siti amet consectetur adipisicing elit,
                    Dignissiomos similique minima tempora corrupti neque eos
                    dolorum et optio voluptatem ipsam recusandae debitis
                    aspernatur expedita, dolorem eveniet esse fuga voluptatibus,
                    quae laudantium, odit repellendus consequuntur architecto
                    facere quis. Odio queae alias sequi iusto laborum,
                    voluptatum ratione maiores laudantium, nihil debitess ipsum.
                  </p>
                </article>

                <aside className={current === 2 ? "active" : 'gone'}>
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

const TopBanner = () => {
  return (
    <div className="TopBanner">
      <div className="banner-1">
        <div className="banner-1-wrap">
          <h2>Quality Drinking Water delivered accross Ghana</h2>

          <div className="social">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaTiktok />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MidBanner = () => {
  return (
    <div className="MidBanner">
      <div className="MidBanner-wrap">
        <div className="logo-box">
          <span>
            <FaSnowflake />
          </span>
          <div className="logo-text-box">
            <h1>
              SKYWALKER
              {/* <small>Filtered Mineral Water</small> */}
            </h1>
            <p>water never tasted soo good...</p>
          </div>
        </div>

        <div className="info-section">
          <span>
            <FaEnvelope />
            <Link to="mailto:info@skywalkerghana.com">
              info@skywalkerghana.com
            </Link>
          </span>
          <span className="start-work">
            <FaClock />
            <p>09:00AM - 5:00PM</p>
          </span>
          <span>
            <FaPhone />
            <p>+233 244 250 280 || +233 208 684 897</p>
          </span>
        </div>
      </div>
    </div>
  );
};

const ThirdBanner = () => {
  return (
    <div className="ThirdBanner">
      <div className="ThirdBanner-wrap"></div>
    </div>
  );
};
