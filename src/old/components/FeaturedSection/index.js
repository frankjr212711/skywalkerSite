import "./styles.css";
import { Link } from "react-router-dom";


export const FeaturedSection = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((item, idx) => (
        <div
          className="featured-section"
          key={idx}
          style={{ backgroundColor: item.bgColor, color: item.txtColor}}
        >
          <div className="featuredWrap">
            <div className="featured-card">
              <div className="image-box">
                <video
                  autoPlay
                  loop
                  muted
                  src={item.videoPath}
                  type="video/mp4"
                ></video>
              </div>
              <div className="text-box">
                <p>{item.titleOne}</p>
                <h1>{item.titleTwo}</h1>
                <p>{item.textOne}</p>

                <button className="featuredBtn" style={{backgroundColor: item.btnBgColor, color: item.txtColor}}>
                  <Link to={item.btnLink}>LEARN MORE</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
