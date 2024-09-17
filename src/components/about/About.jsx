import React from "react";
import "./About.css";
import { Bio } from "../../assets/data/Constants";
import Hero from "../../assets/images/HeroImage.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="hero-contant">
        <h1>Hello, I am {Bio.name}</h1>
        <h2>I am a {Bio.roles[0]}</h2>
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
