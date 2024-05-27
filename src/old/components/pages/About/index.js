import "./styles.css";
import { HeadeR } from "../../HeaderR";
import { MainBar } from "../../MainBar";

export const About = () => {
  return (
    <>
      <HeadeR />
      <MainBar />

      <div className="about-section">
        <div className="about-section-wrap">
        <h1>About Us</h1>
        </div>
      </div>
    </>
  );
};
