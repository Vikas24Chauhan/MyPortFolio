import React from "react";
import "./Education.css";
import { education } from "../../assets/data/Constants";

function Education() {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <p>
        My Education has been a journey of self-discovery and growth. My
        Education details are as follows.
      </p>
      <div className="education-cards">
        {education.map((data) => (
          <div key={data.id} className="education-card">
            <img src={data.img} alt="College Logo" />
            <h2>{data.school}</h2>
            <h3>Degree :- {data.degree}</h3>
            <h4>{data.date}</h4>
            <h4>Grade :- {data.grade}</h4>
            <p className="college-desc">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
