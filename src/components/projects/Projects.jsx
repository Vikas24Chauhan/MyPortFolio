import React from "react";
import "./Projects.css";
import { projects } from "../../assets/data/Constants";

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-cards">
        {projects.map((data) => (
          <div key={data.id} className="projects-card">
            {data.id % 2 == 0 ? (
              <>
                <div className="projects-details1">
                  <h2>{data.type}</h2>
                  <img src={data.image} alt="Project Image" />
                </div>
                <div className="projects-details2">
                  <h2>{data.title}</h2>
                  <p>{data.description}</p>
                  <div className="projects-tags">
                    {data.tags.map((t, index) => (
                      <h4>{t}</h4>
                    ))}
                  </div>
                  <button className="projects-btn">
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check It
                    </a>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="projects-details2">
                  <h2>{data.title}</h2>
                  <p>{data.description}</p>
                  <div className="projects-tags">
                    {data.tags.map((t, index) => (
                      <h4>{t}</h4>
                    ))}
                  </div>
                  <button className="projects-btn">
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check It
                    </a>
                  </button>
                </div>
                <div className="projects-details1">
                  <h2>{data.type}</h2>
                  <img src={data.image} alt="Project Image" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
