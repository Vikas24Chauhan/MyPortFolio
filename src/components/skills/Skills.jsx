import React from "react";
import "./Skills.css";
import { skills } from "../../data/Constants";

function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <h2>Here are some of my skills on which I am Working</h2>
      <div className="skills-cards">
        {skills.map((data) => (
          <div key={data.id} className="skills-card">
            <h1>{data.title}</h1>
            <div className="skills-items">
              {data.skills.map((item) => (
                <div className="item">
                  <img src={item.image} alt="Skills Logo" />
                  <h4>{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
