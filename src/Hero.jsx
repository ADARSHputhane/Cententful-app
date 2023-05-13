import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Adarsh Puthane</h1>
          <p>Developer in JavaScript and Python frameworks 
            Please find the project I built in React JS, Python, and Javascript below. You can look at and download the source code from my GitHub website
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
