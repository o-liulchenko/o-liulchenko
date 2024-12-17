import { FC } from "react";
import styles from "./FooterComponent.module.css";

import github from "../../../assets/img/github.svg";
import gmail from "../../../assets/img/gmail.svg";
import linkedin from "../../../assets/img/linkedin.svg";

interface IFooterComponentProps {}

const FooterComponent: FC<IFooterComponentProps> = () => {
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
    <footer className={`container ${styles.footer}`}>
      <ul className={styles.contacts}>
        {contacts.map(({ img, link }) => (
          <li className={styles.icon}>
            <a href={link}>
              <img src={img} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default FooterComponent;
