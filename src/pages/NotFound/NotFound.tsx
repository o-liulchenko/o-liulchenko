import { FC } from "react";
import styles from "./NotFound.module.css";

interface INotFoundProps {}

const NotFound: FC<INotFoundProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.bsod} ${styles.container}`}>
        <h1 className={`${styles.neg} ${styles.title}`}>
          <span className={styles.bg}>Error - 404</span>
        </h1>
        <p>An error has occured, to continue:</p>
        <p>
          * Return to our homepage.
          <br />* Send us an e-mail about this error and try later.
        </p>
        <nav className={styles.nav}>
          <a href="#" className={styles.link}>
            index
          </a>
          &nbsp;|&nbsp;
          <a href="#" className={styles.link}>
            webmaster
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NotFound;
