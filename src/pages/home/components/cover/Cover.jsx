import { useState } from "react";
import "./Cover.css";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { sliders } from "../../../../utils/data";

const Cover = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleArrow = (arrow) => {
    if (arrow === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };
  return (
    <section className="cover">
      <div className="container">
        <div className="slider-container">
          <div className="arrows">
            <div className="left-arrow" onClick={() => handleArrow("left")}>
              <BsChevronLeft />
            </div>
            <div className="right-arrow" onClick={() => handleArrow("right")}>
              <BsChevronRight />
            </div>
          </div>
          <div
            className="slider-wrapper"
            style={{ transform: `translateX(${sliderIndex * -100}%)` }}
          >
            {sliders &&
              sliders.map((slider) => (
                <div
                  className="slider"
                  style={{ backgroundColor: `${slider.bg}` }}
                >
                  <div className="container">
                    <div className="slider-left">
                      <div className="slider-content">
                        <h1 className="slider-title">{slider.title}</h1>
                        <h2 className="slider-big-text">{slider.bigText}</h2>
                        <p className="slider-desc">{slider.desc}</p>
                        <button
                          className="cover-btn"
                          style={{ color: `${slider.bg}` }}
                        >
                          Shop Now
                        </button>
                      </div>
                    </div>
                    <div className="slider-right">
                      <img
                        className="slider-img"
                        key={slider.id}
                        src={slider.img}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
