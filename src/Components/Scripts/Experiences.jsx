import React, { useEffect } from "react";
import styles from "../Styles/Timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LeewayHertz from "../Images/leewayHertz.png";
import Ten from "../Images/ten.webp";

export const Experiences = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Experiences</p>
      <p className={styles.desc}>
        The experiences and roles that have helped me grow and develop my skills
        in the tech field.
      </p>
      <div className={styles.timeline}>
        <div className={`${styles.box} ${styles.left_box}`}>
          <img
            className={styles.icons}
            src={Ten}
            alt="TEn Logo"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <p className={styles.title}>The Entrepreneurship Network</p>
            <p className={styles.subtitle}>React Js Developer</p>
            <p className={styles.subtitle}>September 2024 - Present</p>
            <div className={styles.tags_box}>
              <span className={styles.tags}>React js</span>
              <span className={styles.tags}>JavaScript</span>
              <span className={styles.tags}>HTML</span>
              <span className={styles.tags}>CSS</span>
            </div>
            <p className={styles.description}>
              As a React.js Developer Intern at The Entrepreneurship Network, I
              am actively involved in developing dynamic, user-friendly web
              applications. My role focuses on building and optimizing
              responsive UI components, integrating APIs, and ensuring smooth
              application performance. I bring a strong passion for crafting
              scalable and maintainable React applications while collaborating
              effectively with cross-functional teams.
            </p>
            <div className={styles.button_box}>
              {/* <a href="#" target="_blank" rel="noreferrer">
                Experience Letter
              </a> */}
              <a>Experience Letter</a>
            </div>
            <span className={styles.left_box_arrow}></span>
          </div>
        </div>

        <div className={`${styles.box} ${styles.right_box}`}>
          <img
            className={styles.icons}
            src={LeewayHertz}
            alt="LeewayHertz Logo"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <p className={styles.title}>LeewayHertz Technology</p>
            <p className={styles.subtitle}>Node Js Developer</p>
            <p className={styles.subtitle}>February 2022 - March 2023</p>
            <div className={styles.tags_box}>
              <span className={styles.tags}>Node js</span>
              <span className={styles.tags}>React js</span>
              <span className={styles.tags}>Express js</span>
              <span className={styles.tags}>MongoDB</span>
              <span className={styles.tags}>JavaScript</span>
            </div>
            <p className={styles.description}>
              As a Node.js Developer with one year of hands-on experience at
              LeewayHertz, I am passionate about building efficient, scalable,
              and robust backend systems. My expertise lies in developing
              RESTful APIs, optimizing server performance, and ensuring seamless
              integration with frontend applications. I am committed to writing
              clean, maintainable code and solving complex problems to deliver
              high-quality backend solutions.
            </p>
            <div className={styles.button_box}>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-e032c.appspot.com/o/experience%20letter.pdf?alt=media&token=c44063e2-7f8a-4ab0-836f-8e07351865f0"
                target="_blank"
                rel="noreferrer"
              >
                Experience Letter
              </a>
            </div>
            <span className={styles.right_box_arrow}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
