import "./styles.css";
import { HeadeR } from "../../HeaderR";
import { MainBar } from "../../MainBar";

const Contact = () => {
  return (
    <>
      <HeadeR />
      <MainBar />

      <div className="contact-section">
        <div className="contact-section-wrap">
          <h1>Contact Us</h1>
        </div>
      </div>
    </>
  );
};

export default Contact;
