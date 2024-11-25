import React, { useEffect } from "react";
import styles from "../Styles/Timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import IMS from "../Images/ims.png";
import GLBajaj from "../Images/gl_bajaj.png";

export const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Education</p>
      <p className={styles.desc}>
        The academic institutions and programs that have contributed to my
        knowledge and growth.
      </p>
      <div className={styles.timeline}>
        <div className={`${styles.box} ${styles.left_box}`}>
          <img
            className={styles.icons}
            src={GLBajaj}
            alt="brabu"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <p className={styles.title}>
              Master of Computer Applications (MCA)
            </p>
            <p className={styles.subtitle}>
              G L Bajaj Institute of Technology and Management, Greater Noida
            </p>
            <p className={styles.subtitle}>[ September 2020 - June 2022 ]</p>
            <p className={styles.description}>
              I did my MCA from G L Bajaj. Master of Computer Applications (MCA)
              is a two-year professional post-graduate course for candidates
              wanting to delve deeper into the world of Computer Application
              development with the help of learning modern programming language.
            </p>
            <span className={styles.left_box_arrow}></span>
          </div>
        </div>
        <div className={`${styles.box} ${styles.right_box}`}>
          <img
            className={styles.icons}
            src={IMS}
            alt="bseb"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <p className={styles.title}>
              Bachelor of Computer Applications (BCA)
            </p>
            <p className={styles.subtitle}>IMS Ghaziabad</p>
            <p className={styles.subtitle}>[ August 2017 - July 2020 ]</p>
            <p>
              I did my BCA from IMS Ghaziabad. It's a three-year undergraduate
              degree program that focuses on computer applications and software
              development.
            </p>
            <span className={styles.right_box_arrow}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
