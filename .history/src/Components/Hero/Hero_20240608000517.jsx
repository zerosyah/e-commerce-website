import React from 'react'
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';


 const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONL</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>collections</p>
            </div>

        </div>
        <div className="hero-right"></div>


    </div>
  )
}

export default Hero;
