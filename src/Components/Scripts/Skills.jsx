import styles from "../Styles/Skills.module.css";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
import Reactjs from "../Images/reactjs.png";
// import MERN from "../Images/mern.png";
import HTML from "../Images/html.png";
import CSS from "../Images/css.png";
import JavaScript from "../Images/javascript.png";
import Nodejs from "../Images/nodejs.png";
import Expressjs from "../Images/expressjs.png";
import MongoDB from "../Images/mongodb.png";
import RestAPI from "../Images/restapi.png";
import Git from "../Images/git.png";
import GitHub from "../Images/github.png";
import VSCode from "../Images/vscode.png";
import ChatGPT from "../Images/chatgpt.png";
import C from "../Images/c.png";
import Java from "../Images/java.png";
import Python from "../Images/python.png";

export const Skills = () => {
  useEffect(() => {
    const isTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };

    if (!isTouchDevice()) {
      const elements = document.querySelectorAll(".tilt");
      elements.forEach((element) => {
        VanillaTilt.init(element, {
          max: 25,
          speed: 400,
          reverse: true,
          glare: true,
          scale: 1.1,
          "max-glare": 0.3,
        });
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Skills</p>
      <p className={styles.desc}>
        Tools and programming languages I utilize to create and develop
        innovative projects.
      </p>

      <div className={styles.cards_container}>
        <div className={styles.row}>
          {/* Programming Language Section */}
          <div className={`${styles.cards} tilt`}>
            <div>Languages</div>
            <div className={styles.tech_box}>
              <div className={styles.tech}>
                <img src={C} alt="c" />C
              </div>
              <div className={styles.tech}>
                <img src={Java} alt="java" />
                Java
              </div>
              <div className={styles.tech}>
                <img src={Python} alt="python" />
                Python
              </div>
              <div className={styles.tech}>
                <img src={JavaScript} alt="javascript" />
                JavaScript
              </div>
            </div>
          </div>

          {/* FrontEnd Section */}
          <div className={`${styles.cards} tilt`}>
            <div>Frontend</div>
            <div className={styles.tech_box}>
              <div className={styles.tech}>
                <img src={Reactjs} alt="reactjs" />
                React.js
              </div>
              {/* <div className={styles.tech}>
                <img src={MERN} alt="mern" />
                MERN Stack
              </div> */}
              <div className={styles.tech}>
                <img src={HTML} alt="html" />
                HTML
              </div>
              <div className={styles.tech}>
                <img src={CSS} alt="css" />
                CSS
              </div>
              <div className={styles.tech}>
                <img src={JavaScript} alt="javascript" />
                JavaScript
              </div>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          {/* BackEnd Section */}
          <div className={`${styles.cards} tilt`}>
            <div>Backend & Database</div>
            <div className={styles.tech_box}>
              <div className={styles.tech}>
                <img src={Nodejs} alt="nodejs" />
                Node.js
              </div>
              <div className={styles.tech}>
                <img src={Expressjs} alt="expressjs" />
                Express.js
              </div>
              <div className={styles.tech}>
                <img src={MongoDB} alt="mongodb" />
                MongoDB
              </div>
              <div className={styles.tech}>
                <img src={RestAPI} alt="restapi" />
                REST API
              </div>
            </div>
          </div>

          {/* Other Tools Section */}
          <div className={`${styles.cards} tilt`}>
            <div>Other Tools</div>
            <div className={styles.tech_box}>
              <div className={styles.tech}>
                <img src={Git} alt="git" />
                Git
              </div>
              <div className={styles.tech}>
                <img src={GitHub} alt="github" />
                GitHub
              </div>

              <div className={styles.tech}>
                <img src={VSCode} alt="vscode" />
                VS Code
              </div>

              <div className={styles.tech}>
                <img src={ChatGPT} alt="chatgpt" />
                ChatGPT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
