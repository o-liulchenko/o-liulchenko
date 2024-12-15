import { FC } from "react";
import styles from "./HomeComponent.module.css";

import github from "../../assets/img/github.svg";
import gmail from "../../assets/img/gmail.svg";
import linkedin from "../../assets/img/linkedin.svg";

interface IHomeComponentProps {}

const HomeComponent: FC<IHomeComponentProps> = () => {
  const contacts = [
    {
      img: github,
      link: "https://github.com/o-liulchenko",
    },
    {
      img: linkedin,
      link: "https://www.linkedin.com/in/o-liulchenko/",
    },
    {
      img: gmail,
      link: "mailto:o.liulchenko@gmail.com",
    },
  ];

  return (
    <section id="home" className={`container ${styles.container}`}>
      <h1 className={`${styles.nameTitle} titleText`}>Liulchenko Oleksandr</h1>
      <h2 className={`${styles.jobTitle} titleText`}>Fullstack Developer</h2>
      <ul className={styles.contacts}>
        {contacts.map(({ img, link }) => (
          <li className={styles.icon}>
            <a href={link}>
              <img src={img} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeComponent;
