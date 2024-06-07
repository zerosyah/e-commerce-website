import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2> {/* Correcting the text */}
        <div>
          <div className="hand-hand-icon-container">
            {" "}
            {/* Changed class name to be more descriptive */}
            <p>new</p>
            <img src={hand_icon} alt="hand icon" /> {/* Added alt text */}
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" /> {/* Added alt text */}
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  );
};

export default Hero;
