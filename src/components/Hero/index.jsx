import "./styles.css";
import { Link } from "react-router-dom";
import Video from "~/assets/videos/video-6.mp4";

export const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroBg">
        <video autoPlay loop muted src={Video} type="video/mp4" />
      </div>

      <div className="heroContent">
        <div className="heroContentWrap">
          <div className="heroText">
            <h1>WHY SETTLE FOR LESS?</h1>
            <p>
              Book a Design visit today & lets work towards your modern style
              home
            </p>
            <button className="heroBtn">
              <Link to="/gjr">LEARN MORE</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="explore">
        <button className="ex-btn">
          <Link to="#">Explore</Link>
        </button>
      </div>
    </div>
  );
};
