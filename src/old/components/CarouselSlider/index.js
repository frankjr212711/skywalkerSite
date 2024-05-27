import "./styles.css";
import { useState, useEffect, useRef } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const length = data.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setSlide((slide) => (slide === length - 1 ? 0 : slide + 1));
    };
    timeout.slide = setTimeout(nextSlide, 2000);

    return function () {
      if (timeout.slide) {
        clearTimeout(timeout.slide);
      }
    };
  }, [slide, length]);

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrap">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        {data.map((item, idx) => (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        ))}

        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <span className="indicators">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          ))}
        </span>
      </div>
    </div>
  );
};
