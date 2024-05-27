import { Link } from "react-router-dom";
import "./styles.css";

export const TopBanner = () => {
  return (
    <div className="top-bar">
      <nav>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">Why Us?</Link>
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
  );
};
