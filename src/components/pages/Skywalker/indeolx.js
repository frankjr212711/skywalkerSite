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
// import { Carousel } from "../../CarouselSlider";
// import { Slides } from "../../../data/CarouselData";
import { useState } from "react";

const Skywalker = () => {
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
                <li onClick={() => setCurrent(0)}>Sachet Waters</li>
                <li onClick={() => setCurrent(1)}> Water Refill Bottles</li>
                <li onClick={() => setCurrent(2)}>Water Dispensers</li>
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

            <article className={current === 0 ? "active" : "gone"}>
              <h2>Sachet Waters</h2>
              <img src="/images/sky-img-01.jpg" alt="sachet_img" />
              <p>
                Water sachets or sachet water is a common form of selling
                pre-filtered or sanitized water in plastic, heat sealed bags in
                parts of the global south, and are especially popular in Africa.
                Water sachets are cheaper to produce than plastic bottles, and
                easier to transport. In some countries, water vendors refer to
                sachet water as "pure water".
              </p>

              <p>
                High demand, and poor collection of waste from consumers, has
                resulted in significant plastic pollution and waste from sachets
                throughout the West Africa. Accumulation of sachets frequently
                causes blocked stormwater drainage, and other issues. Some
                countries, such as Senegal, have banned disposable sachets.
                Because sachets are frequently filled in small and often
                unregulated facilities, inadequate sanitary conditions can
                occasionally result in disease or contamination. However, in
                countries like Ghana consumers still prefer that access over
                other forms of venders, with a perception of lower risk. This
                form of water distribution provides vital access to water in
                communities that otherwise wouldn't have it. However, some
                scholars have identified this method of distribution as having
                potential human rights and social justice issues, limiting the
                right to water and sanitation.
              </p>
            </article>

            <aside className={current === 0 ? "active" : "gone"}>
              <ul>
                <li>
                  <p>
                    <strong>Item:</strong>
                  </p>
                  <p>Sachet Water</p>
                </li>
                <li>
                  <p>
                    <strong>Type:</strong>
                  </p>
                  <p>Drinking water</p>
                </li>
                <li>
                  <p>
                    <strong>Capacity:</strong>
                  </p>
                  <p>500ml</p>
                </li>
                <li>
                  <p>
                    <strong>Size:</strong>
                  </p>
                  <p>320mm*140mm*0.0.5mm</p>
                </li>

                <li>
                  <p>
                    <strong>HPC Level:</strong>
                  </p>
                  <p>86.7%</p>
                </li>
                <li>
                  <p>
                    <strong>Weight:</strong>
                  </p>
                  <p>N.W.: 15-20kg/roll, 2 rolls/carton</p>
                </li>
              </ul>
            </aside>

            <article className={current === 1 ? "active" : "gone"}>
              <h2>Refill Water Bottles</h2>
              <img src="/images/sky-img-03.png" alt="sachet_img" />
              <p>
                One of our best-selling products is our 15-liter spring water
                bottles. Customers adore the crisp, refreshing flavor of our
                water and keep coming back for more bottles.
              </p>

              <p>
                We are pleased to announce that our bottles are completely
                recyclable and contain 30% less plastic than our previous
                bottles. They contain no BPA at all.
              </p>
            </article>

            <aside className={current === 1 ? "active" : "gone"}>
              <ul>
                <li>
                  <p>
                    <strong>Item:</strong>
                  </p>
                  <p>Refill Bottle</p>
                </li>
                <li>
                  <p>
                    <strong>Type:</strong>
                  </p>
                  <p>Bottle with Hole Handle</p>
                </li>
                <li>
                  <p>
                    <strong>Dimensions:</strong>
                  </p>
                  <p>25.4x25.5 x 45.72 cm</p>
                </li>

                <li>
                  <p>
                    <strong>Capacity:</strong>
                  </p>
                  <p>18.5 Litres(5 gallons)</p>
                </li>
              </ul>
            </aside>

            <article className={current === 2 ? "active" : "gone"}>
              <h2>Dispenser Refridgerators</h2>
              <img src="/images/sky-img-02.jpg" alt="sachet_img" />
              <p>
                A water dispenser, known as water cooler (if used for cooling
                only), is a machine that dispenses and often also cools or heats
                up water with a refrigeration unit. It is commonly located near
                the restroom due to closer access to plumbing. A drain line is
                also provided from the water cooler into the sewer system.
              </p>

              <p>
                Water dispensers come in a variety of form factors, ranging from
                wall-mounted to bottle filler water dispenser combination units,
                to bi-level units and other formats. They are generally broken
                up into two categories: point-of-use (POU) water dispensers and
                bottled water dispensers. POU water dispensers are connected to
                a water supply, while bottled water dispensers require delivery
                (or self-pick-up) of water in large bottles from vendors.
                Bottled water dispensers can be top-mounted or bottom-loaded,
                depending on the design of the model. Bottled water dispensers
                typically use 11- or 22-liter (5- or 10-gallon) dispensers
                commonly found on top of the unit. Pressure coolers are a
                subcategory of water dispensers encompassing drinking water
                fountains and direct-piping water dispensers. Water cooler may
                also refer to a primitive device for keeping water cool
              </p>
            </article>

            <aside className={current === 2 ? "active" : "gone"}>
              <ul>
                <li>
                  <p>
                    <strong>Item:</strong>
                  </p>
                  <p>Water Dispenser</p>
                </li>
                <li>
                  <p>
                    <strong>Type:</strong>
                  </p>

                  <p>* Bottled water dispensers </p>
                </li>
                <li>
                  <p>
                    <strong>Capacity:</strong>
                  </p>
                  <p>18.5 Litre </p>
                </li>

                <li>
                  <p>
                    <strong>Size:</strong>
                  </p>
                  <p>
                    <strong>Depth:</strong> 372mm
                  </p>
                  <p>
                    <strong>Height:</strong> 1003mm
                  </p>
                  <p>
                    <strong>Width:</strong> 318mm
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Weight:</strong>
                  </p>
                  <p>
                    <strong>Small water bottle:</strong> 8-12 oz: 0.4 to 0.6
                    pounds (approximately)
                  </p>
                  <p>
                    <strong>Medium water bottle:</strong> 16-20 oz: 0.8 to 1
                    pounds (approximately)
                  </p>
                  <p>
                    <strong>Large water bottle:</strong> 24-32 oz: 1.2 to 1.5
                    pounds (approximately)
                  </p>
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
export default Skywalker;
