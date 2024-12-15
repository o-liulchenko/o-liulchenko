import { FC } from "react";
import styles from "./SkillsComponent.module.css";

import html5 from "../../assets/img/html5.svg";
import css from "../../assets/img/css.svg";
import js from "../../assets/img/js.svg";
import react from "../../assets/img/react.svg";
import redux from "../../assets/img/redux.svg";
import angular from "../../assets/img/angular.svg";
import ngrx from "../../assets/img/ngrx.png";
import nodejs from "../../assets/img/nodejs.svg";
import postrgesql from "../../assets/img/postgresql.svg";
import mongodb from "../../assets/img/mongodb.svg";

interface ISkillsComponentProps {}

const SkillsComponent: FC<ISkillsComponentProps> = () => {
  const skills = [
    {
      title: "Frontend",
      skills: [
        {
          title: "HTML5",
          image: html5,
        },
        {
          title: "CSS3",
          image: css,
        },
        {
          title: "JavaScript",
          image: js,
        },
        {
          title: "React",
          image: react,
        },
        {
          title: "Angular",
          image: angular,
        },
        {
          title: "Redux Toolkit",
          image: redux,
        },
        {
          title: "NgRx",
          image: ngrx,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          title: "NodeJS",
          image: nodejs,
        },
        {
          title: "PostgreSQL",
          image: postrgesql,
        },
        {
          title: "MongoDB",
          image: mongodb,
        },
      ],
    },
  ];

  return (
    <section id="skills" className={`container ${styles.container}`}>
      <div className={styles.wrapper}>
        <article className={styles.description}>
          <h3 className={`titleText ${styles.descriptionTitle}`}>Skills</h3>
          <p>
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between.
          </p>
        </article>
        <article className={styles.skillsCategoryList}>
          {skills.map(({ title, skills }) => (
            <ul key={title} className={styles.skillsList}>
              <h5 className={`titleText ${styles.skillsCategory}`}>{title}</h5>
              {skills.map(({ title, image }) => (
                <li key={title} className={styles.skillItem}>
                  <img src={image} className={styles.skillIcon} />
                  {title}
                </li>
              ))}
            </ul>
          ))}
        </article>
      </div>
    </section>
  );
};

export default SkillsComponent;
