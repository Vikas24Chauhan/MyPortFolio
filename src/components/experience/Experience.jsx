import React from "react";
import "./Experience.css";
import { experiences } from "../../data/Constants";

function Experience() {
  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <h2>I have experience as a Node Js Developer</h2>
      <div className="experience-cards">
        {experiences.map((data) => (
          <div key={data.id} className="experience-card">
            <div className="details1">
              <img src={data.img} alt="Company Logo" />
              <button
                className="experience-btn"
                onClick={() =>
                  window.open(data.doc, "_blank", "noopener noreferrer")
                }
              >
                Experience Letter
              </button>
            </div>
            <div className="details2">
              <h2>{data.company}</h2>
              <h4>{data.date}</h4>
              <h2>{data.role}</h2>
              <p>{data.desc}</p>
              <h3>
                {data.skills.map((s, index) => (
                  <h5>• {s}</h5>
                ))}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
