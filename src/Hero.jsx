import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>ContentFul CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque
            quos tempore officiis libero perspiciatis dolorum veniam cupiditate
            ducimus, natus quisquam optio quidem, earum, debitis officia? Optio
            maxime pariatur a!
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
