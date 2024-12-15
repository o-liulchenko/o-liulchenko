import { FC } from "react";
import styles from "./AboutComponent.module.css";

import photo from "../../assets/img/my-photo.jpg";

interface IAboutComponentProps {}

const AboutComponent: FC<IAboutComponentProps> = () => {
  return (
    <section id="about" className={`container ${styles.container}`}>
      <img src={photo} alt="" className={styles.photo}/>
      <article className={styles.content}>
        <h3 className={`titleText ${styles.title}`}>About Me</h3>
        <p className={styles.contentDescription}>
          Hi, I'm Full-stack developer. I'm open to working with highly
          qualified developers for improve my skills. I'm working every day to
          be better in React, Redux, NodeJS, JavaScript in general.
        </p>
        <button className={styles.downloadCV}>Download CV</button>
      </article>
    </section>
  );
};

export default AboutComponent;
