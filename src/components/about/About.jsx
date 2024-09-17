import React from "react";
import "./About.css";
import { Bio } from "../../assets/data/Constants";
import Hero from "../../assets/images/HeroImage.jpg";
import { Typewriter } from "react-simple-typewriter";

function About() {
  return (
    <div className="about-container">
      <div className="hero-contant">
        <h1>Hello, I am {Bio.name}</h1>
        <h2>
          I am a{" "}
          <span>
            <Typewriter
              words={Bio.roles}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </span>
        </h2>

        <p>{Bio.description}</p>
        <button className="hero-btn">
          <a href={Bio.resume} target="_blank" rel="noopener noreferrer">
            Check My Resume
          </a>
        </button>
      </div>

      <div className="image-div">
        <img src={Hero} alt="Profile Image" />
      </div>
    </div>
  );
}

export default About;
